/**
 * ALGORITMO 1: NÚMERO É PRIMO
 * 
 * Definição: Um número inteiro positivo n é primo se for divisível apenas por 1 e por n.
 * Por convenção matemática, números menores ou iguais a 1 não são primos.
 */

function isPrimo(n) {
    // Validação para inteiros positivos maiores que 1
    if (!Number.isInteger(n) || n <= 1) {
        return false;
    }
    
    // 2 e 3 são números primos
    if (n <= 3) {
        return true;
    }
    
    // Números pares maiores que 2 ou múltiplos de 3 não são primos
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    
    // Verificação de divisores até a raiz quadrada de n
    // Incremento de 6 em 6 (todo primo > 3 é da forma 6k ± 1)
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    
    return true;
}

// ==========================
// TESTES E DEMONSTRAÇÃO
// ==========================
console.log("=== TESTE: NÚMERO É PRIMO ===");
const casosDeTeste = [-5, 0, 1, 2, 3, 4, 7, 13, 20, 29, 35, 97, 100];

casosDeTeste.forEach(num => {
    const resultado = isPrimo(num);
    console.log(`O número ${num} é primo? -> ${resultado ? "SIM" : "NÃO"}`);
});

module.exports = { isPrimo };
