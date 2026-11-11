# 🚀 Atividade 4 - Ambientes de Desenvolvimento e Algoritmos com Jest

Este projeto contém a implementação dos 6 algoritmos fundamentais da **Atividade 4**, desenvolvidos em JavaScript (Node.js/CommonJS) com foco rigoroso em **Clean Code**, **Programação Defensiva** e validação através de testes automatizados com o framework **Jest**.

A suíte de testes contém exatamente **2 testes por algoritmo (12 testes no total)**, validando os comportamentos principais de cada função.

---

## 📁 Estrutura do Projeto

```text
atividade4_ambientes/
├── funcoes/
│   ├── contagem.js             # Retorna a contagem sequencial de 1 a N
│   ├── fibonacci.js            # Retorna os N primeiros termos de Fibonacci
│   ├── mdc.js                  # Máximo Divisor Comum (Algoritmo de Euclides)
│   ├── numeroprimo.js          # Verificação de número primo
│   ├── quicksort.js            # Ordenação Quicksort pura e imutável
│   ├── somatorio.js            # Soma dos inteiros de 1 a N
│   └── validacao.js            # Módulo compartilhado de validação defensiva
├── tests/
│   ├── contagem.test.js        # 2 testes unitários do comportamento principal
│   ├── fibonacci.test.js       # 2 testes unitários do comportamento principal
│   ├── mdc.test.js             # 2 testes unitários do comportamento principal
│   ├── numeroprimo.test.js     # 2 testes unitários do comportamento principal
│   ├── quicksort.test.js       # 2 testes unitários do comportamento principal
│   └── somatorio.test.js       # 2 testes unitários do comportamento principal
├── .gitignore                  # Ignora node_modules e arquivos temporários
├── package.json                # Configuração do projeto e scripts Jest
└── README.md                   # Documentação detalhada do projeto
```

---

## 🛠️ Como Instalar e Rodar os Testes

O projeto foi configurado para ser executado de forma simples através do terminal:

### 1. Instalar as dependências
No diretório `atividade4_ambientes`:
```bash
npm install
```

### 2. Executar a suíte de testes
```bash
npm test
```

### Saída esperada no terminal:
```text
> atividade4_ambientes@1.0.0 test
> jest

PASS tests/numeroprimo.test.js
PASS tests/mdc.test.js
PASS tests/fibonacci.test.js
PASS tests/contagem.test.js
PASS tests/somatorio.test.js
PASS tests/quicksort.test.js

Test Suites: 6 passed, 6 total
Tests:       12 passed, 12 total
Snapshots:   0 total
Time:        2.176 s
Ran all test suites.
```

---

## 🧠 Lista de Algoritmos e Exemplos de Uso

Cada algoritmo é exportado individualmente como uma função CommonJS (`module.exports = nomeDaFuncao;`):

### 1. `contagem(limite)`
Retorna um array contendo os inteiros de 1 até o limite informado.
```javascript
const contagem = require('./funcoes/contagem');

contagem(5); // Retorna: [1, 2, 3, 4, 5]
contagem(1); // Retorna: [1]
```

### 2. `fibonacci(quantidadeDeTermos)`
Retorna um array com os $N$ primeiros termos da sequência de Fibonacci, começando em 0.
```javascript
const fibonacci = require('./funcoes/fibonacci');

fibonacci(10); // Retorna: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
fibonacci(2);  // Retorna: [0, 1]
```

### 3. `mdc(primeiroNumero, segundoNumero)`
Calcula o Máximo Divisor Comum usando o Algoritmo de Euclides. Aceita inteiros negativos via valor absoluto.
```javascript
const mdc = require('./funcoes/mdc');

mdc(24, 18);   // Retorna: 6
mdc(10, 5);    // Retorna: 5
```

### 4. `numeroPrimo(numero)`
Verifica se um número inteiro é primo ($> 1$ e divisível apenas por 1 e por ele mesmo).
```javascript
const numeroPrimo = require('./funcoes/numeroprimo');

numeroPrimo(2);  // Retorna: true
numeroPrimo(9);  // Retorna: false
```

### 5. `quicksort(lista)`
Ordena um array de números em ordem crescente utilizando o método Quicksort. Retorna um **novo array**, preservando o array original intacto.
```javascript
const quicksort = require('./funcoes/quicksort');

const original = [64, 34, 25, 12, 22, 11, 90];
const ordenado = quicksort(original);
// ordenado: [11, 12, 22, 25, 34, 64, 90]
// original permanece inalterado: [64, 34, 25, 12, 22, 11, 90]
```

### 6. `somatorio(limite)`
Retorna a soma de todos os inteiros de 1 até o limite informado ($1 + 2 + \dots + limite$).
```javascript
const somatorio = require('./funcoes/somatorio');

somatorio(5);  // Retorna: 15 (1 + 2 + 3 + 4 + 5)
somatorio(10); // Retorna: 55
```

---

## 🛡️ Práticas de Programação Defensiva e Clean Code Aplicadas

1. **Helper Compartilhado de Validação (`funcoes/validacao.js`)**:
   - Centraliza funções de checagem para evitar duplicação de lógica (DRY - *Don't Repeat Yourself*).
   - Valida tipos e limites com `validarInteiro`, `validarInteiroNaoNegativo` e `validarArrayDeNumeros`.

2. **Exceções Semânticas**:
   - **`TypeError`**: Para entradas não inteiras, strings, decimais ou elementos não numéricos.
   - **`RangeError`**: Para intervalos inválidos (valores negativos onde proibido, `mdc(0, 0)` indefinido).

3. **Imutabilidade**:
   - Nenhuma função altera arrays ou referências passadas pelo chamador. O algoritmo `quicksort` faz uma cópia rasa prévia dos dados antes do particionamento.

4. **Nomenclatura Limpa e Autoexplicativa**:
   - Variáveis semânticas (`quantidadeDeTermos`, `primeiroNumero`, `segundoNumero`, `elementoTemporario`, `valorPivo`).
