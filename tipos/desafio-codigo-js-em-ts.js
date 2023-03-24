"use strict";
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Fulano de Tal',
    contaBancaria: contaBancaria,
    contatos: ['23445345234', '2342343544']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
