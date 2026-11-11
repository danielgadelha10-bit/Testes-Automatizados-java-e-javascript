/**
 * ALGORITMO 6: CONTAGEM
 * 
 * Enunciado: Dado um valor de N números de entrada em um conjunto de dados,
 * conte quantos valores inteiros existem, neste conjunto de dados, entre
 * o primeiro dado (inclusive) e N (inclusive).
 * 
 * Exemplo:
 * Se o conjunto for [5, 7.5, 8, 12, 15, 20] e N for 15:
 * - O primeiro dado é 5.
 * - O intervalo considerado é de 5 (inclusive) até 15 (inclusive).
 * - Os valores inteiros neste intervalo são: 5, 8, 12, 15.
 * - Total contado = 4.
 */

function contarInteirosEntrePrimeiroEN(conjunto, N) {
    if (!Array.isArray(conjunto) || conjunto.length === 0) {
        return { total: 0, elementos: [] };
    }

    const primeiroDado = conjunto[0];
    const limiteInferior = Math.min(primeiroDado, N);
    const limiteSuperior = Math.max(primeiroDado, N);

    const elementosEncontrados = [];

    for (let i = 0; i < conjunto.length; i++) {
        const valor = conjunto[i];
        
        // Verifica se é um número inteiro e se está dentro do intervalo [limiteInferior, limiteSuperior]
        if (Number.isInteger(valor) && valor >= limiteInferior && valor <= limiteSuperior) {
            elementosEncontrados.push(valor);
        }
    }

    return {
        primeiroDado,
        N,
        intervalo: `[${limiteInferior}, ${limiteSuperior}]`,
        total: elementosEncontrados.length,
        elementos: elementosEncontrados
    };
}

// ==========================
// TESTES E DEMONSTRAÇÃO
// ==========================
console.log("=== TESTE: CONTAGEM ===");

const dados1 = [5, 2, 7.5, 8, 12, 15, 20, 3.2, 10];
const N1 = 15;
const resultado1 = contarInteirosEntrePrimeiroEN(dados1, N1);

console.log(`Conjunto de dados: [${dados1.join(", ")}]`);
console.log(`Primeiro dado: ${resultado1.primeiroDado}`);
console.log(`Valor de N: ${resultado1.N}`);
console.log(`Intervalo de busca: ${resultado1.intervalo}`);
console.log(`Valores inteiros encontrados: [${resultado1.elementos.join(", ")}]`);
console.log(`Quantidade total: ${resultado1.total}`);

console.log("\n--- Segundo Teste ---");
const dados2 = [10, 15, 20, 25, 30, 35];
const N2 = 50;
const resultado2 = contarInteirosEntrePrimeiroEN(dados2, N2);
console.log(`Conjunto: [${dados2.join(", ")}] com N = ${N2}`);
console.log(`Total de inteiros encontrados: ${resultado2.total} (${resultado2.elementos.join(", ")})`);

module.exports = { contarInteirosEntrePrimeiroEN };
