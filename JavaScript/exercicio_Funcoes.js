function nivelIdade(idade) {
    if (idade >= 18) {
        return 'Você é maior de idade';
    } else {
        return 'Você não é maior de idade';
    }
}

const resultadoIdade = nivelIdade(17);
console.log(resultadoIdade);

///

function aplicarDesconto(valorProduto, desconto) {
    return (valorProduto - ((valorProduto * desconto) / 100));
}


function compraProduto(valorProduto, formaDePagamento) {
    if (formaDePagamento === 1) {
        console.log('Você vai pagar um valor de ' + aplicarDesconto(valorProduto, 10) + ' reais com desconto de 10%');
    } else if (formaDePagamento === 2) {
        console.log('Você vai pagar um valor de ' + aplicarDesconto(valorProduto, 15) + ' reais com desconto de 15%');
    } else if (formaDePagamento === 3) {
        console.log('Você vai pagar um valor de ' + valorProduto + ' reais sem juros, parcelado em duas vezes');
    } else if (formaDePagamento === 4) {
        console.log('Você vai pagar um valor de ' + aplicarDesconto(valorProduto, -10) + ' reais com acrescimo de 10%');
    } else {
        console.log('Forma de pagamento inválida!')
    }
}

compraProduto(100, 1);