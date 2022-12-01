// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprimir os números pares

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 20, 23, 24, 37, 32];

for (let i = 0; i < lista.length; i++) {
    const numb = lista[i];
    if (numb % 2 === 0) {
        console.log(numb);
    }  
}