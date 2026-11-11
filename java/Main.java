import java.util.Arrays;
import java.util.List;

/**
 * ROTINA DE TESTES AUTOMATIZADOS (JAVA)
 * 
 * Executa testes unitários para os 6 algoritmos implementados:
 * 1. NumeroPrimo
 * 2. Somatorio
 * 3. Fibonacci
 * 4. MDC
 * 5. Quicksort
 * 6. Contagem
 * 
 * Para executar:
 *   javac *.java
 *   java Main
 */
public class Main {

    private static int totalTestes = 0;
    private static int testesAprovados = 0;
    private static int totalSuites = 0;
    private static int suitesAprovadas = 0;

    // --- Helpers de Asserção ---
    private static void assertTrue(boolean condicao, String mensagem) {
        totalTestes++;
        if (condicao) {
            testesAprovados++;
            System.out.println("    ✓ " + mensagem);
        } else {
            System.err.println("    ✗ FALHA: " + mensagem);
            throw new AssertionError("Asserção falhou: " + mensagem);
        }
    }

    private static void assertEquals(Object esperado, Object obtido, String mensagem) {
        totalTestes++;
        boolean iguais = (esperado == null && obtido == null) || (esperado != null && esperado.equals(obtido));
        if (iguais) {
            testesAprovados++;
            System.out.println("    ✓ " + mensagem);
        } else {
            System.err.println("    ✗ FALHA: " + mensagem + " | Esperado: " + esperado + ", Obtido: " + obtido);
            throw new AssertionError("Esperado: " + esperado + ", mas obteve: " + obtido);
        }
    }

    private static void assertArrayEquals(int[] esperado, int[] obtido, String mensagem) {
        totalTestes++;
        if (Arrays.equals(esperado, obtido)) {
            testesAprovados++;
            System.out.println("    ✓ " + mensagem);
        } else {
            System.err.println("    ✗ FALHA: " + mensagem + " | Esperado: " + Arrays.toString(esperado) + ", Obtido: " + Arrays.toString(obtido));
            throw new AssertionError("Arrays diferentes!");
        }
    }

    // --- Suíte 1: NumeroPrimo ---
    private static void testarNumeroPrimo() {
        totalSuites++;
        try {
            // Teste 1: deve retornar true para o número 2 e outros primos
            assertTrue(NumeroPrimo.isPrimo(2) && NumeroPrimo.isPrimo(7) && NumeroPrimo.isPrimo(13),
                    "deve retornar true para números primos (2, 7, 13)");

            // Teste 2: deve retornar false para números compostos como 9, 0 e 1
            assertTrue(!NumeroPrimo.isPrimo(9) && !NumeroPrimo.isPrimo(0) && !NumeroPrimo.isPrimo(1),
                    "deve retornar false para 0, 1 e número composto 9");

            suitesAprovadas++;
            System.out.println("PASS tests/NumeroPrimoTest\n");
        } catch (Throwable t) {
            System.err.println("FAIL tests/NumeroPrimoTest: " + t.getMessage() + "\n");
        }
    }

    // --- Suíte 2: Somatorio ---
    private static void testarSomatorio() {
        totalSuites++;
        try {
            // Teste 1: soma de 1 até 5 deve ser 15
            assertEquals(15, Somatorio.somatorio(5),
                    "deve calcular corretamente a soma de 1 até 5 (15)");

            // Teste 2: soma de 1 até 10 deve ser 55
            assertEquals(55, Somatorio.somatorio(10),
                    "deve calcular corretamente a soma de 1 até 10 (55)");

            suitesAprovadas++;
            System.out.println("PASS tests/SomatorioTest\n");
        } catch (Throwable t) {
            System.err.println("FAIL tests/SomatorioTest: " + t.getMessage() + "\n");
        }
    }

    // --- Suíte 3: Fibonacci ---
    private static void testarFibonacci() {
        totalSuites++;
        try {
            // Teste 1: os 10 primeiros termos devem ser os corretos
            List<Long> esperados10 = Arrays.asList(0L, 1L, 1L, 2L, 3L, 5L, 8L, 13L, 21L, 34L);
            assertEquals(esperados10, Fibonacci.gerarSequencia(10),
                    "os 10 primeiros números de Fibonacci devem ser [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]");

            // Teste 2: os 2 primeiros termos devem ser 0 e 1
            List<Long> esperados2 = Arrays.asList(0L, 1L);
            assertEquals(esperados2, Fibonacci.gerarSequencia(2),
                    "os 2 primeiros números de Fibonacci devem ser [0, 1]");

            suitesAprovadas++;
            System.out.println("PASS tests/FibonacciTest\n");
        } catch (Throwable t) {
            System.err.println("FAIL tests/FibonacciTest: " + t.getMessage() + "\n");
        }
    }

