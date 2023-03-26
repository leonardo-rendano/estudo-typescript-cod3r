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
const retornaArray = (...args: number[]): number[] => {
  return args
}

const numeros = retornaArray(1, 2, 3, 4, 5)

