class Course {
  name: string | undefined
}

const c1 = new Course()

console.log(c1)

c1.name = 'Curso de TypeScript.'

console.log(c1)
console.log(c1.name)