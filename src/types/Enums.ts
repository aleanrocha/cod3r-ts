/*
  ENUMS ou (enumerações) são uma forma de definir um conjunto nomeado de valores constantes. Elas permitem que vc crie variáveis com um conjunto fixo de opções, o que melhora a legibilidade e segurança do código.

  Um conjunto de elementos delimitados para uma variável
*/

enum WeekDay {
  // começa a contar a partir do 0
  SUNDAY = 'domingo',
  MONDAY = 'segunda',
  TUESDAY = 'terça',
  WEDNESDAY = 'quarta',
  THURSDAY = 'quinta',
  FRIDAY = 'sexta',
  SATURDAY = 'sábado'
}

enum MyColor {
  RED = 'rgb(255, 0, 0)',
  GREEN = 'rgb(0, 255, 0)',
  BLUE = 'rgb(0, 0, 255)'
}

// const oneDay: WeekDay = 'domingo'
const oneDay: WeekDay = WeekDay.SUNDAY
let green: MyColor

green = MyColor.GREEN

console.log(oneDay)
console.log(green)
console.log(WeekDay.SATURDAY)




// ENUMS COM CONSTANTS

const OrderStatus = {
  STARTED: 'iniciado',
  COMPLETED: 'concluído',
  CANCELED: 'cancelado'
} as const // somente leitura

// OrderStatus.CANCELED = '123'

const myOrder: string = OrderStatus.COMPLETED

console.log(OrderStatus)


const Errors = {
  NULL_NAME: 'Name cannot be null',
  INVALID_EMAIL: 'Invalid email address',
  INVALID_URL: 'Invalid URL'
} as const

let myError: string
myError = Errors.NULL_NAME

console.log(myError)

myError = 'Invalid CPF'

console.log(myError)




// ENUMS COM TIPO

type OrderStatus2 = 'iniciado' | 'cocluído' | 'cancelado'

let myOrderStatus: OrderStatus2

// myOrderStatus = 'reenbolsado'

myOrderStatus = "iniciado"

console.log(myOrderStatus)