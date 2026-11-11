import java.util.Arrays;

/**
 * ALGORITMO 5: ORDENAÇÃO (QUICKSORT) (JAVA)
 * 
 * Implementa Quicksort tanto in-place quanto retornando um novo vetor sem mutar o original.
 */
public class Quicksort {

    /**
     * Ordena o vetor original in-place.
     */
    public static void ordenar(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return;
        }
        quickSort(arr, 0, arr.length - 1);
    }

    /**
     * Retorna um novo vetor ordenado de forma crescente, sem alterar o original.
     */
    public static int[] ordenarNovo(int[] arr) {
        if (arr == null) {
            return new int[0];
        }
        int[] copia = Arrays.copyOf(arr, arr.length);
        ordenar(copia);
        return copia;
    }

    private static void quickSort(int[] arr, int inicio, int fim) {
        if (inicio < fim) {
            int indicePivo = particionar(arr, inicio, fim);
            quickSort(arr, inicio, indicePivo - 1);
            quickSort(arr, indicePivo + 1, fim);
        }
    }

    private static int particionar(int[] arr, int inicio, int fim) {
        int pivo = arr[fim];
        int i = inicio - 1;

        for (int j = inicio; j < fim; j++) {
            if (arr[j] <= pivo) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        int temp = arr[i + 1];
        arr[i + 1] = arr[fim];
        arr[fim] = temp;

        return i + 1;
    }

    public static void main(String[] args) {
        System.out.println("=== TESTE: ORDENAÇÃO QUICKSORT ===");

        int[] array1 = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Array original: " + Arrays.toString(array1));
        int[] ordenado = ordenarNovo(array1);
        System.out.println("Novo array ordenado: " + Arrays.toString(ordenado));
        System.out.println("Array original intacto: " + Arrays.toString(array1));
    }
}
