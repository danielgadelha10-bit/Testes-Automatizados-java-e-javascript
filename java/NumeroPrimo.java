/**
 * ALGORITMO 1: NÚMERO É PRIMO (JAVA)
 * 
 * Definição: Um número inteiro positivo n é primo se for divisível apenas por 1 e por n.
 * Por convenção matemática, números menores ou iguais a 1 não são primos.
 */
public class NumeroPrimo {

    public static boolean isPrimo(int n) {
        // Validação: inteiros positivos menores ou iguais a 1 não são primos
        if (n <= 1) {
            return false;
        }

        // 2 e 3 são números primos
        if (n <= 3) {
            return true;
        }

        // Múltiplos de 2 e 3 não são primos
        if (n % 2 == 0 || n % 3 == 0) {
            return false;
        }

        // Verificação até a raiz quadrada de n com passo de 6 (6k ± 1)
        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        System.out.println("=== TESTE: NÚMERO É PRIMO ===");
        int[] casos = {-5, 0, 1, 2, 3, 4, 7, 13, 20, 29, 35, 97, 100};

        for (int num : casos) {
            boolean resultado = isPrimo(num);
            System.out.println("O número " + num + " é primo? -> " + (resultado ? "SIM" : "NÃO"));
        }
    }
}
