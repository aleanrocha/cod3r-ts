// STRING

let firstName: string = 'pedro'

//firstName = 123 // Erro - Type number is not assingnable to type string

console.log(firstName)

// BOOLEAN

const isRequired: boolean = false
console.log(isRequired)

// NUMBER

// se vc não tipar, o ts por padrão vai tipar com o tipo do valor atribuido.

/*
  Variáveis com tipo explícito: São as variáveis onde o tipo é declarado explicitamente, ou seja, você informa o tipo da variável na hora da sua declaração. Exemplo:

  Variáveis com tipo implícito (inferido): São as variáveis onde o tipo é automaticamente inferido pelo TypeScript com base no valor atribuído à variável. Não é necessário declarar o tipo explicitamente, pois o TypeScript consegue deduzir o tipo com base no valor inicial. 
*/

let n1 = 55
console.log(n1)


// ANY - Aceita qualquer tipo

let variable: any = 10
variable = 'Hello'
variable = true
variable = { name: 'JP', age: 29 }

console.log(variable)
