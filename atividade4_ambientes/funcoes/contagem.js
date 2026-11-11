const { validarInteiroNaoNegativo } = require('./validacao');

/**
 * Retorna um array com a contagem sequencial de inteiros de 1 até o limite informado.
 * 
 * @param {number} limite - Limite superior da contagem (deve ser inteiro >= 0).
 * @returns {number[]} Array contendo os valores [1, 2, ..., limite].
 * @throws {TypeError} Se o limite não for um número inteiro.
 * @throws {RangeError} Se o limite for menor que zero.
 */
function contagem(limite) {
    validarInteiroNaoNegativo(limite, 'limite');

    const sequenciaContagem = [];
    for (let numeroAtual = 1; numeroAtual <= limite; numeroAtual++) {
        sequenciaContagem.push(numeroAtual);
    }

    return sequenciaContagem;
}

module.exports = contagem;
