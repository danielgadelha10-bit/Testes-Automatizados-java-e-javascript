/**
 * MENU PRINCIPAL - EXECUTOR DE TODOS OS ALGORITMOS (JAVASCRIPT)
 * Pasta A4 - Trabalho de Algoritmos
 */

const readline = require("readline");
const { isPrimo } = require("./1_numero_primo");
const { somatorio } = require("./2_somatorio");
const { fibonacci } = require("./3_fibonacci");
const { mdcIterativo } = require("./4_mdc");
const { quicksort } = require("./5_quicksort");
const { contarInteirosEntrePrimeiroEN } = require("./6_contagem");

function exibirMenu() {
    console.log("\n========================================================");
    console.log("            PASTA A4 - ALGORITMOS EM JAVASCRIPT         ");
    console.log("========================================================");
    console.log("1. Número é Primo");
    console.log("2. Somatório");
    console.log("3. Fibonacci (N > 1)");
    console.log("4. Máximo Divisor Comum (MDC)");
    console.log("5. Ordenação (Quicksort)");
    console.log("6. Contagem");
    console.log("7. Executar TODOS os testes de uma vez");
    console.log("0. Sair");
    console.log("========================================================");
}

function executarTodos() {
    console.log("\n>>> [1] NÚMERO É PRIMO <<<");
    [2, 7, 10, 13, 29, 35].forEach(n => console.log(`${n} é primo? ${isPrimo(n)}`));

    console.log("\n>>> [2] SOMATÓRIO <<<");
    const arrSoma = [10, 20, 30, 40, 50];
    console.log(`Soma de [${arrSoma.join(", ")}] = ${somatorio(arrSoma)}`);

    console.log("\n>>> [3] FIBONACCI (N = 8) <<<");
    console.log(`Termos: ${fibonacci(8).join(", ")}`);

    console.log("\n>>> [4] MÁXIMO DIVISOR COMUM (MDC) <<<");
    console.log(`MDC(24, 18) = ${mdcIterativo(24, 18)}`);
    console.log(`MDC(100, 45) = ${mdcIterativo(100, 45)}`);

    console.log("\n>>> [5] ORDENAÇÃO (QUICKSORT) <<<");
    const arrQuick = [45, 12, 85, 32, 89, 39, 69, 44, 42, 1, 6, 8];
    console.log("Antes:", [...arrQuick]);
    quicksort(arrQuick);
    console.log("Depois:", arrQuick);

    console.log("\n>>> [6] CONTAGEM <<<");
    const dados = [5, 2, 7.5, 8, 12, 15, 20];
    const res = contarInteirosEntrePrimeiroEN(dados, 15);
    console.log(`Conjunto: [${dados.join(", ")}], N: 15`);
    console.log(`Inteiros entre 1º dado (${res.primeiroDado}) e N (15): [${res.elementos.join(", ")}] -> Total: ${res.total}`);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function iniciar() {
    exibirMenu();
    rl.question("Escolha uma opção (0-7): ", (opcao) => {
        opcao = opcao.trim();
        switch (opcao) {
            case "1":
                rl.question("Digite um número inteiro: ", (n) => {
                    const num = parseInt(n);
                    console.log(`Resultado: ${num} ${isPrimo(num) ? "É PRIMO" : "NÃO É PRIMO"}`);
                    iniciar();
                });
                break;
            case "2":
                rl.question("Digite números separados por espaço (ex: 10 20 30): ", (input) => {
                    const numeros = input.trim().split(/\s+/).map(Number);
                    console.log(`Resultado da soma: ${somatorio(numeros)}`);
                    iniciar();
                });
                break;
            case "3":
                rl.question("Digite a quantidade de termos N (onde N > 1): ", (n) => {
                    const qtd = parseInt(n);
                    try {
                        console.log(`Sequência: ${fibonacci(qtd).join(", ")}`);
                    } catch (e) {
                        console.log(`Erro: ${e.message}`);
                    }
                    iniciar();
                });
                break;
            case "4":
                rl.question("Digite dois inteiros separados por espaço (ex: 24 18): ", (input) => {
                    const [a, b] = input.trim().split(/\s+/).map(Number);
                    console.log(`MDC(${a}, ${b}) = ${mdcIterativo(a, b)}`);
                    iniciar();
                });
                break;
            case "5":
                rl.question("Digite os números do array separados por espaço: ", (input) => {
                    const arr = input.trim().split(/\s+/).map(Number);
                    console.log("Array original:", [...arr]);
                    quicksort(arr);
                    console.log("Array ordenado:", arr);
                    iniciar();
                });
                break;
            case "6":
                rl.question("Digite o valor de N: ", (nStr) => {
                    const N = parseFloat(nStr);
                    rl.question("Digite o conjunto de dados separados por espaço: ", (dadosStr) => {
                        const conjunto = dadosStr.trim().split(/\s+/).map(Number);
                        const resultado = contarInteirosEntrePrimeiroEN(conjunto, N);
                        console.log(`Primeiro dado: ${resultado.primeiroDado}`);
                        console.log(`Intervalo analisado: ${resultado.intervalo}`);
                        console.log(`Inteiros encontrados: [${resultado.elementos.join(", ")}]`);
                        console.log(`Total: ${resultado.total}`);
                        iniciar();
                    });
                });
                break;
            case "7":
                executarTodos();
                iniciar();
                break;
            case "0":
                console.log("Encerrando programa. Até logo!");
                rl.close();
                break;
            default:
                console.log("Opção inválida! Escolha entre 0 e 7.");
                iniciar();
                break;
        }
    });
}

// Se for executado diretamente no terminal
if (require.main === module) {
    iniciar();
}
