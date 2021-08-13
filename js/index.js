function start() {
    var nome = prompt("Qual seu nome companheiro ?")
    alert(`Muito bem... ${nome} vamos começar...`)

    while (true) {
        var caminho = prompt(`Qual caminho voce gostaria de seguir ${nome} ?
        1 - Mercenario
        2 - Mecanico
        3 - Android
        `)
        if (caminho == 1 || caminho == 2 || caminho == 3)
            break
    }
    if (caminho == 1) {
        return window.location.href = "mercenario.html";

    } else if (caminho == 2) {

        return window.location.href = "mecanico.html"
    } else if (caminho == 3) {

        return window.location.href = "android.html"
    }
}