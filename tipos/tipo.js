"use strict";
// string
let nome = "João";
//console.log(nome)
// numbers
let idade = 31;
//console.log(idade)
// boolean
let possuiHobbies = false;
//console.log(possuiHobbies)
// tipos explícitos
let minhaIdade;
minhaIdade = 31;
//console.log(typeof minhaIdade)
// minhaIdade = '31'
// array
let hobbies = ['Treinar', 'Tocar', 'Correr'];
// console.log(hobbies)
// console.log(typeof hobbies)
// tupla - Um array com uma quantidade pré-definida de tipos. 
// Ex: Um array de três posições, com duas strings e um number
let endereco = ['Av. Principal', 'RJ', 123];
// enum - Estrutura onde são definidos valores pré-definidos
// Ex: Segunda, terça, quarta, ... ou masculino, feminino
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["verde"] = 1] = "verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Azul;
console.log(minhaCor);
// funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// A tipagem que vem após os () é referente a tipagem do retorno
// Ex: a função recebe dois parâmetros do tipo number e tem um retorno do tipo boolean
const teste = function (a, b) {
    return false;
};
// tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(3, 4));
// objetos
let usuario = {
    nome: "João",
    idade: 31
};
// Union
let nota = 10;
// Never - Não vai ter um valor final. Ex: vai retornar um erro
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto() {
        if (this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Precisa ter um preço!');
        }
    }
};
// produto.validarProduto()
