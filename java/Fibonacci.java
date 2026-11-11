import java.util.ArrayList;
import java.util.List;

/**
 * ALGORITMO 3: FIBONACCI (JAVA)
 * 
 * Retorna os N primeiros termos da sequência de Fibonacci, começando em 0.
 */
public class Fibonacci {

    /**
     * Gera os N primeiros termos da sequência de Fibonacci.
     * 
     * @param n Quantidade de termos a gerar (deve ser >= 0).
     * @return Lista com os N primeiros termos.
     * @throws IllegalArgumentException se n for menor que zero.
     */
    public static List<Long> gerarSequencia(int n) {
        if (n < 0) {
            throw new IllegalArgumentException("A quantidade de termos deve ser maior ou igual a zero. Fornecido: " + n);
        }

        List<Long> sequencia = new ArrayList<>();
        if (n == 0) {
            return sequencia;
        }

        sequencia.add(0L);
        if (n == 1) {
            return sequencia;
        }

        sequencia.add(1L);
        for (int i = 2; i < n; i++) {
            long proximo = sequencia.get(i - 1) + sequencia.get(i - 2);
            sequencia.add(proximo);
        }

        return sequencia;
    }

    public static List<Long> fibonacci(int n) {
        return gerarSequencia(n);
    }

    public static void main(String[] args) {
        System.out.println("=== TESTE: FIBONACCI ===");
        System.out.println("10 primeiros termos: " + gerarSequencia(10));
        System.out.println("2 primeiros termos:  " + gerarSequencia(2));
    }
}
