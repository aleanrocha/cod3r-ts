class Validate {
  static greaterThanZero(n: number) {
    if (n <= 0) throw new Error('Número inválido, ele é menor ou igual a zero.')
  }
}

Validate.greaterThanZero(0)