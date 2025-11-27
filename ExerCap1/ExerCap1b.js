const prompt = require('prompt-sync')();

let valorConta = parseFloat(prompt(`Informe o valor total da conta:`)).toFixed(2);
let clientes = parseInt(prompt(`Informe o número de clientes:`));
let calculo = parseFloat(valorConta / clientes).toFixed(2);
console.log(`Valor por cliente R$ ${calculo}`);



