import { sum } from '../src/calc'

test('Deve somar corretamente: ', () => {
  const result = sum(5, 10)
  expect(result).toBe(15)
})
