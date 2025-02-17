/*
Desafio 5
Venda comissionada
A comissão é 5% da venda
A menor comissão será de 400

40000
80000
100000
*/

let msg;
const val = 100000;

msg = val <= 400 ? '400' : `${val * 5 / 100}`;
console.log(`Para um carro que vale ${val}, a comissão de venda será de ${msg};`);




