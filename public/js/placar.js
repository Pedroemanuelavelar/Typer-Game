function inserePlacar() {

    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Pedro";
    var numeroPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numeroPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);

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
        $(this).parent().parent().remove();

    });

    return linhaRemover;
    
}

function removeLinha(event) {
        
    event.preventDefault();
    $(this).parent().parent().remove();

}