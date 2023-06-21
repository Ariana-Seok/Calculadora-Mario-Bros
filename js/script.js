var resultadoPantalla = document.querySelector('.result');
var valor1 = "";
var operador = "";
var valor2 = "";

function limpiarPantalla() {
    resultadoPantalla.textContent = '';
    valor1 = '';
    operador = '';
    valor2 = '';
}

function cargarNumero(numero){
    valor1 += numero;
    resultadoPantalla.textContent = valor1;
}

function cargarOperador(op) {
    if(operador != "") {
        calcularResultado();
    }
    operador = op;
    valor2 = valor1;
    valor1 = "";
}

function cargarDecimal(){
    if (valor1.includes('.')) {
        return; 
    }
    valor1 += ".";
    resultadoPantalla.textContent = valor1;
}

function calcularResultado() {
    var resultado;
    var numero1 = parseFloat(valor2);
    var numero2 = parseFloat(valor1);

    switch (operador) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            resultado = numero1 / numero2;
            break;
    }

    resultadoPantalla.textContent = resultado;
    valor1 = resultado.toString();
    operador = "";
    valor2 = "";

}
