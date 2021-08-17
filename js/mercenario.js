// function teste() {
//     document.write("esta dando certo ?")
//         // document.getElementsByClassName('campo2');
// document.getElementById('campo2').style.display = 'block';

// }

// function teste()
// setTimeout(function() {
window.onload = escolha1()
}, document.getElementById('inicio').textContent.length * 25);


// function escolha1() {
while (true) {
    var escolhaMerce1 = prompt(`Qual caminho voce gostaria de seguir ?
            1 - Frente
            2 - Tras
            3 - Telhado
            `)
    if (escolhaMerce1 == 1 || escolhaMerce1 == 2 || escolhaMerce1 == 3)
        break
}
if (escolhaMerce1 == 1) {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('gameover').style.display = 'flex';

    return setTimeout(function() {
        window.onload = window.location.href = 'index.html'
    }, document.getElementById('gameover').textContent.length * 25);



} else if (escolhaMerce1 == 2) {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('gameover').style.display = 'flex';

    return setTimeout(function() {
        window.onload = window.location.href = 'index.html'
    }, document.getElementById('gameover').textContent.length * 25);

} else if (escolhaMerce1 == 3) {

    document.getElementById('inicio').style.display = 'none';
    document.getElementById('telhado').style.display = 'flex'

    return setTimeout(function() {
        window.onload = escolhamercenario2()
    }, document.getElementById('telhado').textContent.length * 25);

}
}


function escolhamercenario2() {

    while (true) {
        var escolha2 = prompt(`Qual caminho voce gostaria de seguir ?
        1 - Nao Ajuda
        2 - Ajuda
        3 - Corre
        `)
        if (escolha2 == 1 || escolha2 == 2 || escolha2 == 3)
            break

    }
    if (escolha2 == 1) {
        document.getElementById('telhado').style.display = 'none';
        document.getElementById('gameover').style.display = 'flex';

        return setTimeout(function() {
            window.onload = window.location.href = 'index.html'
        }, document.getElementById('gameover').textContent.length * 25);

    } else if (escolha2 == 2) {
        document.getElementById('telhado').style.display = 'none'
        document.getElementById('laboratorio').style.display = "flex"


        return setTimeout(function() {
            window.onload = escolhamercenario3()
        }, document.getElementById('laboratorio').textContent.length * 25);


    } else if (escolha2 == 3) {
        document.getElementById('telhado').style.display = 'none';
        document.getElementById('gameover').style.display = 'flex';

        return setTimeout(function() {
            window.onload = window.location.href = 'index.html'
        }, document.getElementById('gameover').textContent.length * 25);

    }

}


function escolhamercenario3() {

    while (true) {
        var escolha3 = prompt(`Qual caminho vc quer seguir?
        1 - A armadura é minha eu ralei eu mereço!
        2 - Vou divir com meu parça, eu ajudei ele justo a gente sair juntos!`)
        if (escolha3 == 1 || escolha3 == 2)
            break
    }
    if (escolha3 == 1) {
        document.getElementById('laboratorio').style.display = "none";
        document.getElementById('fimbom').style.display = "flex";
        return setTimeout(function() {
            window.onload = window.location.href = 'index.html'
        }, document.getElementById('fimbom').textContent.length * 25);


    } else if (escolha3 == 2) {
        document.getElementById('laboratorio').style.display = "none";
        document.getElementById('fimruim').style.display = "flex";
        return setTimeout(function() {
            window.onload = window.location.href = 'index.html'
        }, document.getElementById('fimruim').textContent.length * 25);

    }





}