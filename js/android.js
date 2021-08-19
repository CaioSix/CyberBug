setTimeout(function() {
    window.onload = escolha1AND()
}, document.getElementById('inicio').textContent.length * 35);

function escolha1AND() {
    while (true) {
        var escolhaAnd1 = prompt(`Qual caminho voce gostaria de seguir ?
            1 - Vou ficar de boas, talvez me libertem depois disso.
            2 - Vou esperar uma oportunidade, assim que esse cara chegar perto vou pegar ele de refém!
            3 - Primeira brexa, eu saio correndo.
            `)
        if (escolhaAnd1 == 1 || escolhaAnd1 == 2 || escolhaAnd1 == 3)
            break
    }
    if (escolhaAnd1 == 1) {
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('gameover').style.display = 'flex';

        return setTimeout(function() {
            window.onload = window.location.href = 'index.html';
        }, document.getElementById('gameover').textContent.length * 30);
    } else if (escolhaAnd1 == 2) {
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('sequestro').style.display = 'flex';

        return setTimeout(function() {
            window.onload = escolha2AND()
        }, document.getElementById('sequestro').textContent.length * 30);

    } else if (escolhaAnd1 == 3) {
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('gameover').style.display = 'flex';

        return setTimeout(function() {
            window.onload = window.location.href = 'index.html';
        }, document.getElementById('gameover').textContent.length * 30);
    }
}

function escolha2AND() {
    while (true) {
        var escolhaAnd2 = prompt(`Qual caminho voce gostaria de seguir ?
            1 - Vou atacar todos!, ninguem pode me parar!
            2 - Pegar uma espada a lazer! Sou o novo Jedy!
            3 - Sair correndo, não ligo para eles, so quero ir para casa!
        `)

        if (escolhaAnd2 == 1 || escolhaAnd2 == 2 || escolhaAnd2 == 3)
            break
    }
    if (escolhaAnd2 == 1) {
        document.getElementById('sequestro').style.display = 'none'
        document.getElementById('gameover').style.display = 'flex'
        return setTimeout(function() {
            window.onload = window.location.href = 'index.html';
        }, document.getElementById('gameover').textContent.length * 30);


    } else if (escolhaAnd2 == 2) {
        document.getElementById('sequestro').style.display = 'none'
        document.getElementById('pegaEspada').style.display = 'flex'

        return setTimeout(function() {
            window.onload = escolha3AND()
        }, document.getElementById('pegaEspada').textContent.length * 30);



    } else if (escolhaAnd2 == 3) {
        document.getElementById('sequestro').style.display = 'none';
        document.getElementById('gameover').style.display = 'flex';

        return setTimeout(function() {
            window.onload = window.location.href = 'index.html';
        }, document.getElementById('gameover').textContent.length * 30);

    }
}

function escolha3AND() {
    while (true) {
        var escolhaAnd3 = prompt(`Qual caminho voce gostaria de seguir ?
        1 - Vou matar esses caras que estão atirando! 
        2 - Preciso desse controle, sem esse controle poderei aniquilar todos depois!
        3 - Vou atrás dos que me prederam, terei minha vingança!
        `)
        if (escolhaAnd3 == 1 || escolhaAnd3 == 2 || escolhaAnd3 == 3)
            break
    }
    if (escolhaAnd3 == 1) {
        document.getElementById('pegaEspada').style.display = 'none'
        document.getElementById('humanosPegam').style.display = 'flex'
        return setTimeout(function() {
            window.onload = window.location.href = 'index.html';
        }, document.getElementById('humanosPegam').textContent.length * 30);


    } else if (escolhaAnd3 == 2) {
        document.getElementById('pegaEspada').style.display = 'none'
        document.getElementById('fugaperf').style.display = 'flex'
        return setTimeout(function() {
            window.onload = window.location.href = 'index.html';
        }, document.getElementById('fugaperf').textContent.length * 30);

    } else if (escolhaAnd3 == 3) {
        document.getElementById('pegaEspada').style.display = 'none'
        document.getElementById('engenhePegam').style.display = 'flex'
        return setTimeout(function() {
            window.onload = window.location.href = 'index.html';
        }, document.getElementById('engenhePegam').textContent.length * 30);
    }
}