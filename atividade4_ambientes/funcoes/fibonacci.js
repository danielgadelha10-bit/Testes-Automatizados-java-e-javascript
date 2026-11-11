const { validarInteiroNaoNegativo } = require('./validacao');

const PRIMEIRO_TERMO_FIBONACCI = 0;
const SEGUNDO_TERMO_FIBONACCI = 1;

/**
 * Retorna um array contendo os N primeiros termos da sequência de Fibonacci, iniciando em 0.
 * 
 * @param {number} quantidadeDeTermos - Número de termos desejados da sequência (deve ser inteiro >= 0).
 * @returns {number[]} Array contendo os primeiros N termos da sequência de Fibonacci.
 * @throws {TypeError} Se a quantidadeDeTermos não for um número inteiro.
 * @throws {RangeError} Se a quantidadeDeTermos for menor que zero.
 */
function fibonacci(quantidadeDeTermos) {
    validarInteiroNaoNegativo(quantidadeDeTermos, 'quantidadeDeTermos');

    if (quantidadeDeTermos === 0) {
        return [];
    }

    if (quantidadeDeTermos === 1) {
        return [PRIMEIRO_TERMO_FIBONACCI];
    }

    const sequencia = [PRIMEIRO_TERMO_FIBONACCI, SEGUNDO_TERMO_FIBONACCI];

    for (let indice = 2; indice < quantidadeDeTermos; indice++) {
        const proximoTermo = sequencia[indice - 1] + sequencia[indice - 2];
        sequencia.push(proximoTermo);
    }

    return sequencia;
}

module.exports = fibonacci;
