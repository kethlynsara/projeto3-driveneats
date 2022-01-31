function selecionarPrato(classeOpcoes) {
    const selecionado = document.querySelector(".menu-prato .selecionado");
    if (selecionado != null) {
        selecionado.classList.remove("selecionado");
    }
    const elemento = document.querySelector(classeOpcoes);
    elemento.classList.add("selecionado");
}

function selecionarBebida(classeOpcoes) {
    const selecionado = document.querySelector(".menu-bebida .selecionado");
    if (selecionado != null) {
        selecionado.classList.remove("selecionado");
    }
    const elemento = document.querySelector(classeOpcoes);
    elemento.classList.add("selecionado");
}

function selecionarSobremesa(classeOpcoes) {
    const selecionado = document.querySelector(".menu-sobremesa .selecionado");
    if (selecionado != null) {
        selecionado.classList.remove("selecionado");
    }
    const elemento = document.querySelector(classeOpcoes);
    elemento.classList.add("selecionado");
}