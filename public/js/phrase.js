$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

var url = "http://localhost:3000/frases";

function fraseAleatoria() {

    $("#spinner").show();

    $.get(url, trocaFraseAleatoria)
    .fail(function() {

        $("#erro").fadeIn(1000);

        closeBtn();

    }).always(function() {

        $("#spinner").hide();

    });

}

function trocaFraseAleatoria(data) {

    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);

    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);

}

function closeBtn() {

    $(".icon-close").click(function() {

        var closeBtn = $("#erro").fadeOut(1000);

        setTimeout(function() {

            closeBtn.toggle();

        }, 1000);

    })

}

function buscaFrase() {

    $("#spinner").show();

    var fraseId = $("#frase-id").val();

    var dados = { id: fraseId };

    $.get(url, dados, trocaFrase)
    .fail(function() {

        $("#erro").fadeIn(1000);

        closeBtn();

    }).always(function() {

        $("#spinner").hide();

    });

}

function trocaFrase(data) {

    var frase = $(".frase");

    frase.text(data.texto);

    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);

}