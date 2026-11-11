/**
 * ALGORITMO 4: MÁXIMO DIVISOR COMUM (MDC)
 * 
 * Definição: O máximo divisor comum (mdc) de dois inteiros a, b é o maior número inteiro que divide a e b.
 * Implementado através do clássico Algoritmo de Euclides.
 */

// Abordagem iterativa (Algoritmo de Euclides)
function mdcIterativo(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        const resto = a % b;
        a = b;
        b = resto;
    }

    return a;
}

// Abordagem recursiva
function mdcRecursivo(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b === 0) {
        return a;
    }
    return mdcRecursivo(b, a % b);
}

// ==========================
// TESTES E DEMONSTRAÇÃO
// ==========================
console.log("=== TESTE: MÁXIMO DIVISOR COMUM (MDC) ===");

const pares = [
    [24, 18],
    [10, 5],
    [17, 13], // números primos entre si
    [60, 48],
    [270, 192],
    [0, 15]
];

pares.forEach(([a, b]) => {
    const resultadoIter = mdcIterativo(a, b);
    const resultadoRec = mdcRecursivo(a, b);
    console.log(`MDC(${a}, ${b}) = ${resultadoIter} (Recursivo: ${resultadoRec})`);
});

module.exports = { mdcIterativo, mdcRecursivo };
