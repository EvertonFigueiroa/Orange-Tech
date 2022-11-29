/*
   1 - Crie uma classe para representar carros.
   Os carros possuem uma marca, uma cor e um gasto médio de combustivel por quilómetro rodado.
   Crie um método que dado a quantidade de quilómetros e o preço do combustivel nos dê o valor gasto em reais para realizar este percurso.
 */

class Carro {
    marca;
    cor;
    quilometrosPorLitros;

    constructor(marca, cor, quilometrosPorLitros) {
        this.marca = marca;
        this.cor = cor;
        this.quilometrosPorLitros = quilometrosPorLitros;
    }

    valorGasto(distancia, preco) {
        return (distancia * this.quilometrosPorLitros) * preco;
    }
}

const uno = new Carro('Fiat', 'Preto', 1/12);
const palio = new Carro('Fiat', 'Prata', 1/10);

console.log(uno.valorGasto(70, 5));
console.log(palio.valorGasto(80, 5));

