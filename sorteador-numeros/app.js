function exibirTextoNaTela(id,texto) {
    let campo = document.getElementById(id)
    campo.innerHTML = texto
}

function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let bug = de + ate

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de,ate);
        } if (bug < quantidade) {
            alert ("Este numero não é valido");
            reiniciar();
            break;
        }
        
        sorteados.push(numero);
    }
    
    exibirTextoNaTela("resultado",`Números sorteados: ${sorteados}`);
    alterarStatusBotao();
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");

    } else {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    }
}

function obterNumeroAleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

function reiniciar(){
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    exibirTextoNaTela("resultado",`Números sorteados:  nenhum até agora`);
    alterarStatusBotao();
}