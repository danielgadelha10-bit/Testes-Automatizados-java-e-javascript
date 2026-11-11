const mdc = require('../funcoes/mdc');

test('deve calcular corretamente o MDC entre 24 e 18', () => {
  expect(mdc(24, 18)).toBe(6);
});

test('deve calcular corretamente o MDC entre 10 e 5', () => {
  expect(mdc(10, 5)).toBe(5);
});
