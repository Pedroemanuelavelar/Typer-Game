$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {

    $.get("http://localhost:3000/frases", function() {

        console.log("Fiz uma requisição e retornei");

    });

}