class Product {
  constructor(
    readonly id: number,
    public name: string,
    public price: number,
    public desc: number
  ) {
    if (name.length <= 2 || name.length >= 256) throw new Error('Nome inválido!')
    if (price <= 0) throw new Error('Preço inválido!')
    if (desc <= 0 || desc >= 0.8) throw new Error('Disconto inválido!')

    this.id = id
    this.name = name
    this.price = price
    this.desc = desc
  }

  descount() {
    return (this.price * (1 - this.desc)).toFixed(2)
  }
}

const p1 = new Product(
  Number(Math.random.toString().slice(2)),
  'Arroz',
  10,
  0.1
)

console.log(
  `Produto: ${p1.name} \n\r Preço: R$${(p1.price).toFixed(2)} \n\r Desconto: ${
    p1.desc * 100
  }% \r\n Valor final: R$${p1.descount()}  `
)

export {}
