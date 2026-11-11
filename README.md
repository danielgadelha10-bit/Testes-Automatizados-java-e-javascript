# 📚 Atividade 4 - Projeto de Algoritmos e Testes Automatizados

Implementação e validação dos 6 algoritmos fundamentais solicitados nas linguagens **JavaScript (Node.js)** e **Java**, com suporte completo para execução no **Visual Studio Code**, via **Terminal** e no **Replit**.

O projeto conta com suítes de testes automatizados completas em ambas as linguagens, com padrão de **2 testes por algoritmo (12 testes no total)**:
- **JavaScript**: Testes automatizados com **Jest** (`atividade4_ambientes/`).
- **Java**: Rotina de testes unitários automatizados em [`Main.java`](file:///C:/Users/danie/OneDrive/Área%20de%20Trabalho/A4/java/Main.java) (`java/`).

---

## 📁 Estrutura Completa de Pastas

```text
A4/
│
├── atividade4_ambientes/       # Módulo JavaScript com Jest e Clean Code
│   ├── funcoes/
│   │   ├── contagem.js         # Retorna a contagem sequencial de 1 a N
│   │   ├── fibonacci.js        # N primeiros termos da sequência de Fibonacci
│   │   ├── mdc.js              # Máximo Divisor Comum (Algoritmo de Euclides)
│   │   ├── numeroprimo.js      # Verificação de número primo (true/false)
│   │   ├── quicksort.js        # Ordenação Quicksort pura e imutável
│   │   ├── somatorio.js        # Soma dos inteiros de 1 a N
│   │   └── validacao.js        # Helper compartilhado de validação defensiva
│   ├── tests/
│   │   ├── contagem.test.js    # 2 testes unitários do comportamento principal
│   │   ├── fibonacci.test.js   # 2 testes unitários do comportamento principal
│   │   ├── mdc.test.js         # 2 testes unitários do comportamento principal
│   │   ├── numeroprimo.test.js # 2 testes unitários do comportamento principal
│   │   ├── quicksort.test.js   # 2 testes unitários do comportamento principal
│   │   └── somatorio.test.js   # 2 testes unitários do comportamento principal
│   ├── .gitignore              # Ignora node_modules e artefatos de teste
│   ├── package.json            # Configuração do Jest (^29.7.0)
│   └── README.md               # Documentação detalhada do módulo JS
│
├── java/                       # Módulo Java com rotina de testes integrada
│   ├── Contagem.java           # Contagem sequencial e por intervalo
│   ├── Fibonacci.java          # Geração da sequência de Fibonacci
│   ├── MDC.java                # Cálculo de MDC iterativo e recursivo
│   ├── NumeroPrimo.java        # Verificação de primalidade
│   ├── Quicksort.java          # Quicksort in-place e versão imutável
│   ├── Somatorio.java          # Somatório de 1 a N e soma de conjuntos
│   └── Main.java               # Suíte de testes automatizados (12 testes / 6 suítes)
│
├── javascript/                 # Implementações complementares interativas em JS
│   ├── 1_numero_primo.js
│   ├── 2_somatorio.js
│   ├── 3_fibonacci.js
│   ├── 4_mdc.js
│   ├── 5_quicksort.js
│   ├── 6_contagem.js
│   └── index.js                # Menu CLI interativo
│
└── README.md                   # Este guia principal
```

---

## 🧠 Algoritmos Implementados

| # | Algoritmo | Descrição |
|---|---|---|
| 1 | **Número é Primo** | Determina se um número inteiro positivo $n$ é primo ($n > 1$, divisível apenas por 1 e por si). Otimizado em $O(\sqrt{n})$ com passo $6k \pm 1$. |
| 2 | **Somatório** | Calcula a soma de inteiros de $1$ até o limite informado ($1 + 2 + \dots + N$) e suporte a somatórios de conjuntos. |
| 3 | **Fibonacci** | Retorna os $N$ primeiros termos da sequência de Fibonacci ($N \ge 0$), iniciando em $0, 1, 1, 2, 3, 5, 8, 13, \dots$ |
| 4 | **Máximo Divisor Comum (MDC)** | Maior inteiro que divide simultaneamente $a$ e $b$ através do Algoritmo de Euclides (suporta inteiros negativos via valor absoluto). |
| 5 | **Ordenação (Quicksort)** | Ordena elementos numericamente de forma crescente via divisão e conquista. Implementado com garantia de imutabilidade do vetor original. |
| 6 | **Contagem** | Retorna a sequência de inteiros $[1, 2, \dots, N]$ e cálculo da quantidade de inteiros em conjunto de dados no intervalo $[1º\text{ dado}, N]$. |

---

## 🧪 Como Executar os Testes

### 1. Testes em JavaScript (Jest)

No terminal (dentro da pasta `A4`):

```bash
cd atividade4_ambientes
npm install
npm test
```

**Resultado esperado:**
```text
Test Suites: 6 passed, 6 total
Tests:       12 passed, 12 total
Snapshots:   0 total
Time:        2.176 s
Ran all test suites.
```

---

### 2. Testes em Java

No terminal (dentro da pasta `A4`):

```bash
cd java
javac *.java
java Main
```

*(Ou no VS Code: abra o arquivo `Main.java` e clique no botão **Run** acima do método `main`).*

**Resultado esperado:**
```text
========================================================
         EXECUÇÃO DA SUÍTE DE TESTES EM JAVA            
========================================================

    ✓ deve retornar true para números primos (2, 7, 13)
    ✓ deve retornar false para 0, 1 e número composto 9
PASS tests/NumeroPrimoTest

    ✓ deve calcular corretamente a soma de 1 até 5 (15)
    ✓ deve calcular corretamente a soma de 1 até 10 (55)
PASS tests/SomatorioTest

    ✓ os 10 primeiros números de Fibonacci devem ser [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    ✓ os 2 primeiros números de Fibonacci devem ser [0, 1]
PASS tests/FibonacciTest

    ✓ deve calcular corretamente o MDC entre 24 e 18 (6)
    ✓ deve calcular corretamente o MDC entre 10 e 5 (5)
PASS tests/MDCTest

    ✓ deve ordenar corretamente array [64, 34, 25, 12, 22, 11, 90]
    ✓ não deve alterar o array original recebido como parâmetro
PASS tests/QuicksortTest

    ✓ deve retornar a sequência correta de 1 a 5 quando o limite for 5
    ✓ deve retornar [1] quando o limite for 1
PASS tests/ContagemTest

--------------------------------------------------------
Test Suites: 6 passed, 6 total
Tests:       12 passed, 12 total
Time:        0,029 s
--------------------------------------------------------
TODOS OS TESTES PASSARAM COM SUCESSO! 🎉
```

---

## 💻 Executando Algoritmos Individuais

### Em Java:
```bash
cd java
java NumeroPrimo.java
java Somatorio.java
java Fibonacci.java
java MDC.java
java Quicksort.java
java Contagem.java
```

### Em JavaScript:
```bash
cd javascript
node index.js               # Menu interativo
# Ou arquivos individuais:
node 1_numero_primo.js
node 2_somatorio.js
node 3_fibonacci.js
node 4_mdc.js
node 5_quicksort.js
node 6_contagem.js
```

---

## 🌐 Executando no Replit

1. **JavaScript**: Crie um Repl em **Node.js**, envie a pasta `atividade4_ambientes` e rode `npm test`.
2. **Java**: Crie um Repl em **Java**, envie os arquivos da pasta `java/` e execute o comando:
   ```bash
   javac *.java && java Main
   ```
