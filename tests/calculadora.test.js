import soma from "../models/calculadora.js";

test("adds 1 + 2 to be 3", () => {
  expect(soma(1, 2)).toBe(3);
});

test("adds 100 + 2 to be 3", () => {
  expect(soma(100, 2)).toBe(102);
});

test("Somar 'banana' + 100 deveria retornar um 'Erro'", () => {
  expect(soma("banana", 100)).toBe("Erro");
});
