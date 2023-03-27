// Arrow function
const somar = (n1: number, n2: number): number => {
  return n1 + n2
}

// Parâmetros padrão
function contagemRegressiva(inicio: number = 3): void {
  console.log(inicio)
  while(inicio > 0) {
    inicio--
  }
  console.log('Fim')
}

// Spread
const numbers = [1, 23, 59, -4]
console.log(Math.max(...numbers))

const turmaA: string[] = ['Pedro', 'Jose', 'Maria']
const turmaB: string[] = ['João', 'Ricardo', 'Manoel', ...turmaA]
console.log(turmaB)

// Rest 
// Caso seja necessário passar mais parâmetros além do args, os mesmos deverão ser passados
// depois do operador rest
const retornaArray = (...args: number[]): number[] => {
  return args
}

const numeros = retornaArray(1, 2, 3, 4, 5)

// Rest e Spread (Tupla)
const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`)
} 

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]) {
  console.log(`2) ${params[0]}, ${params[1]} ${params[2]}`)
}

// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020]
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]

const [motor, ano] = caracteristicas

// Destructuring (objeto)
const item = {
  modelo: "SSD 480GB",
  preco: 300
}

const { modelo, preco } = item