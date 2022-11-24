/// dois == compara tambem com outro tipo.
/// três === compara exatamente com o mesmo tipo.
/// ! antes da string ou valor é igual ao "not"  if ! = if not


const numero = 0;

const numeroPar = (numero % 2) === 0;

if (numero === 0) {
    console.log('O número é inválido');
} else if (numeroPar) {
    console.log('Sim');
} else {
    console.log('Não');
}
