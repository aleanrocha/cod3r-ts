abstract class Animal {
  abstract sound(): string
}

class Cat extends Animal {
  sound(): string {
    return 'miau'
  }
}

class Dog extends Animal {
  sound(): string {
    return 'auau'
  }
}

let a1: Animal = new Cat() 
console.log(a1.sound())

a1 = new Dog()
console.log(a1.sound())


