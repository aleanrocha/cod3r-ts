class Car {
  private currentSpeed: number = 0
  protected readonly MAX_SPEED: number = 700
  constructor(public name: string) {
    name = this.name
  }
  get speed() {
    return this.currentSpeed
  }
  changeSpeed(speed: number) {
    const newSpeed = this.currentSpeed + speed
    if (this.currentSpeed === 0) {
      this.currentSpeed = newSpeed
    }
  }
}


const ferrari: Car = new Car('Ferrari')

console.log(ferrari)

console.log(ferrari.name)
//console.log(ferrari.currentSpeed) // propiedade privada da classe Car e não pode ser acessada
//console.log(ferrari.MAX_SPEED) // propiedade protejida, só pode ser acessada por uma subclasse

ferrari.changeSpeed(120)

console.log(ferrari)
console.log(ferrari.speed)



