// Exercçicio 1
const dobro = (valor: number): number => {
  return valor * 2
}
console.log(dobro(10))

// Exercício 2
const dizerOla = (nome: string = 'Pessoa'): void => {
  console.log(`Olá, ${nome}`)
}

dizerOla()
dizerOla('Léo')

// Exercicio 3
const enums = [-3, 33, 38, 5]
const menorValor = Math.min(...enums)

// Exercício 4
const array = [55, 20]
const newArray = [array, ...enums]

// Exercício 5
const notas = [8.5, 6.3, 9.4]
// let nota1 = notas[0]
// let nota2 = notas[1]
const [nota1, nota2, nota3] = notas

// Exercício 6
const cientista = { primeiroNome: 'Leonardo', experiencia: 12 }
const { primeiroNome, experiencia } = cientista