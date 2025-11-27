const prompt = require('prompt-sync')(); // importa o prompt para ser usado no node.js

let valor = Number(prompt(`Informe o número:`)); //o prompr recebe dados em string, o number () na frente converte os dados
let vizinhoPosterior = valor + 1;
let vizinhoAnterior = valor - 1;
console.log(`Numero anterior ao digitado ${vizinhoAnterior}`);
console.log(`Numero posterior ao digitado ${vizinhoPosterior}`);

