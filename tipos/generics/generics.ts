function echo(objeto: any) {
  return objeto
}

console.log(echo('João').length)
console.log(echo(27).length)
console.log(echo({ nome: "João", idade: 27 }))

// Usando Generics
function echoMelhorado<T>(objeto: T): T {
  return objeto
}

console.log(echoMelhorado('João').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({ nome: "João", idade: 27 }))

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9, 9.3, 7.7] // Pode ser usado um UNION type no valor do generic
//avaliacoes.push('5.5')

// Array
function imprimir<T>(args: Array<T>) {
  args.forEach(element => console.log(element))
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3]) // tipagem explícita
imprimir<string>(['1', '2', '3']) // tipagem explícita
imprimir<{ nome: string, idade: number }>([
  { nome: 'Fulano', idade: 23 },
  { nome: 'Cicliano', idade: 31 }
]) // tipagem explícita de objeto

type Aluno = {
  nome: string
  idade: number
}

imprimir<Aluno>([
  { nome: 'Fulano', idade: 23 },
  { nome: 'Cicliano', idade: 31 }
]) 

// Tipo função com generics
type Echo = <T>(data: T) => T

const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'))
