/**
 * ALGORITMO 5: ORDENAÇÃO (QUICKSORT)
 * 
 * Definição: Algoritmo de ordenação baseado no paradigma Dividir para Conquistar.
 * Escolhe um pivô, particiona os elementos menores à esquerda e maiores à direita,
 * e aplica o processo recursivamente.
 */

// Implementação In-Place (particionamento Lomuto)
function quicksort(arr, inicio = 0, fim = arr.length - 1) {
    if (inicio < fim) {
        const indicePivo = particionar(arr, inicio, fim);
        quicksort(arr, inicio, indicePivo - 1);
        quicksort(arr, indicePivo + 1, fim);
    }
    return arr;
}

function particionar(arr, inicio, fim) {
    const pivo = arr[fim];
    let i = inicio - 1;

    for (let j = inicio; j < fim; j++) {
        if (arr[j] <= pivo) {
            i++;
            // Troca arr[i] e arr[j]
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    // Coloca o pivô na posição correta
    const temp = arr[i + 1];
    arr[i + 1] = arr[fim];
    arr[fim] = temp;

    return i + 1;
}

// ==========================
// TESTES E DEMONSTRAÇÃO
// ==========================
console.log("=== TESTE: ORDENAÇÃO QUICKSORT ===");

const arrayExemplo = [64, 34, 25, 12, 22, 11, 90, 5, 42];
console.log("Array original:", [...arrayExemplo]);

quicksort(arrayExemplo);
console.log("Array ordenado:", arrayExemplo);

const outroArray = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
console.log("\nOutro teste:");
console.log("Original:", [...outroArray]);
quicksort(outroArray);
console.log("Ordenado:", outroArray);

module.exports = { quicksort };
