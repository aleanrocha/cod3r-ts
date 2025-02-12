class Generate {
  static Id(): string {
    return Math.random().toString().slice(2)
  }
}

class Car {

  private _speed: number = 0

  constructor(readonly MAX_SPEED: number = 200) {}

  public accelerate(speed: number = 5) {
    this.changeSpeed(speed)
  } 

  public brake(speed: number = -5) {
     this.changeSpeed(speed)
  }

  protected changeSpeed(speed: number) {
    const newSpeed = this._speed + speed
    if (newSpeed >= 0 && newSpeed <= this.MAX_SPEED) {
      this._speed = newSpeed
    } else if (newSpeed >= this.MAX_SPEED) {
      this._speed = this.MAX_SPEED
    } else {
      this._speed = 0
    }
  }
  
  get speed() {
    return this._speed
  }
}

class Avelar extends Car {
  constructor() {
    super(380)
  }
}

class Ferrari extends Car {
  constructor() {
    super(650)
  }
}

let c1: Avelar =  new Avelar()

c1.accelerate()
c1.accelerate()

// c1.brake(199)

console.log('Avelar', c1.speed)

c1 = new Ferrari()

c1.accelerate(200)
c1.brake(-30)

console.log('Ferrari', c1.speed)

export {}
