// string
let nome: string = "João"
//console.log(nome)

// numbers
let idade: number = 31
//console.log(idade)

// boolean
let possuiHobbies: boolean = false
//console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number
minhaIdade = 31
//console.log(typeof minhaIdade)
// minhaIdade = '31'

// array
let hobbies: string[] = ['Treinar', 'Tocar', 'Correr']
// console.log(hobbies)
// console.log(typeof hobbies)

// tupla - Um array com uma quantidade pré-definida de tipos. 
// Ex: Um array de três posições, com duas strings e um number
let endereco: [string, string, number] = ['Av. Principal', 'RJ', 123]

// enum - Estrutura onde são definidos valores pré-definidos
// Ex: Segunda, terça, quarta, ... ou masculino, feminino
enum Cor {
  Cinza, 
  verde, 
  Azul
}

let minhaCor: Cor = Cor.Azul
console.log(minhaCor)

// funções
function retornaMeuNome(): string {
  return nome 
}

console.log(retornaMeuNome())

function digaOi(): void {
  console.log('Oi')
}

digaOi()

function multiplicar(numA: number, numB: number): number {
  return numA * numB
}

// A tipagem que vem após os () é referente a tipagem do retorno
// Ex: a função recebe dois parâmetros do tipo number e tem um retorno do tipo boolean
const teste = function (a: number, b: number): boolean {
  return false
}

// tipo função
let calculo: (numA: number, numB: number) => number
calculo = multiplicar
console.log(calculo(3, 4))

// objetos
let usuario: { nome: string, idade: number } = {
  nome: "João",
  idade: 31
}

// Union
let nota: string | number = 10

// Never - Não vai ter um valor final. Ex: vai retornar um erro
function falha(msg: string): never {
  throw new Error(msg)
}

const produto = {
  nome: 'Sabão',
  preco: -1,
  validarProduto() {
    if (this.nome || this.nome.trim().length == 0) {
      falha('Precisa ter um nome')
    }

    if (this.preco <= 0) {
      falha('Precisa ter um preço!')
    }
  }
}

// produto.validarProduto()

