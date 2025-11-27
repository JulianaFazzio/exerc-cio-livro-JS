const prompt = require('prompt-sync')();

let notas = new Array();
let somaDasNotas = 0;
for (let i = 0; i < 2; i ++){
    let notaAtual = parseFloat(prompt(`Digite a ${i +1} nota: `));
    notas[i] = notaAtual;
    somaDasNotas += notaAtual;

}
let media = (somaDasNotas/2).toFixed(2);
console.log(`As notas digitadas foram ${notas[0]} e ${notas[1]}`);
console.log(`A média das notas é ${media}`);
