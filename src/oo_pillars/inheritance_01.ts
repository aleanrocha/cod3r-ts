class Create {
  static Id() {
    return `${Math.random().toString().slice(2)}-${Math.random()
      .toString()
      .slice(2)}-${Math.random().toString().slice(2)}`
  }
}

interface Entity {
  id: string
}

interface EntityWithDate extends Entity {
  createdAt: Date
  updatedAt?: Date
  deletedAt?: Date
}

interface User extends EntityWithDate {
  name: string
  email: string
}

interface PriceAndDiscount {
  price: number
  discount: number
}

interface Product extends EntityWithDate, PriceAndDiscount {
  name: string
}

const u1: User = {
  id: Create.Id(),
  name: 'Example',
  email: 'example@gmail.com',
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date(),
}

console.log(u1)

const p1: Product = {
  id: Create.Id(),
  name: 'Arroz',
  price: 12,
  discount: 0.01,
  createdAt: new Date(),
}

console.log(p1)

export {}
