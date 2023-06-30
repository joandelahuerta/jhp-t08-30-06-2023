//insertar numero en el cuadro de texto "resultado"
function inNumero(numero) {
    document.getElementById('resultado').value += numero;
}
//insertar el simbolo de operacion en el cuadro de texto "resultado"
function inOperacion(operacion) {
    document.getElementById('resultado').value += operacion;
}
//enseñar en el cuadro de texto "resultado" el resultado de la operacion
function resultado() {
    const expression = document.getElementById('resultado').value;
    let resultado = eval(expression);
    document.getElementById('resultado').value = resultado;
}
//limpiar los numeros y operaciones introducidos
function limpiar() {
    document.getElementById('resultado').value = '';
}