function contar () {
    let txtni = document.getElementById('txtni');
    let txtnf = document.getElementById('txtnf');
    let txtnp = document.getElementById('txtnp');
    let res = document.querySelector('div#res');

    if (txtni.value.length == 0 || txtnf.value.length == 0 || txtnp.value.length == 0) {
        alert('[ERRO] Preencha todas as colunas.')
    }
    else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(txtni.value);
        let f = Number(txtnf.value);
        let p = Number(txtnp.value);

        if (p <= 0) {
            alert('[ERRO] Preencha "Passo" com um valor maior que 0.')
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} → `
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} → `
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}