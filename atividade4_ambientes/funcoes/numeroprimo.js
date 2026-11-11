const { validarInteiro } = require('./validacao');

const MENOR_NUMERO_PRIMO = 2;
const TRES_PRIMEIRO_IMPAR = 3;

/**
 * Verifica se um número inteiro é primo.
 * Um número inteiro é primo se for estritamente maior que 1 e divisível apenas por 1 e por ele mesmo.
 * 
 * @param {number} numero - O número inteiro a ser verificado.
 * @returns {boolean} True se o número for primo, caso contrário False.
 * @throws {TypeError} Se o argumento não for um número inteiro.
 */
function numeroPrimo(numero) {
    validarInteiro(numero, 'numero');

    if (numero < MENOR_NUMERO_PRIMO) {
        return false;
    }

    if (numero <= TRES_PRIMEIRO_IMPAR) {
        return true;
    }

    if (numero % 2 === 0 || numero % 3 === 0) {
        return false;
    }

    // Todo número primo maior que 3 pode ser escrito na forma 6k ± 1
    for (let divisorAtual = 5; divisorAtual * divisorAtual <= numero; divisorAtual += 6) {
        const divisorAlternativo = divisorAtual + 2;
        if (numero % divisorAtual === 0 || numero % divisorAlternativo === 0) {
            return false;
        }
    }

    return true;
}

module.exports = numeroPrimo;
