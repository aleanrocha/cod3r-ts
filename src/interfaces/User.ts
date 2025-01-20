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

 const optionalUser: Partial<User> = {
  name: 'Lá ele'
 }

 const requiredUser: Required<User> = {
  id: Generate.Id(),
  name: 'Gabriel',
  email: 'gabriel@gmail.com',
  password: 'calvbibviabvkjlavbçpvbWEAIP'
 }

 const readonlyUser: Readonly<User> = {
  id: Generate.Id(),
  name: 'Bia',
  email: 'bia@gmail.com',
  password: '465277t73f4'
 }

console.log(user1)
console.log(user2)

console.log(optionalUser)
console.log(requiredUser)

console.log(requiredUser.password = '123')

console.log(requiredUser)

console.log(readonlyUser)
// console.log(readonlyUser.password = '22222')

