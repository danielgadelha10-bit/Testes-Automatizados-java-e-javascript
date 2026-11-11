import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * ALGORITMO 6: CONTAGEM (JAVA)
 * 
 * Implementa:
 * 1. contagemSequencial(limite): retorna o array [1, 2, ..., limite]
 * 2. contar(conjunto, N): conta inteiros no conjunto entre o 1º dado e N
 */
public class Contagem {

    /**
     * Retorna um array com os inteiros de 1 até o limite informado: [1, 2, ..., limite].
     * 
     * @param limite Limite superior da contagem (deve ser >= 0).
     * @return Array com os valores inteiros sequenciais.
     * @throws IllegalArgumentException se o limite for menor que zero.
     */
    public static int[] contagemSequencial(int limite) {
        if (limite < 0) {
            throw new IllegalArgumentException("O limite deve ser maior ou igual a zero. Valor recebido: " + limite);
        }

        int[] resultado = new int[limite];
        for (int i = 0; i < limite; i++) {
            resultado[i] = i + 1;
        }
        return resultado;
    }

    public static class ResultadoContagem {
        public double primeiroDado;
        public double n;
        public double limiteInferior;
        public double limiteSuperior;
        public int total;
        public List<Integer> inteirosEncontrados;

        public ResultadoContagem(double primeiroDado, double n, double min, double max, List<Integer> inteiros) {
            this.primeiroDado = primeiroDado;
            this.n = n;
            this.limiteInferior = min;
            this.limiteSuperior = max;
            this.total = inteiros.size();
            this.inteirosEncontrados = inteiros;
        }

        @Override
        public String toString() {
            return "Primeiro dado: " + primeiroDado + "\n" +
                   "Valor N: " + n + "\n" +
                   "Intervalo analisado: [" + limiteInferior + ", " + limiteSuperior + "]\n" +
                   "Inteiros encontrados: " + inteirosEncontrados + "\n" +
                   "Total de elementos: " + total;
        }
    }

    /**
     * Dado um conjunto de dados e o valor N, conta quantos inteiros existem entre o 1º dado e N.
     */
    public static ResultadoContagem contar(double[] conjunto, double n) {
        if (conjunto == null || conjunto.length == 0) {
            return new ResultadoContagem(0, n, 0, 0, new ArrayList<>());
        }

        double primeiroDado = conjunto[0];
        double limiteInferior = Math.min(primeiroDado, n);
        double limiteSuperior = Math.max(primeiroDado, n);

        List<Integer> encontrados = new ArrayList<>();

        for (double valor : conjunto) {
            boolean ehInteiro = (valor == Math.floor(valor)) && !Double.isInfinite(valor);

            if (ehInteiro && valor >= limiteInferior && valor <= limiteSuperior) {
                encontrados.add((int) valor);
            }
        }

        return new ResultadoContagem(primeiroDado, n, limiteInferior, limiteSuperior, encontrados);
    }

    public static ResultadoContagem contar(int[] conjunto, int n) {
        double[] conjuntoDouble = new double[conjunto.length];
        for (int i = 0; i < conjunto.length; i++) {
            conjuntoDouble[i] = conjunto[i];
        }
        return contar(conjuntoDouble, n);
    }

    public static void main(String[] args) {
        System.out.println("=== TESTE: CONTAGEM ===");
        System.out.println("Contagem sequencial até 5: " + Arrays.toString(contagemSequencial(5)));
        System.out.println("Contagem sequencial até 1: " + Arrays.toString(contagemSequencial(1)));

        double[] dados = {5.0, 2.0, 7.5, 8.0, 12.0, 15.0, 20.0};
        System.out.println("\nContagem por intervalo (1º dado a N=15):");
        System.out.println(contar(dados, 15.0));
    }
}
