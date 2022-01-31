let pratoSelecionado = null;
let bebidaSelecionada = null;
let sobremesaSelecionada = null;
let cont = 0;

function selecionarPrato(classeOpcoes) {
    const selecionado = document.querySelector(".menu-prato .selecionado");
    if (selecionado != null) {
        selecionado.classList.remove("selecionado");
    }
    const elemento = document.querySelector(classeOpcoes);
    elemento.classList.add("selecionado");

    pratoSelecionado = classeOpcoes;
    cont = cont + 1;
}

function selecionarBebida(classeOpcoes) {
    const selecionado = document.querySelector(".menu-bebida .selecionado");
    if (selecionado != null) {
        selecionado.classList.remove("selecionado");
    }
    const elemento = document.querySelector(classeOpcoes);
    elemento.classList.add("selecionado");

    bebidaSelecionada = classeOpcoes;
    cont = cont + 1;
}

function selecionarSobremesa(classeOpcoes) {
    const selecionado = document.querySelector(".menu-sobremesa .selecionado");
    if (selecionado != null) {
        selecionado.classList.remove("selecionado");
    }
    const elemento = document.querySelector(classeOpcoes);
    elemento.classList.add("selecionado");

    sobremesaSelecionada = classeOpcoes;
    cont = cont + 1;

    if (pratoSelecionado !== null && bebidaSelecionada !== null && sobremesaSelecionada !== null) {
        let pedidoFinal = document.querySelector(".pedido-final");
        let texto = document.querySelector(".texto-bottom")
        pedidoFinal.classList.add("pedidosSelecionados");
        texto.innerHTML = "Fechar pedido";
    }
    
}




























