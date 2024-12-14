// UNION TYPES - Permite a união de vários tipos

let grade: string | number = 10

console.log(grade)

grade = 'A+'

console.log(grade)

type GradeOrConcept = number | 'A' | 'A+' | 'B' | 'B+' | 'C' | 'C+' | 'D' | 'D+' | 'F'

let n: GradeOrConcept = 10
n = 1111
n = 'A'
// n = 'Z'
console.log(n)


// CHECAGEM DE TIPOS

const printGrade = (grade: GradeOrConcept): void => {
  if (typeof grade === 'number') {
    console.log('Sua nota é: ', grade)
  } else {
    console.log('Seu conceito de nota é:', grade)
  }
}

printGrade(n)
printGrade(9)

