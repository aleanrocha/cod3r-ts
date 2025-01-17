class Course {
  constructor(readonly id: number, public name?: string | undefined) {
    this.id = id
  }
}

const c1 = new Course(Number(Math.random().toString().slice(2)))
const c2 = new Course(
  Number(Math.random().toString().slice(2)),
  'Curso avançado de TS'
)

console.log(c1)

c1.name = 'Curso de TypeScript.'

console.log(c1)
console.log(c1.name)

console.log(c1.id)

console.log(c2)