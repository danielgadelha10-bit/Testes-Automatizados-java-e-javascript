const somatorio = require('../funcoes/somatorio');

test('deve calcular corretamente a soma de 1 até 5', () => {
  expect(somatorio(5)).toBe(15);
});

test('deve calcular corretamente a soma de 1 até 10', () => {
  expect(somatorio(10)).toBe(55);
});
