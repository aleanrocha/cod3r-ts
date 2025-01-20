export interface MathOPerObj {
  fn: (n1: number, n2: number) => number
}

const sum: MathOPerObj = {
   fn: (n1, n2) => {
    return n1 + n2
  }
}

console.log(sum.fn(5, 2))

/////////////////////////////////////q

export interface MathOPer {
  (n1: number, n2: number): number
}

const multi: MathOPer = (n1: number, n2: number): number => {
  return n1 * n2
}

console.log(multi(3, 5))