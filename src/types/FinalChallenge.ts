// 1 - Definir tipo chamado ContaCorrente contendo (número, saldo, movimentar())

// 2 - Definir tipo chamado Cliente contendo (nome, email, contas[]:ContaCorrente)

// 3 - Criar uma lista de correntistas

// 4 - criar uma função chamada movimentarConta(numConta: number, valor: number)

type CurrentAccount = {
  accountNumber: number
  accountBalance: number
  moveAccount: (value: number) => void
}

type Client = {
  name: string
  email: string
  accounts: CurrentAccount[]
}

function moveAccount(this: CurrentAccount, value: number) {
  this.accountBalance += value
}

const clients: Client[] = [
  {
    name: 'João',
    email: 'joao@gmail.com',
    accounts: [
      {
        accountNumber: 11111111,
        accountBalance: 100,
        moveAccount,
      },
      {
        accountNumber: 22222222,
        accountBalance: 1000,
        moveAccount,
      },
    ],
  },
  {
    name: 'Ana',
    email: 'ana@gmail.com',
    accounts: [
      {
        accountNumber: 44444444,
        accountBalance: 100,
        moveAccount,
      },
    ],
  },
]

const modifyAccountBalance = (accountNumber: number, value: number): void => {
  const user = clients
    .map((cli) => {
      const acCli = cli.accounts.find(
        (ac) => ac.accountNumber === accountNumber
      )
      if (acCli) {
        acCli.moveAccount(value)
        return { nome: cli.name, conta: acCli.accountNumber, saldo: acCli.accountBalance }
      }
      return null
    })
    .find((ac) => ac !== null)
  if (!user) {
    console.log('Conta não encontrada!')
  } else {
    console.log(user)
  }
}

const findAccountBalance = (accountNumber: number): number | null => {
  const account = clients
    .map((cli) => {
      return cli.accounts.find((ac) => ac.accountNumber === accountNumber)
    })
    .filter((ac) => ac)[0]
  return account?.accountBalance ?? null
}

modifyAccountBalance(11111111, 200)
modifyAccountBalance(11111111, 200)
modifyAccountBalance(11111111, 200)

modifyAccountBalance(22222222, 200)
modifyAccountBalance(22222222, 200)

modifyAccountBalance(44444444, 800)






console.log(findAccountBalance(11111111))
console.log(findAccountBalance(22222222))
console.log(findAccountBalance(44444444))

