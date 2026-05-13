function verificar () {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('ano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique sua resposta.');
    }
    else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebem.png')
            } else if (idade < 18) {
                // Adolescente
                img.setAttribute('src', 'adm.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'adultm.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosom.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebef.png')
            } else if (idade < 18) {
                // Adolescente
                img.setAttribute('src', 'adf.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'adultf.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}