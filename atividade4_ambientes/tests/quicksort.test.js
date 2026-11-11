const quicksort = require('../funcoes/quicksort');

test('deve ordenar corretamente uma lista desordenada de números', () => {
  const listaDesordenada = [64, 34, 25, 12, 22, 11, 90];
  expect(quicksort(listaDesordenada)).toEqual([11, 12, 22, 25, 34, 64, 90]);
});

test('não deve alterar o array original recebido como parâmetro', () => {
  const original = [9, 3, 7, 1];
  const copiaOriginal = [...original];
  const ordenado = quicksort(original);
  expect(original).toEqual(copiaOriginal);
  expect(ordenado).toEqual([1, 3, 7, 9]);
});
