var placar = $(".placar");
$("#botao-placar").click(mostraPlacar);



function inserePlacar() {

    var corpoTabela = placar.find("tbody");
    var usuario = "Pedro";
    var numeroPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numeroPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.prepend(linha);
    placar.slideDown(500);

    scrollPlacar();

}

function scrollPlacar() {

    var posicaoPlacar =  placar.offset().top;

    $("html, body").animate({

        scrollTop: posicaoPlacar+"px"

    }, 1000);
    
}

function novaLinha(usuario, numPalavras) {

    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(numPalavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").addClass("icone-excluir").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;

}

function removeLinhaPadrao() {

    var linhaRemover = $(".botao-remover").click(function(event) {
        
        event.preventDefault();
        var linha = $(this).parent().parent();
        linha.fadeOut(1000);

        setTimeout(function() {

            linha.remove();

        }, 1000);

    });

    return linhaRemover;
    
}

function removeLinha(event) {
        
    event.preventDefault();
    var linha = $(this).parent().parent();
    linha.fadeOut(1000);

    setTimeout(function() {

        linha.remove();

    }, 1000);

}

function mostraPlacar() {

    placar.stop().slideToggle(600);

}