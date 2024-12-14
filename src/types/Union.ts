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

