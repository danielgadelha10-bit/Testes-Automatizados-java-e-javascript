const { validarArrayDeNumeros } = require('./validacao');

/**
 * Troca de posição dois elementos dentro de um array.
 * 
 * @param {number[]} arrayAlvo - Array no qual ocorrerá a troca.
 * @param {number} primeiroIndice - Posição do primeiro elemento.
 * @param {number} segundoIndice - Posição do segundo elemento.
 */
function trocarElementos(arrayAlvo, primeiroIndice, segundoIndice) {
    const elementoTemporario = arrayAlvo[primeiroIndice];
    arrayAlvo[primeiroIndice] = arrayAlvo[segundoIndice];
    arrayAlvo[segundoIndice] = elementoTemporario;
}

/**
 * Particiona o subarray utilizando o último elemento como pivô (esquema de Lomuto).
 * 
 * @param {number[]} arrayAlvo - Array sendo particionado.
 * @param {number} indiceInicial - Início do intervalo.
 * @param {number} indiceFinal - Fim do intervalo (posição do pivô).
 * @returns {number} O índice final onde o pivô foi posicionado.
 */
function particionar(arrayAlvo, indiceInicial, indiceFinal) {
    const valorPivo = arrayAlvo[indiceFinal];
    let indiceMenor = indiceInicial - 1;

    for (let indiceAtual = indiceInicial; indiceAtual < indiceFinal; indiceAtual++) {
        if (arrayAlvo[indiceAtual] <= valorPivo) {
            indiceMenor++;
            trocarElementos(arrayAlvo, indiceMenor, indiceAtual);
        }
    }

    const indicePosicaoFinalPivo = indiceMenor + 1;
    trocarElementos(arrayAlvo, indicePosicaoFinalPivo, indiceFinal);
    return indicePosicaoFinalPivo;
}

/**
 * Função recursiva auxiliar para ordenar o array no intervalo especificado.
 * 
 * @param {number[]} arrayAlvo - Array em ordenação.
 * @param {number} indiceInicial - Limite inferior do intervalo.
 * @param {number} indiceFinal - Limite superior do intervalo.
 */
function executarQuicksort(arrayAlvo, indiceInicial, indiceFinal) {
    if (indiceInicial < indiceFinal) {
        const indiceDoPivo = particionar(arrayAlvo, indiceInicial, indiceFinal);
        executarQuicksort(arrayAlvo, indiceInicial, indiceDoPivo - 1);
        executarQuicksort(arrayAlvo, indiceDoPivo + 1, indiceFinal);
    }
}

/**
 * Ordena um array numérico em ordem crescente utilizando o método Quicksort.
 * Retorna um novo array ordenado, sem modificar o array original recebido.
 * 
 * @param {number[]} lista - Array de números a ser ordenado.
 * @returns {number[]} Novo array contendo os elementos ordenados de forma crescente.
 * @throws {TypeError} Se a entrada não for um array ou se contiver elementos não numéricos.
 */
function quicksort(lista) {
    validarArrayDeNumeros(lista, 'lista');

    if (lista.length <= 1) {
        return [...lista];
    }

    const copiaParaOrdenar = [...lista];
    executarQuicksort(copiaParaOrdenar, 0, copiaParaOrdenar.length - 1);
    return copiaParaOrdenar;
}

module.exports = quicksort;
