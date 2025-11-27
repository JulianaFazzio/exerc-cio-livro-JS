let frm = document.querySelector("form");
let resp1 = document.querySelector("h2");
let resp2 = document.querySelector("h3");

frm.addEventListener ("submit", (e) => { // e é abreviação padrão para evento
    e.preventDefault(); // previne o padrão, que é o envio de dados ao clicar no botão submit, impede isso, deixa que o código resolve
    let precoUnidade = Number(frm.inPreco.value);
    let medicamento = String(frm.inMedicamento.value);
    let precoFinal = Math.floor(precoUnidade * 2);
    resp1.innerText = `Promoção de ${medicamento}`;
    resp2.innerText = `Leve 2 por apenas R$: ${precoFinal.toFixed(2)}`;
});