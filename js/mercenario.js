// function teste() {
//     document.write("esta dando certo ?")
//         // document.getElementsByClassName('campo2');
// document.getElementById('campo2').style.display = 'block';

// }

// function teste()
setTimeout(function() {
    window.onload = escolha1()
}, 500);


function escolha1() {

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

        return document.getElementById('gameover').style.display = 'block';

    } else if (escolhaMerce1 == 2) {
        document.getElementById('inicio').style.display = 'none';

        return document.getElementById('gameover').style.display = 'block';

    } else if (escolhaMerce1 == 3) {
        document.getElementById('inicio').style.display = 'none';
        return document.getElementById('telhado').style.display = 'block';
    }
}