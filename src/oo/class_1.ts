class Course {
  readonly id: number | undefined
  name: string | undefined

  constructor(id: number) {
    this.id = id
  }
}

const c1 = new Course(Number((Math.random()).toString().slice(2)))

console.log(c1)

c1.name = 'Curso de TypeScript.'

console.log(c1)
console.log(c1.name)

console.log(c1.id)