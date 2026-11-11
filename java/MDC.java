/**
 * ALGORITMO 4: MÁXIMO DIVISOR COMUM (MDC) (JAVA)
 * 
 * Calcula o MDC de dois inteiros utilizando o algoritmo de Euclides.
 * Aceita números negativos via valor absoluto.
 */
public class MDC {

    /**
     * Calcula o MDC entre dois inteiros (algoritmo de Euclides iterativo).
     */
    public static int calcularIterativo(int a, int b) {
        if (a == 0 && b == 0) {
            throw new IllegalArgumentException("O MDC entre 0 e 0 é matematicamente indefinido.");
        }

        a = Math.abs(a);
        b = Math.abs(b);

        while (b != 0) {
            int resto = a % b;
            a = b;
            b = resto;
        }

        return a;
    }

    /**
     * Alias para calcularIterativo.
     */
    public static int calcularMDC(int a, int b) {
        return calcularIterativo(a, b);
    }

    /**
     * Calcula o MDC de forma recursiva.
     */
    public static int calcularRecursivo(int a, int b) {
        if (a == 0 && b == 0) {
            throw new IllegalArgumentException("O MDC entre 0 e 0 é matematicamente indefinido.");
        }

        a = Math.abs(a);
        b = Math.abs(b);

        if (b == 0) {
            return a;
        }
        return calcularRecursivo(b, a % b);
    }

    public static void main(String[] args) {
        System.out.println("=== TESTE: MÁXIMO DIVISOR COMUM (MDC) ===");
        System.out.println("MDC(24, 18) = " + calcularIterativo(24, 18));
        System.out.println("MDC(10, 5) = " + calcularIterativo(10, 5));
        System.out.println("MDC(-24, 18) = " + calcularIterativo(-24, 18));
    }
}
