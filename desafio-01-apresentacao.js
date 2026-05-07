// Desafio 01 — Apresentação
// Solicite ao usuário seu nome, idade e cidade usando prompt. Em seguida, exiba no console uma mensagem seguindo as regras:
// Se a idade for menor que 18: exiba "Olá, sou [nome], tenho [idade] anos, moro em [cidade] e sou menor de idade"
// Se a idade for 18 ou mais: exiba "Olá, sou [nome], tenho [idade] anos, moro em [cidade] e sou maior de idade"

    let nome = prompt('Insira o seu nome.');
    let idade = Number(prompt('Insira a sua idade.'));
    let cidade = prompt('Insira a sua cidade.');

    if(idade >= 18) {
    console.log('Olá, ' + nome + '! Você possui ' + idade + ' anos, mora em ' + cidade + ' e é maior de idade.')
    }

    else {
    console.log('Olá, ' + nome + '! Você possui ' + idade + ' anos, mora em ' + cidade + ' e é menor de idade.')
    }
