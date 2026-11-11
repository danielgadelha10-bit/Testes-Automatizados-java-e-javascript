/**
 * Módulo de Validação e Programação Defensiva
 * 
 * Centraliza funções utilitárias para verificação de tipos e intervalos numéricos,
 * garantindo mensagens de erro descritivas e tipos de exceções semanticamente adequados.
 */

/**
 * Valida se um valor é do tipo número e se é um número inteiro válido.
 * 
 * @param {unknown} valor - O valor a ser inspecionado.
 * @param {string} nomeDoParametro - O nome do parâmetro para compor a mensagem de erro.
 * @throws {TypeError} Se o valor não for um número inteiro.
 */
function validarInteiro(valor, nomeDoParametro) {
    if (typeof valor !== 'number' || Number.isNaN(valor) || !Number.isInteger(valor)) {
        throw new TypeError(
            `O parâmetro '${nomeDoParametro}' deve ser um número inteiro. Valor recebido: ${String(valor)}`
        );
    }
}

/**
 * Valida se um valor é um número inteiro e maior ou igual a zero.
 * 
 * @param {unknown} valor - O valor a ser inspecionado.
 * @param {string} nomeDoParametro - O nome do parâmetro para compor a mensagem de erro.
 * @throws {TypeError} Se o valor não for um número inteiro.
 * @throws {RangeError} Se o valor for menor que zero.
 */
function validarInteiroNaoNegativo(valor, nomeDoParametro) {
    validarInteiro(valor, nomeDoParametro);

    if (valor < 0) {
        throw new RangeError(
            `O parâmetro '${nomeDoParametro}' deve ser maior ou igual a zero. Valor recebido: ${valor}`
        );
    }
}

/**
 * Valida se o argumento recebido é um array contendo exclusivamente números válidos.
 * 
 * @param {unknown} lista - A lista a ser inspecionada.
 * @param {string} nomeDoParametro - O nome do parâmetro para compor a mensagem de erro.
 * @throws {TypeError} Se o argumento não for um array ou se contiver elementos não numéricos.
 */
function validarArrayDeNumeros(lista, nomeDoParametro) {
    if (!Array.isArray(lista)) {
        throw new TypeError(
            `O parâmetro '${nomeDoParametro}' deve ser um array. Tipo recebido: ${typeof lista}`
        );
    }

    for (let indice = 0; indice < lista.length; indice++) {
        const elemento = lista[indice];
        if (typeof elemento !== 'number' || Number.isNaN(elemento)) {
            throw new TypeError(
                `O elemento no índice ${indice} de '${nomeDoParametro}' deve ser um número válido. Valor recebido: ${String(elemento)}`
            );
        }
    }
}

module.exports = {
    validarInteiro,
    validarInteiroNaoNegativo,
    validarArrayDeNumeros
};
