// FUNCOES

export const greeting = (name: string): string => {
  return `Olá, ${name}! Tudo bem?`
}

export const multi = (n1: number, n2: number): number => {
  return n1 * n2
}

export const multiDangerous = (x: any, y: any): number => {
  return x * y
}

const printText = (): void => {
  console.log('Eu sou uma função sem retorno')
}

printText()

// TIPOS DE FUNCOES

let oper: (a: number, b: number) => number

const sum = (n1: number, n2: number): number => {
  return n1 + n2
}

const multiply = (n1: number, n2: number): number => {
  return n1 * n2
}

oper = sum

console.log(oper(5, 5))

oper = multiply

console.log(multiply(5, 5))
