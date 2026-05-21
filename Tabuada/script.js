function gerar () {
    let txtnumero = document.querySelector('#txtnumero')
    let resTab = document.querySelector('#resSelect')
    let botao = document.querySelector('#botao')
    
    if (txtnumero.value.length == 0) {
        alert('[ERRO] Insira um número.')
    } else {
        resTab.innerHTML = ''
        let n = Number(txtnumero.value);
        // multiplicador
        let m = 0;

        while (m <= 100) {
            let item = document.createElement('option');
            item.text = `${n} ⨯ ${m} = ${n*m}`
            item.value = `tab${m}`
            resTab.appendChild(item)
            m++
        }
        
        resTab.size = 10;
    }
}