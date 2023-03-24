type ContaBancaria = {
  saldo: number,
  depositar: (valor: number) => void
}

type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: string[]
}

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor) {
    this.saldo += valor
  }
}

let correntista: Correntista = {
  nome: 'Fulano de Tal',
  contaBancaria: contaBancaria,
  contatos: ['23445345234', '2342343544']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)