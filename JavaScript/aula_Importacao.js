
/*
    Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/

const { gets, print } = require('./aulaImportacao2');

const listaa = [];

for (let i = 0; i < 6; i++) {
    const lista = gets();
    listaa.push(lista)  
}

let maiorValor = 0;

for (let i = 0; i < listaa.length; i++) {
    const lista = listaa[i];
    if (lista % 2 === 0) {
        print(lista);
    }
}
