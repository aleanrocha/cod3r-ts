import { greeting, multi, multiDangerous } from '../../src/types/Functions'

test('Deve retornar uma saudação baseada no nome', () => {
  const name: string = 'Pedro'
  const result: string = greeting(name)
  expect(result).toBe(`Olá, ${name}! Tudo bem?`)
})

test('Deve retornar a multiplicação entre 2 números', () => {
  const result: number = multi(9, 9)
  expect(result).toBe(81)
})

test('Deve retornar NaN com parâmetro do tipo string', () => {
  const result: any = multiDangerous('a', 5)
  expect(result).toBeNaN()
})