// gerado por poster/site.py a partir das análises da F5 (GPU L40S, 256 tokens de pergunta e de resposta)
window.DADOS = {
 "modelos": {
  "qwen3-8b": {
   "nome": "Qwen3-8B",
   "formatos": [
    {
     "id": "vllm-bf16",
     "nome": "BF16 (original)",
     "runtime": "vLLM",
     "J1": 1544.1,
     "J16": 161.6,
     "pior": null,
     "pior_dominio": null,
     "pior_demonstrada": null,
     "mmlu": null
    },
    {
     "id": "vllm-fp8",
     "nome": "FP8",
     "runtime": "vLLM",
     "J1": 889.0,
     "J16": 100.6,
     "pior": -2.3,
     "pior_dominio": "programação",
     "pior_demonstrada": false,
     "mmlu": 1.0
    },
    {
     "id": "vllm-gptq",
     "nome": "GPTQ",
     "runtime": "vLLM",
     "J1": 555.5,
     "J16": 64.5,
     "pior": -7.0,
     "pior_dominio": "finanças",
     "pior_demonstrada": true,
     "mmlu": -0.5
    },
    {
     "id": "vllm-awq",
     "nome": "AWQ",
     "runtime": "vLLM",
     "J1": 569.0,
     "J16": 66.9,
     "pior": -5.3,
     "pior_dominio": "finanças",
     "pior_demonstrada": true,
     "mmlu": 1.2
    },
    {
     "id": "hf-bf16",
     "nome": "BF16 (original)",
     "runtime": "transformers + bitsandbytes",
     "J1": 1661.4,
     "J16": 192.9,
     "pior": null,
     "pior_dominio": null,
     "pior_demonstrada": null,
     "mmlu": null
    },
    {
     "id": "hf-nf4",
     "nome": "NF4",
     "runtime": "transformers + bitsandbytes",
     "J1": 1059.4,
     "J16": 171.5,
     "pior": -14.7,
     "pior_dominio": "finanças",
     "pior_demonstrada": true,
     "mmlu": 1.5
    },
    {
     "id": "hf-int8",
     "nome": "INT8",
     "runtime": "transformers + bitsandbytes",
     "J1": 2217.8,
     "J16": 311.6,
     "pior": -1.7,
     "pior_dominio": "programação",
     "pior_demonstrada": false,
     "mmlu": 2.0
    }
   ]
  },
  "llama3.1-8b": {
   "nome": "Llama-3.1-8B",
   "formatos": [
    {
     "id": "vllm-bf16",
     "nome": "BF16 (original)",
     "runtime": "vLLM",
     "J1": 1482.8,
     "J16": 152.8,
     "pior": null,
     "pior_dominio": null,
     "pior_demonstrada": null,
     "mmlu": null
    },
    {
     "id": "vllm-fp8",
     "nome": "FP8",
     "runtime": "vLLM",
     "J1": 874.3,
     "J16": 96.6,
     "pior": -3.3,
     "pior_dominio": "matemática",
     "pior_demonstrada": false,
     "mmlu": -0.2
    },
    {
     "id": "vllm-int8",
     "nome": "INT8 W8A8",
     "runtime": "vLLM",
     "J1": 823.7,
     "J16": 92.0,
     "pior": -1.3,
     "pior_dominio": "programação",
     "pior_demonstrada": false,
     "mmlu": -0.5
    },
    {
     "id": "vllm-gptq",
     "nome": "GPTQ",
     "runtime": "vLLM",
     "J1": 521.0,
     "J16": 62.0,
     "pior": -5.7,
     "pior_dominio": "matemática",
     "pior_demonstrada": true,
     "mmlu": -3.2
    },
    {
     "id": "vllm-awq",
     "nome": "AWQ",
     "runtime": "vLLM",
     "J1": 520.3,
     "J16": 61.1,
     "pior": -10.3,
     "pior_dominio": "finanças",
     "pior_demonstrada": true,
     "mmlu": -3.2
    },
    {
     "id": "hf-bf16",
     "nome": "BF16 (original)",
     "runtime": "transformers + bitsandbytes",
     "J1": 1564.6,
     "J16": 208.6,
     "pior": null,
     "pior_dominio": null,
     "pior_demonstrada": null,
     "mmlu": null
    },
    {
     "id": "hf-nf4",
     "nome": "NF4",
     "runtime": "transformers + bitsandbytes",
     "J1": 835.7,
     "J16": 178.8,
     "pior": -7.7,
     "pior_dominio": "medicina",
     "pior_demonstrada": true,
     "mmlu": -2.0
    },
    {
     "id": "hf-int8",
     "nome": "INT8",
     "runtime": "transformers + bitsandbytes",
     "J1": 1810.7,
     "J16": 293.0,
     "pior": -3.7,
     "pior_dominio": "matemática",
     "pior_demonstrada": false,
     "mmlu": 1.0
    }
   ]
  }
 },
 "redes": [
  {
   "id": "br",
   "nome": "Brasil",
   "fator": 46.1,
   "fonte": "MCTI/SIRENE, média de 2025"
  },
  {
   "id": "ue",
   "nome": "União Europeia",
   "fator": 210,
   "fonte": "Ember, 2025"
  },
  {
   "id": "eua",
   "nome": "EUA",
   "fator": 384,
   "fonte": "Ember, 2025"
  },
  {
   "id": "mundo",
   "nome": "Média mundial",
   "fator": 458,
   "fonte": "Ember, 2025"
  }
 ]
};
