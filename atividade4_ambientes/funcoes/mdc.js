const { validarInteiro } = require('./validacao');

/**
 * Calcula o Máximo Divisor Comum (MDC) entre dois números inteiros pelo Algoritmo de Euclides.
 * Suporta inteiros negativos convertendo-os para seus respectivos valores absolutos.
 * 
 * @param {number} primeiroNumero - Primeiro número inteiro.
 * @param {number} segundoNumero - Segundo número inteiro.
 * @returns {number} O maior inteiro que divide ambos os números.
 * @throws {TypeError} Se algum dos parâmetros não for um número inteiro.
 * @throws {RangeError} Se ambos os números forem iguais a zero (mdc(0, 0) é indefinido).
 */
function mdc(primeiroNumero, segundoNumero) {
    validarInteiro(primeiroNumero, 'primeiroNumero');
    validarInteiro(segundoNumero, 'segundoNumero');

    if (primeiroNumero === 0 && segundoNumero === 0) {
        throw new RangeError('O MDC entre 0 e 0 é indefinido.');
    }

    let dividendo = Math.abs(primeiroNumero);
    let divisor = Math.abs(segundoNumero);

    while (divisor !== 0) {
        const restoDaDivisao = dividendo % divisor;
        dividendo = divisor;
        divisor = restoDaDivisao;
    }

    return dividendo;
}

module.exports = mdc;
