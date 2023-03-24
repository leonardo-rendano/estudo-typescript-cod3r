type Funcionario = {
  supervisores: string[],
  baterPonto: (hora: number) => string
}

let funcionario: Funcionario = {
  supervisores: [
    'João',
    'Pedro',
    'Manoel'
  ],
  baterPonto(hora: number): string {
    if (hora <= 8) {
      return 'Ponto normal'
    }
  
    return 'Fora do horário'
  }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(12))

