interface IPessoa {
  nome: string
  idade?: number
  [prop: string]: any
  saudar: (sobrenome: string) => void
}

const pessoa: IPessoa = {
  nome: 'João',
  idade: 31,
  saudar(sobrenome: string) {
    console.log('Olá. meu nome é ' + this.nome + ' ' + sobrenome)
  }
}

function saudarComOla(pessoa: IPessoa) {
  console.log(`Olá, ${pessoa.nome}`)
}

function mudarNome(pessoa: IPessoa) {
  pessoa.nome = 'Joana'
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({ nome: 'Jonas', idade: 24, xyz: true })


// Usando classes
class Cliente implements IPessoa {
  nome: string = ''
  saudar(sobrenome: string) {
    console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
  }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')