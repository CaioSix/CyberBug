setTimeout(function() {
    window.onload = escolha1MEC()
}, document.getElementById('inicio').textContent.length * 25);

function escolha1MEC() {
    while (true) {
        var escolhaMec1 = prompt(`Qual caminho voce gostaria de seguir ?
            1 - Tomar o café (Gente fina esse cara heim!)
            2 - Não tomar (Ataca minha gastrite, Obrigado)
            3 - Ta tento tiro ali cara e voce quer tomar café? vou vericar isso agora!
            `)
        if (escolhaMec1 == 1 || escolhaMec1 == 2 || escolhaMec1 == 3)
            break
    }
    if (escolhaMec1 == 1) {
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('gameover').style.display = 'flex';

        return setTimeout(function() {
            window.onload = window.location.href = 'index.html';
        }, document.getElementById('gameover').textContent.length * 25);
    } else if (escolhaMec1 == 2) {
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('invasao').style.display = 'flex';

        return setTimeout(function() {
            window.onload = escolha2MEC()
        }, document.getElementById('invasao').textContent.length * 25);

    } else if (escolhaMec1 == 3) {
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('traicao').style.display = 'flex';

        return setTimeout(function() {
            window.onload = window.location.href = 'index.html';
        }, document.getElementById('traicao').textContent.length * 25);
    }
}

function escolha2MEC() {
    while (true) {
        var escolhaMec2 = prompt(`Qual caminho voce gostaria de seguir ?
            1 - Bancar o Heroi!
            2 - Pegar uma arma no Chao e fugir!
            3 - Ir Atrás para proteger seu android/Armadura!
        `)

        if (escolhaMec2 == 1 || escolhaMec2 == 2 || escolhaMec2 == 3)
            break
    }
    if (escolhaMec2 == 1) {
        document.getElementById('invasao').style.display = 'none'
        document.getElementById('traicao').style.display = 'flex'
        return setTimeout(function() {
            window.onload = window.location.href = 'index.html';
        }, document.getElementById('traicao').textContent.length * 25);


    } else if (escolhaMec2 == 2) {
        document.getElementById('invasao').style.display = 'none'
        document.getElementById('fugirArmado').style.display = 'flex'

        return setTimeout(function() {
            window.onload = escolhaMEC3()
        }, document.getElementById('fugirArmado').textContent.length * 25);



    } else if (escolhaMec2 == 3) {
        document.getElementById('invasao').style.display = 'none'
        document.getElementById('meuAndroid').style.display = 'flex'

        return setTimeout(function() {
            window.onload = escolhaMEC4()
        }, document.getElementById('meuAndroid').textContent.length * 25);

    }
}

function escolhaMEC3() {
    while (true) {
        var escolhaMec3 = prompt(`Qual caminho voce gostaria de seguir ?
        1 - Vou matar geral Beach! (< breaking bad, so eu entendi a referencia ? )
        2 - Eu quero um helicóptero, ganho para isso não senhor!
        3 - Minha armadura ta perto, vou ali pegar ela!
        `)
        if (escolhaMec3 == 1 || escolhaMec3 == 2 || escolhaMec3 == 3)
            break
    }
    if (escolhaMec3 == 1) {
        document.getElementById('fugirArmado').style.display = 'none'
        document.getElementById('mortoTiroteio').style.display = 'flex'
        return setTimeout(function() {
            window.onload = window.location.href = 'index.html';
        }, document.getElementById('mortoTiroteio').textContent.length * 25);


    } else if (escolhaMec3 == 2) {
        document.getElementById('fugirArmado').style.display = 'none'
        document.getElementById('fugaHelic').style.display = 'flex'
        return setTimeout(function() {
            window.onload = window.location.href = 'index.html';
        }, document.getElementById('fugaHelic').textContent.length * 25);

    } else if (escolhaMec3 == 3) {
        document.getElementById('fugirArmado').style.display = 'none'
        document.getElementById('pegaArmadura').style.display = 'flex'
        return setTimeout(function() {
            window.onload = window.location.href = 'index.html';
        }, document.getElementById('pegaArmadura').textContent.length * 25);
    }
}


function escolhaMEC4() {
    while (true) {
        var escolhaMec4 = prompt(`Qual caminho voce gostaria de seguir ?
        1 - Os caras mataram o usuario! Essa é minha chance Vou tomar ela para mim !
        2 - Eu não preciso dela para dar dabo deles!
        `)
        if (escolhaMec4 == 1 || escolhaMec4 == 2)
            break
    }
    if (escolhaMec4 == 1) {
        document.getElementById('meuAndroid').style.display = 'none'
        document.getElementById('pegaArmadura').style.display = 'flex'
        return setTimeout(function() {
            window.onload = window.location.href = 'index.html';
        }, document.getElementById('pegaArmadura').textContent.length * 25);
    } else if (escolhaMec4 == 2) {
        document.getElementById('meuAndroid').style.display = 'none'
        document.getElementById('mortoTiroteio').style.display = 'flex'
        return setTimeout(function() {
            window.onload = window.location.href = 'index.html';
        }, document.getElementById('mortoTiroteio').textContent.length * 25);
    }

}