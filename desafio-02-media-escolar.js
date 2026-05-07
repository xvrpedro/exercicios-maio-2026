// Desafio 02 — Média Escolar
// Solicite ao usuário três notas usando prompt. Calcule a média aritmética e exiba o resultado seguindo as regras:
// Se a média for maior ou igual a 7 AND todas as notas forem maiores que 4: exiba "Aprovado com média [X]"
// Se a média for maior ou igual a 5 AND alguma nota for menor que 4: exiba "Recuperação — média [X] mas tem nota baixa"
// Se a média for menor que 5: exiba "Reprovado com média [X]"

    let nota1 = Number(prompt('Insira a primeira nota.'));
    let nota2 = Number(prompt('Insira a segunda nota.'));
    let nota3 = Number(prompt('Insira a terceira nota.'));
    let media = (nota1 + nota2 + nota3) / 3;
    // temNotaBaixa
    let tNB = nota1 < 4 || nota2 < 4 || nota3 < 4

    if (media >= 7 && !tNB) {
        document.write('Aprovado com média '  + media.toFixed(1) + '.');
    }
    
    else if (media >= 5 && tNB) {
        document.write('Recuperação — média ' + media.toFixed(1) + ' mas tem nota baixa.');
    }

    else {
        document.write('Reprovado com média ' + media.toFixed(1));
    }
    
