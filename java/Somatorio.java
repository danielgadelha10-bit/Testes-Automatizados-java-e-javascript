/**
 * ALGORITMO 2: SOMATÓRIO (JAVA)
 * 
 * Implementa tanto o somatório de 1 até o limite quanto a soma de um conjunto de números.
 */
public class Somatorio {

    /**
     * Calcula a soma de todos os números inteiros de 1 até o limite informado.
     * 
     * @param limite Limite superior da soma (deve ser >= 0).
     * @return A soma dos inteiros de 1 até o limite.
     * @throws IllegalArgumentException se o limite for negativo.
     */
    public static int somatorio(int limite) {
        if (limite < 0) {
            throw new IllegalArgumentException("O limite deve ser maior ou igual a zero. Valor recebido: " + limite);
        }

        int soma = 0;
        for (int i = 1; i <= limite; i++) {
            soma += i;
        }
        return soma;
    }

    /**
     * Calcula a soma de um conjunto de números inteiros.
     * 
     * @param numeros Vetor de inteiros.
     * @return Soma total dos elementos.
     */
    public static int somar(int[] numeros) {
        if (numeros == null || numeros.length == 0) {
            return 0;
        }

        int total = 0;
        for (int n : numeros) {
            total += n;
        }
        return total;
    }

    /**
     * Calcula a soma de um conjunto de números decimais.
     * 
     * @param numeros Vetor de doubles.
     * @return Soma total dos elementos.
     */
    public static double somar(double[] numeros) {
        if (numeros == null || numeros.length == 0) {
            return 0.0;
        }

        double total = 0.0;
        for (double n : numeros) {
            total += n;
        }
        return total;
    }

    public static void main(String[] args) {
        System.out.println("=== TESTE: SOMATÓRIO ===");
        System.out.println("Somatório de 1 até 5 = " + somatorio(5));
        System.out.println("Somatório de 1 até 10 = " + somatorio(10));

        int[] inteiros = {10, 20, 30, 40, 50};
        System.out.println("Soma do conjunto [10, 20, 30, 40, 50] = " + somar(inteiros));
    }
}
