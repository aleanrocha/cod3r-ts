class Course {
  private _id: number | undefined
  public name: string | undefined

  get id() {
    return this._id
  }

  set id(id: number | undefined) {
    this._id = id
  }
}

const c1 = new Course()

console.log(c1)

c1.name = 'Curso de TypeScript.'
c1.id = 123

console.log(c1)
console.log(c1.name)

console.log(c1.id)

export {}