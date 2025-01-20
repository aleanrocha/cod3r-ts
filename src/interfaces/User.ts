export class Generate {
  static Id() {
    return +Math.random().toString().slice(2)
  }
}

export interface User {
  id: number
  name: string
  email: string
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
}

console.log(user1)
console.log(user2)

