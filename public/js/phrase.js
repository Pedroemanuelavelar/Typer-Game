$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {

    $.get("http://localhost:3000/23frases", trocaFraseAleatoria)
    .fail(function() {

        $("#erro").fadeIn(1000);

        $(".icon-close").click(function() {

            var closeBtn = $("#erro").fadeOut(1000);

            setTimeout(function() {

                closeBtn.toggle();
    
            }, 1000);
    
        });


    });


}

function trocaFraseAleatoria(data) {

    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);

    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);

}