    // --- Suíte 4: MDC ---
    private static void testarMDC() {
        totalSuites++;
        try {
            // Teste 1: MDC entre 24 e 18 deve ser 6
            assertEquals(6, MDC.calcularIterativo(24, 18),
                    "deve calcular corretamente o MDC entre 24 e 18 (6)");

            // Teste 2: MDC entre 10 e 5 deve ser 5
            assertEquals(5, MDC.calcularIterativo(10, 5),
                    "deve calcular corretamente o MDC entre 10 e 5 (5)");

            suitesAprovadas++;
            System.out.println("PASS tests/MDCTest\n");
        } catch (Throwable t) {
            System.err.println("FAIL tests/MDCTest: " + t.getMessage() + "\n");
        }
    }

    // --- Suíte 5: Quicksort ---
    private static void testarQuicksort() {
        totalSuites++;
        try {
            // Teste 1: deve ordenar corretamente uma lista desordenada
            int[] desordenado = {64, 34, 25, 12, 22, 11, 90};
            int[] ordenadoEsperado = {11, 12, 22, 25, 34, 64, 90};
            int[] resultado = Quicksort.ordenarNovo(desordenado);
            assertArrayEquals(ordenadoEsperado, resultado,
                    "deve ordenar corretamente array [64, 34, 25, 12, 22, 11, 90]");

            // Teste 2: não deve alterar o array original recebido
            int[] original = {9, 3, 7, 1};
            int[] copiaOriginal = Arrays.copyOf(original, original.length);
            Quicksort.ordenarNovo(original);
            assertArrayEquals(copiaOriginal, original,
                    "não deve alterar o array original recebido como parâmetro");

            suitesAprovadas++;
            System.out.println("PASS tests/QuicksortTest\n");
        } catch (Throwable t) {
            System.err.println("FAIL tests/QuicksortTest: " + t.getMessage() + "\n");
        }
    }

    // --- Suíte 6: Contagem ---
    private static void testarContagem() {
        totalSuites++;
        try {
            // Teste 1: contagem sequencial de 1 a 5
            int[] esperado5 = {1, 2, 3, 4, 5};
            assertArrayEquals(esperado5, Contagem.contagemSequencial(5),
                    "deve retornar a sequência correta de 1 a 5 quando o limite for 5");

            // Teste 2: contagem sequencial com limite 1
            int[] esperado1 = {1};
            assertArrayEquals(esperado1, Contagem.contagemSequencial(1),
                    "deve retornar [1] quando o limite for 1");

            suitesAprovadas++;
            System.out.println("PASS tests/ContagemTest\n");
        } catch (Throwable t) {
            System.err.println("FAIL tests/ContagemTest: " + t.getMessage() + "\n");
        }
    }

    public static void main(String[] args) {
        System.out.println("========================================================");
        System.out.println("         EXECUÇÃO DA SUÍTE DE TESTES EM JAVA            ");
        System.out.println("========================================================\n");

        long tempoInicio = System.currentTimeMillis();

        testarNumeroPrimo();
        testarSomatorio();
        testarFibonacci();
        testarMDC();
        testarQuicksort();
        testarContagem();

        long duracaoMs = System.currentTimeMillis() - tempoInicio;

        System.out.println("--------------------------------------------------------");
        System.out.printf("Test Suites: %d passed, %d total%n", suitesAprovadas, totalSuites);
        System.out.printf("Tests:       %d passed, %d total%n", testesAprovados, totalTestes);
        System.out.printf("Time:        %.3f s%n", duracaoMs / 1000.0);
        System.out.println("--------------------------------------------------------");

        if (testesAprovados == totalTestes && suitesAprovadas == totalSuites) {
            System.out.println("TODOS OS TESTES PASSARAM COM SUCESSO! 🎉");
        } else {
            System.exit(1);
        }
    }
}
