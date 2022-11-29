/*
    2 - Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC + peso / (altura * altura)).
    Instacie uma pessoa chamada José que tenha 70kg e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc( ) {
        return this.peso / (this.altura * this.altura);
    }

    categoriaImc () {
        const imc = this.imc();
        if (imc < 18.5) {
            return 'Abaixo do peso!';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal!';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso!';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso!';
        } else {
            return 'Obsesidade Grave!';
        }
    }
}

const paulo = new Pessoa('José', 70, 1.75);
const vitor = new Pessoa('vitor', 80, 1.80);
const everton = new Pessoa('Everton', 100, 1.87)

console.log(paulo.categoriaImc());
console.log(everton.categoriaImc());
