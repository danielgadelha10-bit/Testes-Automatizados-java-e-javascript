const { validarInteiroNaoNegativo } = require('./validacao');

/**
 * Calcula o somatório de todos os números inteiros de 1 até o limite informado.
 * 
 * @param {number} limite - Limite superior do somatório (deve ser inteiro >= 0).
 * @returns {number} A soma dos inteiros de 1 até o limite informado.
 * @throws {TypeError} Se o limite não for um número inteiro.
 * @throws {RangeError} Se o limite for menor que zero.
 */
function somatorio(limite) {
    validarInteiroNaoNegativo(limite, 'limite');

    let somaAcumulada = 0;
    for (let numeroAtual = 1; numeroAtual <= limite; numeroAtual++) {
        somaAcumulada += numeroAtual;
    }

    return somaAcumulada;
}

module.exports = somatorio;
