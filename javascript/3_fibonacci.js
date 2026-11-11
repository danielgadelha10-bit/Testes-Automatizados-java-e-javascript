/**
 * ALGORITMO 3: FIBONACCI
 * 
 * Definição: Onde N > 1.
 * Os primeiros termos são: 0, 1, 1, 2, 3, 5, 8, 13 …
 * Cada termo, além dos dois primeiros, é derivado da soma de seus dois antecessores mais próximos.
 */

function fibonacci(n) {
    if (n <= 1) {
        throw new Error("O valor de N deve ser estritamente maior que 1 (N > 1).");
    }

    const sequencia = [0, 1];

    for (let i = 2; i < n; i++) {
        const proximoTermo = sequencia[i - 1] + sequencia[i - 2];
        sequencia.push(proximoTermo);
    }

    return sequencia;
}

// ==========================
// TESTES E DEMONSTRAÇÃO
// ==========================
console.log("=== TESTE: FIBONACCI (N > 1) ===");

const valoresN = [2, 5, 8, 12];

valoresN.forEach(n => {
    try {
        const termos = fibonacci(n);
        console.log(`Fibonacci para N = ${n} termos:`);
        console.log(termos.join(", "));
    } catch (e) {
        console.error(`Erro para N = ${n}:`, e.message);
    }
});

// Teste de validação para N <= 1
try {
    console.log("\nTentando gerar Fibonacci com N = 1 (deve disparar erro):");
    fibonacci(1);
} catch (e) {
    console.log(`Validação funcionou: ${e.message}`);
}

module.exports = { fibonacci };
