var tempoInicial = $("#tempo-digitacao").text();
var botaoReiniciar = $("#botao-reiniciar");
var campoDigitacao = $(".campo-digitacao");


$(function() {
    
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    removeLinhaPadrao();
    botaoReiniciar.click(reiniciaJogo);
    atualizaPlacar();
});

function atualizaTempoInicial(tempo) {

    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);

}

function atualizaTamanhoFrase() {

    var frase = $(".frase").text();
    var numeroPalavras= frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numeroPalavras);

}

function inicializaContadores() {

    campoDigitacao.on("input", function() {

        var conteudo = campoDigitacao.val();
        var quantidadePalavra = conteudo.split(/\S+/).length - 1;
    
        $("#contador-palavras").text(quantidadePalavra);
    
        var quantidadeCaracteres =  conteudo.length;
    
        $("#contador-caracteres").text(quantidadeCaracteres);
    
    });

}

function inicializaCronometro() {

    campoDigitacao.one("focus", function() {

        var tempoRestante = $("#tempo-digitacao").text();

        botaoReiniciar.attr("disabled", true);

        var cronometroID = setInterval(function() {

        tempoRestante--;

        $("#tempo-digitacao").text(tempoRestante);

            if(tempoRestante < 1) {

                clearInterval(cronometroID);
                finalizaJogo();

            }

        }, 1000)

    });
    
}

function finalizaJogo() {

    campoDigitacao.attr("disabled", true);
    botaoReiniciar.attr("disabled", false);
    campoDigitacao.toggleClass("campo-desativado");

    inserePlacar();

}

function inicializaMarcadores() {

    campoDigitacao.on("input", function() {

        var frase = $(".frase").text();
        var digitado = campoDigitacao.val();
        var comparavel = frase.substr(0, digitado.length);

        if(digitado == comparavel) {

            campoDigitacao.addClass("borda-verde");
            campoDigitacao.removeClass("borda-vermelha");

        } else {
            
            campoDigitacao.addClass("borda-vermelha");
            campoDigitacao.removeClass("borda-verde");

        }

    });

}

function reiniciaJogo() {

    campoDigitacao.attr("disabled", false);
    campoDigitacao.val(""); // apaga o conteudo do campo

    $("#contador-palavras").text("0"); 
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);

    inicializaCronometro();

    campoDigitacao.toggleClass("campo-desativado");

    // Evita a????o de quando clicar no bot??o reiniciar, quando o game j?? estiver rodando de n??o adicionar o background cinza
    if(!campoDigitacao == campoDigitacao.val("")) {
        
        campoDigitacao.addClass("campo-normal");

    } else {

        campoDigitacao.removeClass("campo-desativado");
        
    }

    campoDigitacao.removeClass("borda-verde");
    campoDigitacao.removeClass("borda-vermelha");

}


