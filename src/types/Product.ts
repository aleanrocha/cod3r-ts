// DESAFIO PRODUTO

/*
  1 - definir uma variável com tipo para o produto
  2 - produto deve ter nome, preco, desconto(0-1), e produtoComDesconto
  3 - atribuir os valores ao produto
  3 - exibir os valores através do console
*/

let product: {
  name: string
  price: number
  discount: number
  productWithDiscount: () => number
}

product = {
  name: 'Arroz',
  price: 32.5,
  discount: 0.1,
  productWithDiscount() {
    return this.price * (1 - this.discount)
  },
}

console.log(
  `O ${product.name} custa R$${product.price.toPrecision(4)} com deconto de ${
    product.discount * 100
  }% vai pagar R$${product.productWithDiscount().toPrecision(4)}`
)
