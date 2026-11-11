const contagem = require('../funcoes/contagem');

test('deve retornar a sequência correta de 1 a 5 quando o limite for 5', () => {
  expect(contagem(5)).toEqual([1, 2, 3, 4, 5]);
});

test('deve retornar [1] quando o limite for 1', () => {
  expect(contagem(1)).toEqual([1]);
});
