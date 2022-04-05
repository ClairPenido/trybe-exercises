const {sum,myRemove} = require('./sum');

// Teste se o retorno de sum(4, 5) é 9
test('Somatorio 4 + 5 é igual 9', () => {
  expect(sum(4, 5)).toBe(9);
});

// Teste se o retorno de sum(0, 0) é 0
test('Somatorio 0 + 0 é igual 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
test('Somatorio 4 + "5" é igual 9', () => {
    expect(() => sum(4, '5')).toThrowError();
  });

  // Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

  test('Somatorio 4 + "5" é igual 9', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });

  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array [1, 2, 3, 4]

  test('retorna array esperado ([1, 2, 3, 4], 3)', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

 // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

 test('não retorna array esperado ([1, 2, 3, 4], 3)', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });