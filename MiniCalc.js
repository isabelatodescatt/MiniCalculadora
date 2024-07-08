// somar
document.getElementById("somarBotao").addEventListener("click", function() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    var soma = valor1 + valor2;
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "Sua conta deu: " + soma;
});

// subtrair
document.getElementById("subtrairBotao").addEventListener("click", function() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    var subtrair = valor1 - valor2;
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "Sua conta deu: " + subtrair;
});

// multiplicar
document.getElementById("multiplicarBotao").addEventListener("click", function() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    var multiplicar = valor1 * valor2;
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "Sua conta deu: " + multiplicar;
});

// multiplicar
document.getElementById("dividirBotao").addEventListener("click", function() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    var dividir = valor1 / valor2;
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "Sua conta deu: " + dividir;
});