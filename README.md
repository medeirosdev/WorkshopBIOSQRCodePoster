# WorkshopBIOSQRCodePoster

Página do pôster **"Quantização em LLMs locais: caracterização do custo energético e de carbono da inferência"**, pôster nº 04 do III Workshop do BI0S (Unicamp, 22 e 23 de outubro de 2026).

**Acesse:** https://medeirosdev.github.io/WorkshopBIOSQRCodePoster/

O QR code do pôster aponta para esta página: [`qrcode/qrcode.png`](qrcode/qrcode.png).

## O que tem na página

- as respostas às quatro perguntas do pôster;
- uma calculadora de CO₂ com os valores medidos (modelo, formato, lote e rede elétrica);
- as figuras e a tabela do pôster, e mais gráficos do experimento;
- o pôster em PDF;
- a biblioteca de medição usada no trabalho: [energy-bench](https://github.com/medeirosdev/energy-bench) (`pip install energy-bench`).

## Dados

As energias vêm das medições numa GPU NVIDIA L40S, com 256 tokens de pergunta e 256 de resposta. Os fatores de emissão são do [MCTI/SIRENE](https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/sirene/dados-e-ferramentas/fatores-de-emissao) (Brasil, média de 2025: 46,1 gCO₂/kWh) e da [Ember](https://ember-energy.org/latest-insights/global-electricity-review-2026/) (média mundial de 2025: 458 gCO₂e/kWh).

Site estático: `index.html`, `assets/css`, `assets/js` e `assets/dados.js`. Não precisa de build.

---

Guilherme de Medeiros Ellena · Matemática Aplicada e Computacional · IMECC · Unicamp
