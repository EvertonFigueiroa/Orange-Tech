/* 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%; 
*/

const produto = 100;
const formaDePagamento = 1;

if (formaDePagamento === 1) {
    console.log('Você vai pagar um valor de ' + (produto - (produto * 0.1)) + ' reais com desconto de 10%');
} else if (formaDePagamento === 2) {
    console.log('Você vai pagar um valor de ' + (produto - (produto * 0.15)) + ' reais com desconto de 15%');
} else if (formaDePagamento === 3) {
    console.log('Você vai pagar um valor de ' + produto + ' reais sem juros, parcelado em duas vezes');
} else if (formaDePagamento === 4) {
    console.log('Você vai pagar um valor de ' + (produto + (produto * 0.1)) + ' reais com acrescimo de 10%');
} else {
    console.log('Forma de pagamento inválida!')
}