class Generate {
  static Id(): string {
    return Math.random().toString().slice(2)
  }
}

interface UseCase {
  execute(entry: any): any
}

interface User {
  id: string
  name: string
  email: string
  password?: string
}

class RegisterUser implements UseCase {
  execute(entry: User) {
    if (!entry.password) {
      console.log('Senha não preenchida')
    }
    console.log('Usuário registrado com sucesso!')
  }
}

const u1: User = {
  id: Generate.Id(),
  name: 'Zezinho',
  email: 'zezinho@zmail.com',
  password: '12345678'
}

const myUser = new RegisterUser()

myUser.execute(u1)

export {}
