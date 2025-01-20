export interface Flexible {
  name: string
  //test: any
  [att: string]: any
}

const f1: Flexible = {
  name: 'Lá ele',
  test: 1234567,
  obj: {},
  arr: [{}]
}

console.log(f1)
