let frm = document.querySelector("form");
let resp = document.querySelector("h3");

frm.addEventListener ("submit", (e) => {
    e.preventDefault();
    let valorPor15Min = frm.inValorPor15Min.value;
    let tempoUtilizado = frm.inTempoDeUso.value;
    const ciclosDe15MinGasto = Math.ceil(tempoUtilizado / 15);
    const valorGasto = (ciclosDe15MinGasto * valorPor15Min).toFixed(2);
    resp.innerText = `Valor a Pagar R$: ${valorGasto}`;
});