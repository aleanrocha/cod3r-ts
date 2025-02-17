class Generate {
  static Id(): string {
    return Math.random().toString().slice(2)
  }
}

// classes abstratas só podem ser herdadas e não criadas.

abstract class Phone {
  call(): void {
    console.log('Ligando....')
  }

  abstract AccessMovelNetwork(): void
}

class RedmiNote15 extends Phone {
  AccessMovelNetwork(): void {
    console.log('Rede 4.5G')
  }
}

class GalaxyJ4Core extends Phone {
  AccessMovelNetwork(): void {
    console.log('Rede 3G')
  }

  call(): void {
    console.log('J4CORE - Ligando....')
  }
  
}

// let p1 = new Phone()
// p1.call()

let p1: Phone

p1 = new RedmiNote15
p1.call()

p1 = new GalaxyJ4Core()
p1.call()

export {}
