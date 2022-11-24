/// Faça um programa para calcular o valor de uma viagem.

/// Você terá 5 variáveis. Sendo elas:
/// 1 - Preço do etanol;
/// 2 - Preço da gasolina;
/// 3 - O tipo de combustível que está no seu carro;
/// 4 - Gasto médio de combustível do carro por KM;
/// 5 - Distância em KM da viagem;

/// Imprima no console o valor que será gasto para realizar esta viagem.

const precoEtanol = 2.30;
const precoGasolina = 4.91;
const tipoCombusCarro = ('Etanol');
const KmPorLitros = 10;
const distanciaViagemKM = 120;

const litrosUtilizados = distanciaViagemKM / KmPorLitros;

if (tipoCombusCarro === 'Etanol') {
   const valorGasto = litrosUtilizados * precoEtanol;
   console.log(valorGasto.toFixed(2));
} else if (tipoCombusCarro === 'Gasolina') {
    const valorGasto = litrosUtilizados * precoGasolina;
    console.log(valorGasto.toFixed(2));
} else {
    console.log('Valor inválido')
}