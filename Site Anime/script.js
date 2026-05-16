function abrirHeader() {
    document.querySelector('header').classList.add('aberto');
    document.getElementById('btn').style.display = 'none';
    let section = document.querySelector('section');
    let footer = document.querySelector('footer');
    section.style.display = 'block';
    footer.style.display = 'block';
    section.classList.add('visivel');
    footer.classList.add('visivel');
}