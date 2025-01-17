class Course {
  private _id: number | undefined
  public name: string | undefined

  constructor(id: number) {
    this._id = id
  }

  get id() {
    return this._id
  }
}

const c1 = new Course(Number((Math.random()).toString().slice(2)))

console.log(c1)

c1.name = 'Curso de TypeScript.'

console.log(c1)
console.log(c1.name)

console.log(c1.id)