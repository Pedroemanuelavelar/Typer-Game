$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {

    $("#spinner").show();

    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
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