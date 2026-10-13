(() => {
  const D = window.DADOS;
  const nf = (v, casas = 1) => v.toLocaleString("pt-BR", { minimumFractionDigits: casas, maximumFractionDigits: casas }).replace("-", "−");
  const sinal = (v, casas = 1) => (v > 0 ? "+" : "") + nf(v, casas);

  // ---------------- calculadora ----------------
  const estado = { modelo: "qwen3-8b", formato: "vllm-awq", lote: 1, rede: "br", expoente: 6 };
  const $ = (id) => document.getElementById(id);

  function segmentado(el, opcoes, chave) {
    el.innerHTML = "";
    for (const o of opcoes) {
      const b = document.createElement("button");
      b.type = "button";
      b.innerHTML = o.html;
      b.setAttribute("aria-pressed", String(estado[chave] === o.valor));
      b.addEventListener("click", () => { estado[chave] = o.valor; render(); });
      el.appendChild(b);
    }
  }

  function formatos() { return D.modelos[estado.modelo].formatos; }
  function formatoAtual() { return formatos().find((f) => f.id === estado.formato) || formatos()[0]; }
  function original(f) { return formatos().find((g) => g.id === f.id.split("-")[0] + "-bf16"); }

  function quantidade(exp) {
    const n = Math.pow(10, exp);
    if (n >= 1e9) return nf(n / 1e9, n % 1e9 ? 1 : 0) + (n / 1e9 >= 2 ? " bilhões" : " bilhão");
    if (n >= 1e6) return nf(n / 1e6, n % 1e6 ? 1 : 0) + (n / 1e6 >= 2 ? " milhões" : " milhão");
    return nf(n / 1e3, n % 1e3 ? 1 : 0) + " mil";
  }

  function massa(g) {
    if (g >= 1e6) return [nf(g / 1e6, g >= 1e7 ? 0 : 1), "t"];
    if (g >= 1e3) return [nf(g / 1e3, g >= 1e4 ? 0 : 1), "kg"];
    return [nf(g, g >= 10 ? 0 : 1), "g"];
  }

  function co2(joules, n, fator) { return joules * n / 3.6e6 * fator; }

  function render() {
    const m = D.modelos[estado.modelo];
    segmentado($("c-modelo"), Object.entries(D.modelos).map(([k, v]) => ({ valor: k, html: v.nome })), "modelo");
    if (!formatos().some((f) => f.id === estado.formato)) estado.formato = "vllm-awq";
    const fichas = $("c-formato");
    fichas.innerHTML = "";
    for (const f of formatos()) {
      const b = document.createElement("button");
      b.type = "button";
      const tag = f.id.startsWith("hf-") ? '<span class="tag">bnb</span>' : "";
      b.innerHTML = (f.nome === "BF16 (original)" ? "BF16 original" : f.nome) + tag;
      if (f.id === "hf-bf16") b.innerHTML = 'BF16 original<span class="tag">transformers</span>';
      b.setAttribute("aria-pressed", String(f.id === estado.formato));
      b.addEventListener("click", () => { estado.formato = f.id; render(); });
      fichas.appendChild(b);
    }
    const f = formatoAtual();
    $("c-runtime").textContent = "Executado com " + f.runtime + ".";
    segmentado($("c-lote"), [
      { valor: 1, html: "1 por vez<small>um usuário</small>" },
      { valor: 16, html: "16 juntas<small>servidor com fila</small>" },
    ], "lote");
    segmentado($("c-rede"), D.redes.map((r) => ({ valor: r.id, html: `${r.nome}<small>${nf(r.fator, r.fator < 100 ? 1 : 0)} g/kWh</small>` })), "rede");

    const n = Math.pow(10, estado.expoente);
    $("c-n-rotulo").textContent = quantidade(estado.expoente);
    const rede = D.redes.find((r) => r.id === estado.rede);
    const mundo = D.redes.find((r) => r.id === "mundo");
    const J = estado.lote === 1 ? f.J1 : f.J16;
    const o = original(f);
    const Jo = estado.lote === 1 ? o.J1 : o.J16;
    const g = co2(J, n, rede.fator);
    const [v, u] = massa(g);
    $("r-co2").innerHTML = `${v} <span style="font-size:.5em;font-weight:700">${u} de CO₂</span>`;
    const kwh = J * n / 3.6e6;
    const poupa = 1 - J / Jo;
    let det = `${nf(kwh, kwh >= 100 ? 0 : 1)} kWh · ${nf(J, 0)} J por resposta`;
    if (f.id !== o.id) det += ` · ${poupa >= 0 ? "−" : "+"}${nf(Math.abs(poupa) * 100, 0)}% de energia vs. o original`;
    $("r-detalhe").textContent = det;

    const linhas = [
      { rot: `Sua escolha (${f.nome === "BF16 (original)" ? "original" : f.nome}, ${estado.lote === 1 ? "1 por vez" : "16 juntas"}, ${rede.nome})`, g, atual: true },
      { rot: `Original, 1 por vez, ${rede.nome}`, g: co2(o.J1, n, rede.fator) },
      { rot: "Original, 1 por vez, média mundial", g: co2(o.J1, n, mundo.fator) },
    ];
    const max = Math.max(...linhas.map((l) => l.g));
    $("r-barras").innerHTML = linhas.map((l) => {
      const [vv, uu] = massa(l.g);
      return `<div class="barra-linha"><div class="barra-topo"><span>${l.rot}</span><span>${vv} ${uu}</span></div>
        <div class="trilho"><div class="preenchimento${l.atual ? " atual" : ""}" style="width:${Math.max(1.5, l.g / max * 100).toFixed(1)}%"></div></div></div>`;
    }).join("");

    const q = $("r-qualidade");
    q.className = "alerta";
    if (f.pior === null) {
      q.innerHTML = "<b>Modelo original.</b> É a referência de qualidade: as perdas dos outros formatos são medidas contra ele.";
    } else if (J > Jo) {
      q.classList.add("ruim");
      q.innerHTML = `<b>Este formato consome mais energia que o original</b> (+${nf((J / Jo - 1) * 100, 0)}%): nesta configuração, comprimir não traz economia.`;
    } else if (f.pior <= -5 && f.pior_demonstrada) {
      q.classList.add("ruim");
      q.innerHTML = `<b>Atenção à qualidade:</b> em ${f.pior_dominio}, a acurácia caiu ${nf(Math.abs(f.pior))} pontos (perda demonstrada), enquanto no MMLU a variação foi de ${sinal(f.mmlu)}. Vale avaliar o formato com perguntas da sua aplicação.`;
    } else {
      q.classList.add("bom");
      q.innerHTML = `<b>Qualidade:</b> pior perda de ${nf(f.pior)} pontos (${f.pior_dominio}), sem perda demonstrada além da margem de 5 pontos.`;
    }
  }

  $("c-n").addEventListener("input", (e) => { estado.expoente = parseFloat(e.target.value); render(); });
  render();

  // ---------------- galeria ----------------
  const GALERIA = [
    ["carbono_por_rede", "No Brasil, a mesma resposta emite ~10× menos CO₂"],
    ["lote_vs_compressao", "Agrupar perguntas economiza mais do que comprimir"],
    ["rede_brasileira", "O fator de emissão da rede brasileira, mês a mês"],
    ["curvas_de_energia", "O NF4 só compensa a partir de alguns tokens de resposta"],
    ["qualidade_por_dominio", "A perda do NF4 depende do domínio"],
    ["qualidade_por_formato", "Qualidade de cada formato, domínio a domínio"],
    ["energia_por_acerto", "Errar também custa energia"],
    ["fluxo_metodo", "O método para escolher a quantização no seu domínio"],
  ];
  $("galeria-lista").innerHTML = GALERIA.map(([arq, leg]) => `
    <figure class="revelar"><button class="zoom" data-src="assets/img/${arq}.webp" aria-label="Ampliar: ${leg}">
      <img src="assets/img/${arq}.webp" alt="${leg}" loading="lazy"></button>
      <figcaption>${leg}</figcaption></figure>`).join("");

  // ---------------- lightbox ----------------
  const dlg = $("lightbox");
  const dimg = dlg.querySelector("img");
  document.addEventListener("click", (e) => {
    const z = e.target.closest(".zoom");
    if (z) {
      dimg.src = z.dataset.src;
      dimg.alt = z.querySelector("img")?.alt || "";
      dlg.showModal();
      return;
    }
    if (e.target === dlg || e.target.closest(".fechar")) dlg.close();
  });

  // ---------------- copiar ----------------
  document.querySelectorAll(".copiar").forEach((b) => b.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(b.dataset.copiar);
      b.textContent = "copiado ✓";
    } catch {
      b.textContent = "selecione e copie";
    }
    setTimeout(() => { b.textContent = "copiar"; }, 1800);
  }));

  // ---------------- entrada suave ----------------
  const alvos = document.querySelectorAll(".cartao, .figura, .tabela-bloco, .texto-bloco, .eb, .calc, .revelar");
  alvos.forEach((el) => el.classList.add("revelar"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visivel"); io.unobserve(e.target); }
    }), { rootMargin: "0px 0px -8% 0px" });
    alvos.forEach((el) => io.observe(el));
  } else {
    alvos.forEach((el) => el.classList.add("visivel"));
  }
})();
