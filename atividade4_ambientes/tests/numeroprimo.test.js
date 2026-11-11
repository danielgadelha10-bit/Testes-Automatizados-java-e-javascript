const numeroPrimo = require('../funcoes/numeroprimo');

test('deve retornar true para o número 2', () => {
  expect(numeroPrimo(2)).toBe(true);
});

test('deve retornar false para o número 9', () => {
  expect(numeroPrimo(9)).toBe(false);
});
