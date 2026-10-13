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
     "mmlu": null,
     "suites": []
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
     "mmlu": 1.0,
     "suites": [
      {
       "id": "generico_mmlu",
       "nome": "MMLU",
       "n": 400,
       "acc_orig": 59.2,
       "acc_comp": 60.2,
       "acertos_orig": 237,
       "acertos_comp": 241,
       "delta": 1.0,
       "ic": [
        -0.6,
        2.6
       ],
       "status": "não-inferior",
       "so_orig": 3,
       "so_comp": 7,
       "nao_lidas": 46
      },
      {
       "id": "generico_gsm8k",
       "nome": "GSM8K",
       "n": 400,
       "acc_orig": 94.8,
       "acc_comp": 92.8,
       "acertos_orig": 379,
       "acertos_comp": 371,
       "delta": -2.0,
       "ic": [
        -4.0,
        0.0
       ],
       "status": "não-inferior",
       "so_orig": 12,
       "so_comp": 4,
       "nao_lidas": 0
      },
      {
       "id": "medicina_pt",
       "nome": "medicina",
       "n": 300,
       "acc_orig": 64.0,
       "acc_comp": 63.0,
       "acertos_orig": 192,
       "acertos_comp": 189,
       "delta": -1.0,
       "ic": [
        -3.4,
        1.4
       ],
       "status": "não-inferior",
       "so_orig": 8,
       "so_comp": 5,
       "nao_lidas": 1
      },
      {
       "id": "direito_pt",
       "nome": "direito",
       "n": 300,
       "acc_orig": 49.7,
       "acc_comp": 48.7,
       "acertos_orig": 149,
       "acertos_comp": 146,
       "delta": -1.0,
       "ic": [
        -4.3,
        2.3
       ],
       "status": "não-inferior",
       "so_orig": 14,
       "so_comp": 11,
       "nao_lidas": 10
      },
      {
       "id": "financas_en",
       "nome": "finanças",
       "n": 300,
       "acc_orig": 71.0,
       "acc_comp": 70.3,
       "acertos_orig": 213,
       "acertos_comp": 211,
       "delta": -0.7,
       "ic": [
        -2.6,
        1.3
       ],
       "status": "não-inferior",
       "so_orig": 5,
       "so_comp": 3,
       "nao_lidas": 0
      },
      {
       "id": "programacao_en",
       "nome": "programação",
       "n": 300,
       "acc_orig": 42.7,
       "acc_comp": 40.3,
       "acertos_orig": 128,
       "acertos_comp": 121,
       "delta": -2.3,
       "ic": [
        -4.6,
        -0.1
       ],
       "status": "não-inferior",
       "so_orig": 9,
       "so_comp": 2,
       "nao_lidas": 2
      },
      {
       "id": "matematica_en",
       "nome": "matemática",
       "n": 300,
       "acc_orig": 73.3,
       "acc_comp": 72.3,
       "acertos_orig": 220,
       "acertos_comp": 217,
       "delta": -1.0,
       "ic": [
        -3.7,
        1.8
       ],
       "status": "não-inferior",
       "so_orig": 10,
       "so_comp": 7,
       "nao_lidas": 59
      }
     ]
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
     "mmlu": -0.5,
     "suites": [
      {
       "id": "generico_mmlu",
       "nome": "MMLU",
       "n": 400,
       "acc_orig": 59.2,
       "acc_comp": 58.8,
       "acertos_orig": 237,
       "acertos_comp": 235,
       "delta": -0.5,
       "ic": [
        -3.0,
        2.0
       ],
       "status": "não-inferior",
       "so_orig": 14,
       "so_comp": 12,
       "nao_lidas": 46
      },
      {
       "id": "generico_gsm8k",
       "nome": "GSM8K",
       "n": 400,
       "acc_orig": 94.8,
       "acc_comp": 93.2,
       "acertos_orig": 379,
       "acertos_comp": 373,
       "delta": -1.5,
       "ic": [
        -3.5,
        0.5
       ],
       "status": "não-inferior",
       "so_orig": 11,
       "so_comp": 5,
       "nao_lidas": 0
      },
      {
       "id": "medicina_pt",
       "nome": "medicina",
       "n": 300,
       "acc_orig": 64.0,
       "acc_comp": 62.0,
       "acertos_orig": 192,
       "acertos_comp": 186,
       "delta": -2.0,
       "ic": [
        -5.7,
        1.7
       ],
       "status": "inconclusivo",
       "so_orig": 19,
       "so_comp": 13,
       "nao_lidas": 2
      },
      {
       "id": "direito_pt",
       "nome": "direito",
       "n": 300,
       "acc_orig": 50.0,
       "acc_comp": 50.7,
       "acertos_orig": 150,
       "acertos_comp": 152,
       "delta": 0.7,
       "ic": [
        -3.4,
        4.7
       ],
       "status": "não-inferior",
       "so_orig": 18,
       "so_comp": 20,
       "nao_lidas": 9
      },
      {
       "id": "financas_en",
       "nome": "finanças",
       "n": 300,
       "acc_orig": 71.0,
       "acc_comp": 64.0,
       "acertos_orig": 213,
       "acertos_comp": 192,
       "delta": -7.0,
       "ic": [
        -10.3,
        -3.6
       ],
       "status": "perda demonstrada",
       "so_orig": 24,
       "so_comp": 3,
       "nao_lidas": 0
      },
      {
       "id": "programacao_en",
       "nome": "programação",
       "n": 300,
       "acc_orig": 43.0,
       "acc_comp": 40.7,
       "acertos_orig": 129,
       "acertos_comp": 122,
       "delta": -2.3,
       "ic": [
        -5.7,
        1.1
       ],
       "status": "inconclusivo",
       "so_orig": 17,
       "so_comp": 10,
       "nao_lidas": 4
      },
      {
       "id": "matematica_en",
       "nome": "matemática",
       "n": 300,
       "acc_orig": 74.0,
       "acc_comp": 71.7,
       "acertos_orig": 222,
       "acertos_comp": 215,
       "delta": -2.3,
       "ic": [
        -4.9,
        0.3
       ],
       "status": "não-inferior",
       "so_orig": 11,
       "so_comp": 4,
       "nao_lidas": 60
      }
     ]
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
     "mmlu": 1.2,
     "suites": [
      {
       "id": "generico_mmlu",
       "nome": "MMLU",
       "n": 400,
       "acc_orig": 59.2,
       "acc_comp": 60.5,
       "acertos_orig": 237,
       "acertos_comp": 242,
       "delta": 1.2,
       "ic": [
        -1.3,
        3.8
       ],
       "status": "não-inferior",
       "so_orig": 11,
       "so_comp": 16,
       "nao_lidas": 51
      },
      {
       "id": "generico_gsm8k",
       "nome": "GSM8K",
       "n": 400,
       "acc_orig": 94.8,
       "acc_comp": 94.0,
       "acertos_orig": 379,
       "acertos_comp": 376,
       "delta": -0.8,
       "ic": [
        -2.4,
        0.9
       ],
       "status": "não-inferior",
       "so_orig": 7,
       "so_comp": 4,
       "nao_lidas": 0
      },
      {
       "id": "medicina_pt",
       "nome": "medicina",
       "n": 300,
       "acc_orig": 64.3,
       "acc_comp": 61.0,
       "acertos_orig": 193,
       "acertos_comp": 183,
       "delta": -3.3,
       "ic": [
        -7.2,
        0.6
       ],
       "status": "inconclusivo",
       "so_orig": 23,
       "so_comp": 13,
       "nao_lidas": 0
      },
      {
       "id": "direito_pt",
       "nome": "direito",
       "n": 300,
       "acc_orig": 49.7,
       "acc_comp": 51.0,
       "acertos_orig": 149,
       "acertos_comp": 153,
       "delta": 1.3,
       "ic": [
        -2.5,
        5.2
       ],
       "status": "não-inferior",
       "so_orig": 15,
       "so_comp": 19,
       "nao_lidas": 0
      },
      {
       "id": "financas_en",
       "nome": "finanças",
       "n": 300,
       "acc_orig": 71.0,
       "acc_comp": 65.7,
       "acertos_orig": 213,
       "acertos_comp": 197,
       "delta": -5.3,
       "ic": [
        -8.4,
        -2.2
       ],
       "status": "perda demonstrada",
       "so_orig": 19,
       "so_comp": 3,
       "nao_lidas": 0
      },
      {
       "id": "programacao_en",
       "nome": "programação",
       "n": 300,
       "acc_orig": 43.0,
       "acc_comp": 39.7,
       "acertos_orig": 129,
       "acertos_comp": 119,
       "delta": -3.3,
       "ic": [
        -6.7,
        0.0
       ],
       "status": "inconclusivo",
       "so_orig": 18,
       "so_comp": 8,
       "nao_lidas": 4
      },
      {
       "id": "matematica_en",
       "nome": "matemática",
       "n": 300,
       "acc_orig": 72.7,
       "acc_comp": 72.3,
       "acertos_orig": 218,
       "acertos_comp": 217,
       "delta": -0.3,
       "ic": [
        -3.6,
        3.0
       ],
       "status": "não-inferior",
       "so_orig": 13,
       "so_comp": 12,
       "nao_lidas": 52
      }
     ]
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
     "mmlu": null,
     "suites": []
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
     "mmlu": 1.5,
     "suites": [
      {
       "id": "generico_mmlu",
       "nome": "MMLU",
       "n": 400,
       "acc_orig": 59.5,
       "acc_comp": 61.0,
       "acertos_orig": 238,
       "acertos_comp": 244,
       "delta": 1.5,
       "ic": [
        -1.2,
        4.2
       ],
       "status": "não-inferior",
       "so_orig": 12,
       "so_comp": 18,
       "nao_lidas": 45
      },
      {
       "id": "generico_gsm8k",
       "nome": "GSM8K",
       "n": 400,
       "acc_orig": 95.5,
       "acc_comp": 92.2,
       "acertos_orig": 382,
       "acertos_comp": 369,
       "delta": -3.2,
       "ic": [
        -5.6,
        -0.9
       ],
       "status": "perda demonstrada",
       "so_orig": 18,
       "so_comp": 5,
       "nao_lidas": 0
      },
      {
       "id": "medicina_pt",
       "nome": "medicina",
       "n": 300,
       "acc_orig": 64.0,
       "acc_comp": 60.0,
       "acertos_orig": 192,
       "acertos_comp": 180,
       "delta": -4.0,
       "ic": [
        -8.1,
        0.2
       ],
       "status": "inconclusivo",
       "so_orig": 26,
       "so_comp": 14,
       "nao_lidas": 1
      },
      {
       "id": "direito_pt",
       "nome": "direito",
       "n": 300,
       "acc_orig": 49.7,
       "acc_comp": 51.0,
       "acertos_orig": 149,
       "acertos_comp": 153,
       "delta": 1.3,
       "ic": [
        -3.2,
        5.9
       ],
       "status": "não-inferior",
       "so_orig": 22,
       "so_comp": 26,
       "nao_lidas": 1
      },
      {
       "id": "financas_en",
       "nome": "finanças",
       "n": 300,
       "acc_orig": 70.0,
       "acc_comp": 55.3,
       "acertos_orig": 210,
       "acertos_comp": 166,
       "delta": -14.7,
       "ic": [
        -19.0,
        -10.1
       ],
       "status": "perda demonstrada",
       "so_orig": 48,
       "so_comp": 4,
       "nao_lidas": 0
      },
      {
       "id": "programacao_en",
       "nome": "programação",
       "n": 300,
       "acc_orig": 43.0,
       "acc_comp": 37.3,
       "acertos_orig": 129,
       "acertos_comp": 112,
       "delta": -5.7,
       "ic": [
        -9.2,
        -2.0
       ],
       "status": "perda demonstrada",
       "so_orig": 24,
       "so_comp": 7,
       "nao_lidas": 5
      },
      {
       "id": "matematica_en",
       "nome": "matemática",
       "n": 300,
       "acc_orig": 72.3,
       "acc_comp": 70.7,
       "acertos_orig": 217,
       "acertos_comp": 212,
       "delta": -1.7,
       "ic": [
        -5.2,
        1.9
       ],
       "status": "inconclusivo",
       "so_orig": 17,
       "so_comp": 12,
       "nao_lidas": 58
      }
     ]
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
     "mmlu": 2.0,
     "suites": [
      {
       "id": "generico_mmlu",
       "nome": "MMLU",
       "n": 400,
       "acc_orig": 59.5,
       "acc_comp": 61.5,
       "acertos_orig": 238,
       "acertos_comp": 246,
       "delta": 2.0,
       "ic": [
        0.2,
        3.7
       ],
       "status": "não-inferior",
       "so_orig": 2,
       "so_comp": 10,
       "nao_lidas": 51
      },
      {
       "id": "generico_gsm8k",
       "nome": "GSM8K",
       "n": 400,
       "acc_orig": 95.5,
       "acc_comp": 94.5,
       "acertos_orig": 382,
       "acertos_comp": 378,
       "delta": -1.0,
       "ic": [
        -2.5,
        0.5
       ],
       "status": "não-inferior",
       "so_orig": 6,
       "so_comp": 2,
       "nao_lidas": 0
      },
      {
       "id": "medicina_pt",
       "nome": "medicina",
       "n": 300,
       "acc_orig": 64.0,
       "acc_comp": 64.0,
       "acertos_orig": 192,
       "acertos_comp": 192,
       "delta": 0.0,
       "ic": [
        -3.2,
        3.2
       ],
       "status": "não-inferior",
       "so_orig": 12,
       "so_comp": 12,
       "nao_lidas": 3
      },
      {
       "id": "direito_pt",
       "nome": "direito",
       "n": 300,
       "acc_orig": 49.7,
       "acc_comp": 49.7,
       "acertos_orig": 149,
       "acertos_comp": 149,
       "delta": 0.0,
       "ic": [
        -3.2,
        3.2
       ],
       "status": "não-inferior",
       "so_orig": 12,
       "so_comp": 12,
       "nao_lidas": 5
      },
      {
       "id": "financas_en",
       "nome": "finanças",
       "n": 300,
       "acc_orig": 70.0,
       "acc_comp": 70.7,
       "acertos_orig": 210,
       "acertos_comp": 212,
       "delta": 0.7,
       "ic": [
        -1.3,
        2.6
       ],
       "status": "não-inferior",
       "so_orig": 3,
       "so_comp": 5,
       "nao_lidas": 0
      },
      {
       "id": "programacao_en",
       "nome": "programação",
       "n": 300,
       "acc_orig": 43.0,
       "acc_comp": 41.3,
       "acertos_orig": 129,
       "acertos_comp": 124,
       "delta": -1.7,
       "ic": [
        -4.6,
        1.2
       ],
       "status": "não-inferior",
       "so_orig": 12,
       "so_comp": 7,
       "nao_lidas": 3
      },
      {
       "id": "matematica_en",
       "nome": "matemática",
       "n": 300,
       "acc_orig": 72.3,
       "acc_comp": 71.3,
       "acertos_orig": 217,
       "acertos_comp": 214,
       "delta": -1.0,
       "ic": [
        -4.0,
        2.0
       ],
       "status": "não-inferior",
       "so_orig": 12,
       "so_comp": 9,
       "nao_lidas": 59
      }
     ]
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
     "mmlu": null,
     "suites": []
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
     "mmlu": -0.2,
     "suites": [
      {
       "id": "generico_mmlu",
       "nome": "MMLU",
       "n": 400,
       "acc_orig": 63.2,
       "acc_comp": 63.0,
       "acertos_orig": 253,
       "acertos_comp": 252,
       "delta": -0.2,
       "ic": [
        -2.8,
        2.3
       ],
       "status": "não-inferior",
       "so_orig": 14,
       "so_comp": 13,
       "nao_lidas": 1
      },
      {
       "id": "generico_gsm8k",
       "nome": "GSM8K",
       "n": 400,
       "acc_orig": 89.8,
       "acc_comp": 91.0,
       "acertos_orig": 359,
       "acertos_comp": 364,
       "delta": 1.2,
       "ic": [
        -1.2,
        3.7
       ],
       "status": "não-inferior",
       "so_orig": 10,
       "so_comp": 15,
       "nao_lidas": 0
      },
      {
       "id": "medicina_pt",
       "nome": "medicina",
       "n": 300,
       "acc_orig": 58.3,
       "acc_comp": 58.0,
       "acertos_orig": 175,
       "acertos_comp": 174,
       "delta": -0.3,
       "ic": [
        -3.2,
        2.6
       ],
       "status": "não-inferior",
       "so_orig": 10,
       "so_comp": 9,
       "nao_lidas": 0
      },
      {
       "id": "direito_pt",
       "nome": "direito",
       "n": 300,
       "acc_orig": 53.3,
       "acc_comp": 52.0,
       "acertos_orig": 160,
       "acertos_comp": 156,
       "delta": -1.3,
       "ic": [
        -3.5,
        0.8
       ],
       "status": "não-inferior",
       "so_orig": 7,
       "so_comp": 3,
       "nao_lidas": 0
      },
      {
       "id": "financas_en",
       "nome": "finanças",
       "n": 300,
       "acc_orig": 53.3,
       "acc_comp": 54.0,
       "acertos_orig": 160,
       "acertos_comp": 162,
       "delta": 0.7,
       "ic": [
        -2.0,
        3.3
       ],
       "status": "não-inferior",
       "so_orig": 7,
       "so_comp": 9,
       "nao_lidas": 0
      },
      {
       "id": "programacao_en",
       "nome": "programação",
       "n": 300,
       "acc_orig": 37.0,
       "acc_comp": 34.3,
       "acertos_orig": 111,
       "acertos_comp": 103,
       "delta": -2.7,
       "ic": [
        -5.3,
        0.0
       ],
       "status": "inconclusivo",
       "so_orig": 12,
       "so_comp": 4,
       "nao_lidas": 5
      },
      {
       "id": "matematica_en",
       "nome": "matemática",
       "n": 300,
       "acc_orig": 63.0,
       "acc_comp": 59.7,
       "acertos_orig": 189,
       "acertos_comp": 179,
       "delta": -3.3,
       "ic": [
        -8.7,
        2.1
       ],
       "status": "inconclusivo",
       "so_orig": 39,
       "so_comp": 29,
       "nao_lidas": 79
      }
     ]
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
     "mmlu": -0.5,
     "suites": [
      {
       "id": "generico_mmlu",
       "nome": "MMLU",
       "n": 400,
       "acc_orig": 63.5,
       "acc_comp": 63.0,
       "acertos_orig": 254,
       "acertos_comp": 252,
       "delta": -0.5,
       "ic": [
        -3.1,
        2.1
       ],
       "status": "não-inferior",
       "so_orig": 15,
       "so_comp": 13,
       "nao_lidas": 1
      },
      {
       "id": "generico_gsm8k",
       "nome": "GSM8K",
       "n": 400,
       "acc_orig": 90.0,
       "acc_comp": 89.0,
       "acertos_orig": 360,
       "acertos_comp": 356,
       "delta": -1.0,
       "ic": [
        -3.4,
        1.4
       ],
       "status": "não-inferior",
       "so_orig": 14,
       "so_comp": 10,
       "nao_lidas": 0
      },
      {
       "id": "medicina_pt",
       "nome": "medicina",
       "n": 300,
       "acc_orig": 58.3,
       "acc_comp": 57.3,
       "acertos_orig": 175,
       "acertos_comp": 172,
       "delta": -1.0,
       "ic": [
        -4.3,
        2.3
       ],
       "status": "não-inferior",
       "so_orig": 14,
       "so_comp": 11,
       "nao_lidas": 0
      },
      {
       "id": "direito_pt",
       "nome": "direito",
       "n": 300,
       "acc_orig": 53.3,
       "acc_comp": 54.7,
       "acertos_orig": 160,
       "acertos_comp": 164,
       "delta": 1.3,
       "ic": [
        -1.6,
        4.3
       ],
       "status": "não-inferior",
       "so_orig": 8,
       "so_comp": 12,
       "nao_lidas": 0
      },
      {
       "id": "financas_en",
       "nome": "finanças",
       "n": 300,
       "acc_orig": 52.7,
       "acc_comp": 52.7,
       "acertos_orig": 158,
       "acertos_comp": 158,
       "delta": 0.0,
       "ic": [
        -2.5,
        2.5
       ],
       "status": "não-inferior",
       "so_orig": 7,
       "so_comp": 7,
       "nao_lidas": 0
      },
      {
       "id": "programacao_en",
       "nome": "programação",
       "n": 300,
       "acc_orig": 37.0,
       "acc_comp": 35.7,
       "acertos_orig": 111,
       "acertos_comp": 107,
       "delta": -1.3,
       "ic": [
        -3.7,
        1.0
       ],
       "status": "não-inferior",
       "so_orig": 8,
       "so_comp": 4,
       "nao_lidas": 11
      },
      {
       "id": "matematica_en",
       "nome": "matemática",
       "n": 300,
       "acc_orig": 62.3,
       "acc_comp": 61.3,
       "acertos_orig": 187,
       "acertos_comp": 184,
       "delta": -1.0,
       "ic": [
        -6.3,
        4.3
       ],
       "status": "inconclusivo",
       "so_orig": 34,
       "so_comp": 31,
       "nao_lidas": 77
      }
     ]
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
     "mmlu": -3.2,
     "suites": [
      {
       "id": "generico_mmlu",
       "nome": "MMLU",
       "n": 400,
       "acc_orig": 63.2,
       "acc_comp": 60.0,
       "acertos_orig": 253,
       "acertos_comp": 240,
       "delta": -3.2,
       "ic": [
        -6.9,
        0.5
       ],
       "status": "inconclusivo",
       "so_orig": 35,
       "so_comp": 22,
       "nao_lidas": 6
      },
      {
       "id": "generico_gsm8k",
       "nome": "GSM8K",
       "n": 400,
       "acc_orig": 89.5,
       "acc_comp": 84.5,
       "acertos_orig": 358,
       "acertos_comp": 338,
       "delta": -5.0,
       "ic": [
        -8.5,
        -1.5
       ],
       "status": "perda demonstrada",
       "so_orig": 36,
       "so_comp": 16,
       "nao_lidas": 0
      },
      {
       "id": "medicina_pt",
       "nome": "medicina",
       "n": 300,
       "acc_orig": 58.3,
       "acc_comp": 57.3,
       "acertos_orig": 175,
       "acertos_comp": 172,
       "delta": -1.0,
       "ic": [
        -5.2,
        3.2
       ],
       "status": "inconclusivo",
       "so_orig": 22,
       "so_comp": 19,
       "nao_lidas": 0
      },
      {
       "id": "direito_pt",
       "nome": "direito",
       "n": 300,
       "acc_orig": 53.3,
       "acc_comp": 54.3,
       "acertos_orig": 160,
       "acertos_comp": 163,
       "delta": 1.0,
       "ic": [
        -3.6,
        5.6
       ],
       "status": "não-inferior",
       "so_orig": 23,
       "so_comp": 26,
       "nao_lidas": 0
      },
      {
       "id": "financas_en",
       "nome": "finanças",
       "n": 300,
       "acc_orig": 53.3,
       "acc_comp": 53.3,
       "acertos_orig": 160,
       "acertos_comp": 160,
       "delta": 0.0,
       "ic": [
        -2.5,
        2.5
       ],
       "status": "não-inferior",
       "so_orig": 7,
       "so_comp": 7,
       "nao_lidas": 0
      },
      {
       "id": "programacao_en",
       "nome": "programação",
       "n": 300,
       "acc_orig": 36.3,
       "acc_comp": 33.0,
       "acertos_orig": 109,
       "acertos_comp": 99,
       "delta": -3.3,
       "ic": [
        -7.5,
        0.8
       ],
       "status": "inconclusivo",
       "so_orig": 25,
       "so_comp": 15,
       "nao_lidas": 2
      },
      {
       "id": "matematica_en",
       "nome": "matemática",
       "n": 300,
       "acc_orig": 62.0,
       "acc_comp": 56.3,
       "acertos_orig": 186,
       "acertos_comp": 169,
       "delta": -5.7,
       "ic": [
        -10.9,
        -0.3
       ],
       "status": "perda demonstrada",
       "so_orig": 42,
       "so_comp": 25,
       "nao_lidas": 90
      }
     ]
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
     "mmlu": -3.2,
     "suites": [
      {
       "id": "generico_mmlu",
       "nome": "MMLU",
       "n": 400,
       "acc_orig": 63.0,
       "acc_comp": 59.8,
       "acertos_orig": 252,
       "acertos_comp": 239,
       "delta": -3.2,
       "ic": [
        -6.6,
        0.1
       ],
       "status": "inconclusivo",
       "so_orig": 30,
       "so_comp": 17,
       "nao_lidas": 0
      },
      {
       "id": "generico_gsm8k",
       "nome": "GSM8K",
       "n": 400,
       "acc_orig": 89.8,
       "acc_comp": 89.8,
       "acertos_orig": 359,
       "acertos_comp": 359,
       "delta": 0.0,
       "ic": [
        -3.2,
        3.2
       ],
       "status": "não-inferior",
       "so_orig": 21,
       "so_comp": 21,
       "nao_lidas": 0
      },
      {
       "id": "medicina_pt",
       "nome": "medicina",
       "n": 300,
       "acc_orig": 58.3,
       "acc_comp": 54.7,
       "acertos_orig": 175,
       "acertos_comp": 164,
       "delta": -3.7,
       "ic": [
        -7.5,
        0.2
       ],
       "status": "inconclusivo",
       "so_orig": 23,
       "so_comp": 12,
       "nao_lidas": 0
      },
      {
       "id": "direito_pt",
       "nome": "direito",
       "n": 300,
       "acc_orig": 53.3,
       "acc_comp": 44.0,
       "acertos_orig": 160,
       "acertos_comp": 132,
       "delta": -9.3,
       "ic": [
        -14.6,
        -3.9
       ],
       "status": "perda demonstrada",
       "so_orig": 49,
       "so_comp": 21,
       "nao_lidas": 0
      },
      {
       "id": "financas_en",
       "nome": "finanças",
       "n": 300,
       "acc_orig": 53.3,
       "acc_comp": 43.0,
       "acertos_orig": 160,
       "acertos_comp": 129,
       "delta": -10.3,
       "ic": [
        -14.0,
        -6.5
       ],
       "status": "perda demonstrada",
       "so_orig": 33,
       "so_comp": 2,
       "nao_lidas": 0
      },
      {
       "id": "programacao_en",
       "nome": "programação",
       "n": 300,
       "acc_orig": 37.0,
       "acc_comp": 32.3,
       "acertos_orig": 111,
       "acertos_comp": 97,
       "delta": -4.7,
       "ic": [
        -8.4,
        -0.8
       ],
       "status": "perda demonstrada",
       "so_orig": 24,
       "so_comp": 10,
       "nao_lidas": 10
      },
      {
       "id": "matematica_en",
       "nome": "matemática",
       "n": 300,
       "acc_orig": 59.7,
       "acc_comp": 59.3,
       "acertos_orig": 179,
       "acertos_comp": 178,
       "delta": -0.3,
       "ic": [
        -5.6,
        4.9
       ],
       "status": "inconclusivo",
       "so_orig": 33,
       "so_comp": 32,
       "nao_lidas": 70
      }
     ]
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
     "mmlu": null,
     "suites": []
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
     "mmlu": -2.0,
     "suites": [
      {
       "id": "generico_mmlu",
       "nome": "MMLU",
       "n": 400,
       "acc_orig": 62.7,
       "acc_comp": 60.8,
       "acertos_orig": 251,
       "acertos_comp": 243,
       "delta": -2.0,
       "ic": [
        -5.4,
        1.4
       ],
       "status": "inconclusivo",
       "so_orig": 28,
       "so_comp": 20,
       "nao_lidas": 2
      },
      {
       "id": "generico_gsm8k",
       "nome": "GSM8K",
       "n": 400,
       "acc_orig": 90.8,
       "acc_comp": 86.5,
       "acertos_orig": 363,
       "acertos_comp": 346,
       "delta": -4.2,
       "ic": [
        -7.4,
        -1.1
       ],
       "status": "perda demonstrada",
       "so_orig": 29,
       "so_comp": 12,
       "nao_lidas": 0
      },
      {
       "id": "medicina_pt",
       "nome": "medicina",
       "n": 300,
       "acc_orig": 58.0,
       "acc_comp": 50.3,
       "acertos_orig": 174,
       "acertos_comp": 151,
       "delta": -7.7,
       "ic": [
        -11.8,
        -3.4
       ],
       "status": "perda demonstrada",
       "so_orig": 33,
       "so_comp": 10,
       "nao_lidas": 0
      },
      {
       "id": "direito_pt",
       "nome": "direito",
       "n": 300,
       "acc_orig": 53.3,
       "acc_comp": 48.7,
       "acertos_orig": 160,
       "acertos_comp": 146,
       "delta": -4.7,
       "ic": [
        -9.8,
        0.5
       ],
       "status": "inconclusivo",
       "so_orig": 38,
       "so_comp": 24,
       "nao_lidas": 0
      },
      {
       "id": "financas_en",
       "nome": "finanças",
       "n": 300,
       "acc_orig": 52.7,
       "acc_comp": 51.0,
       "acertos_orig": 158,
       "acertos_comp": 153,
       "delta": -1.7,
       "ic": [
        -4.7,
        1.4
       ],
       "status": "não-inferior",
       "so_orig": 13,
       "so_comp": 8,
       "nao_lidas": 0
      },
      {
       "id": "programacao_en",
       "nome": "programação",
       "n": 300,
       "acc_orig": 36.3,
       "acc_comp": 35.3,
       "acertos_orig": 109,
       "acertos_comp": 106,
       "delta": -1.0,
       "ic": [
        -5.4,
        3.4
       ],
       "status": "inconclusivo",
       "so_orig": 24,
       "so_comp": 21,
       "nao_lidas": 5
      },
      {
       "id": "matematica_en",
       "nome": "matemática",
       "n": 300,
       "acc_orig": 62.3,
       "acc_comp": 57.3,
       "acertos_orig": 187,
       "acertos_comp": 172,
       "delta": -5.0,
       "ic": [
        -10.0,
        0.0
       ],
       "status": "inconclusivo",
       "so_orig": 37,
       "so_comp": 22,
       "nao_lidas": 94
      }
     ]
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
     "mmlu": 1.0,
     "suites": [
      {
       "id": "generico_mmlu",
       "nome": "MMLU",
       "n": 400,
       "acc_orig": 62.7,
       "acc_comp": 63.7,
       "acertos_orig": 251,
       "acertos_comp": 255,
       "delta": 1.0,
       "ic": [
        -1.4,
        3.4
       ],
       "status": "não-inferior",
       "so_orig": 10,
       "so_comp": 14,
       "nao_lidas": 1
      },
      {
       "id": "generico_gsm8k",
       "nome": "GSM8K",
       "n": 400,
       "acc_orig": 90.8,
       "acc_comp": 88.0,
       "acertos_orig": 363,
       "acertos_comp": 352,
       "delta": -2.8,
       "ic": [
        -5.6,
        0.1
       ],
       "status": "inconclusivo",
       "so_orig": 22,
       "so_comp": 11,
       "nao_lidas": 0
      },
      {
       "id": "medicina_pt",
       "nome": "medicina",
       "n": 300,
       "acc_orig": 58.0,
       "acc_comp": 57.0,
       "acertos_orig": 174,
       "acertos_comp": 171,
       "delta": -1.0,
       "ic": [
        -3.7,
        1.8
       ],
       "status": "não-inferior",
       "so_orig": 10,
       "so_comp": 7,
       "nao_lidas": 0
      },
      {
       "id": "direito_pt",
       "nome": "direito",
       "n": 300,
       "acc_orig": 53.3,
       "acc_comp": 55.7,
       "acertos_orig": 160,
       "acertos_comp": 167,
       "delta": 2.3,
       "ic": [
        -1.1,
        5.7
       ],
       "status": "não-inferior",
       "so_orig": 10,
       "so_comp": 17,
       "nao_lidas": 0
      },
      {
       "id": "financas_en",
       "nome": "finanças",
       "n": 300,
       "acc_orig": 52.7,
       "acc_comp": 52.3,
       "acertos_orig": 158,
       "acertos_comp": 157,
       "delta": -0.3,
       "ic": [
        -2.8,
        2.1
       ],
       "status": "não-inferior",
       "so_orig": 7,
       "so_comp": 6,
       "nao_lidas": 0
      },
      {
       "id": "programacao_en",
       "nome": "programação",
       "n": 300,
       "acc_orig": 36.3,
       "acc_comp": 34.3,
       "acertos_orig": 109,
       "acertos_comp": 103,
       "delta": -2.0,
       "ic": [
        -4.7,
        0.7
       ],
       "status": "não-inferior",
       "so_orig": 11,
       "so_comp": 5,
       "nao_lidas": 7
      },
      {
       "id": "matematica_en",
       "nome": "matemática",
       "n": 300,
       "acc_orig": 62.3,
       "acc_comp": 58.7,
       "acertos_orig": 187,
       "acertos_comp": 176,
       "delta": -3.7,
       "ic": [
        -8.4,
        1.1
       ],
       "status": "inconclusivo",
       "so_orig": 32,
       "so_comp": 21,
       "nao_lidas": 81
      }
     ]
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
