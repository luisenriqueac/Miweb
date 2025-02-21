// Seleccionamos la pantalla donde se mostrarán los números y resultados
const pantalla = document.getElementById("pantalla");
let operacion = ""; // Variable para almacenar la operación actual

// Función para agregar números a la pantalla
function agregarNumero(numero) {
    operacion += numero; // Concatenamos el número a la operación actual
    pantalla.value = operacion; // Mostramos la operación en la pantalla
}

// Función para agregar operadores (+, -, *, /)
function agregarOperador(operador) {
    // Evitamos que se agreguen operadores consecutivos
    if (operacion !== "" && !isNaN(operacion.slice(-1))) {
        operacion += operador;
        pantalla.value = operacion;
    }
}

// Función para borrar toda la operación
function borrar() {
    operacion = ""; // Reiniciamos la operación
    pantalla.value = ""; // Limpiamos la pantalla
}

// Función para calcular el resultado
function calcular() {
    try {
        // Evaluamos la operación y mostramos el resultado
        operacion = eval(operacion); // Usamos eval() para calcular la operación
        pantalla.value = operacion;
    } catch (error) {
        pantalla.value = "Error"; // Mostramos error si la operación es inválida
    }
}

function borrarUltimo() {
    if(operacion.length > 0) {
        operacion = operacion.slice(0, -1);
        pantalla.value = operacion;
    }
}