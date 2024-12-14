/* 
  Never é um tipo especial usado para indicar q uma função ou expressão nunca deve retornar um valor ou que um código nunca deve terminar su execução normalmente.
*/

const throwError = (msg: string): never => {
  throw new Error(msg)
}

const asserNever = (x: string): never => {
  throw new Error('Unexpected value: ' + x)
}

throwError('Deu ruim - NEVER')
asserNever('Puta merda!')