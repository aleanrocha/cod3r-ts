export class Generate {
  static Id() {
    return +Math.random().toString().slice(2)
  }
}

export interface User {
  id: number
  name: string
  email: string
  password?: string
}

const user1: User = {
  id: Generate.Id(),
  name: 'Zé',
  email: 'zezinho@gmail.com',
}

const user2: User = {
  id: Generate.Id(),
  name: 'Manoel',
  email: 'manoel@gmail.com',
  password: `dvwigyefv7${Generate.Id()}1f23qpbfpWEBV`
}

console.log(user1)
console.log(user2)

