class NewId {
  static Id(): string {
    return Math.random().toString().slice(2)
  }
}

interface Entity {
  id: string
}

interface ProductInfo {
  name: string
  price: number
  discount: number
}


class Product implements Entity, ProductInfo {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly price: number,
    readonly discount: number
  ) {}
  get finalPrice()  {
    return this.price * (1 - this.discount)
  }
}

class Service implements Entity, ProductInfo {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly price: number,
    readonly discount: number
  ) {}
}

const p1 = new Product(NewId.Id(), 'Café', 14.5, 0.1)

console.log(p1)
console.log(p1.finalPrice)

let p2: ProductInfo = new Product(NewId.Id(), 'Arroz', 9.59, 0.05)

console.log(p2)

p2 = new Service(NewId.Id(), 'Internet', 89.99, 0.03)

console.log(p2)
