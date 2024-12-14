// TYPE NULL

type UserType = { name: string; email: string }

const users: UserType[] = [
  { name: 'Zé', email: 'ze@gmail.com' },
  { name: 'Bruna', email: 'bruna@gmail.com' },
  { name: 'Carla', email: 'carla@gmail.com' },
  { name: 'Maria', email: 'maria@gmail.com' },
]

const findByEmail = (email: string): UserType | null => {
  return users.find(user => user.email === email) ?? null
}

console.log(findByEmail('maria@gmail.com'))
console.log(findByEmail('joao@gmail.com'))