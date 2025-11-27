let frm = document.querySelector("form");
let resp1 = document.querySelector("#resp1");
let resp2 = document.querySelector("#resp2");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    let produto = frm.inProduto.value;
    let preco = Number(frm.inPreco.value);
    let precoComDescontoUnidade = (preco / 2);
    let precoNoCombo = (preco * 2) + precoComDescontoUnidade;
    resp1.innerText = `${produto} - Promoção: Leve 3 por R$${precoNoCombo.toFixed(2)}`;
    resp2.innerText = `O 3° produto custa apenas ${precoComDescontoUnidade.toFixed(2)}` 
});