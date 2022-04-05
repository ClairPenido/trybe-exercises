const sum = require('./sum');

// Teste se o retorno de sum(4, 5) é 9
test('Somatorio 4 + 5 é igual 9', () => {
  expect(sum(4, 5)).toBe(9);
});

test('Somatorio 0 + 0 é igual 0', () => {
    expect(sum(0, 0)).toBe(0);
  });