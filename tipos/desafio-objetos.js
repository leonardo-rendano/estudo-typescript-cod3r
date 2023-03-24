"use strict";
let funcionario = {
    supervisores: [
        'João',
        'Pedro',
        'Manoel'
    ],
    baterPonto(hora) {
        if (hora <= 8) {
            return 'Ponto normal';
        }
        return 'Fora do horário';
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(12));
