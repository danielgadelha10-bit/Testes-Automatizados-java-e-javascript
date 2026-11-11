/**
 * ALGORITMO 2: SOMATÓRIO
 * 
 * Definição: Soma de um conjunto de números.
 */

function somatorio(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        return 0;
    }

    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

// Alternativa funcional usando reduce
function somatorioReduce(numeros) {
    if (!Array.isArray(numeros)) return 0;
    return numeros.reduce((acumulador, atual) => acumulador + atual, 0);
}

// ==========================
// TESTES E DEMONSTRAÇÃO
// ==========================
console.log("=== TESTE: SOMATÓRIO ===");

const lista1 = [10, 20, 30, 40, 50];
const lista2 = [1.5, 2.5, 3.0, 4.2];
const lista3 = [-10, 5, -2, 10];

console.log(`Conjunto: [${lista1.join(", ")}] -> Soma: ${somatorio(lista1)}`);
console.log(`Conjunto: [${lista2.join(", ")}] -> Soma: ${somatorio(lista2)}`);
console.log(`Conjunto: [${lista3.join(", ")}] -> Soma: ${somatorio(lista3)}`);

module.exports = { somatorio, somatorioReduce };
