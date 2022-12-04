/// let variavel = 10; /// let É possível alterar o valor da variavel

/// const pi = 3.14; /// const não é possível alterar o valor

const precoCombustivel = 6.8;
const KmPorLitros = 11;
const viagemKM = 300;

const valor = viagemKM/KmPorLitros;
const total = valor * precoCombustivel;


console.log(total.toFixed(2) + ' Reais');

