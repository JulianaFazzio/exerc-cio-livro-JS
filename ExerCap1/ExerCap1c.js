const prompt = require('prompt-sync')();

let precoProduto = parseFloat(prompt('Informe o preço do produto: '));
let desconto = precoProduto * 0.10;
let calculoAVista = precoProduto - desconto;
let valorParcelado = precoProduto / 3;

console.log(`Preço R$ ${precoProduto.toFixed(2)}`); // to fixed deve ser aplicado só na hora de mostrar o número
console.log(`À vista R$ ${calculoAVista.toFixed(2)}`);
console.log(`Ou 3x de R$ ${valorParcelado.toFixed(2)}`);



