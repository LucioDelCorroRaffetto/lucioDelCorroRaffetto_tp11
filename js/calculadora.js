//  creo el prompt
const prompt = require('prompt-sync')();

// se le solicita al usuario datos
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese la operación (sumar, restar, multiplicar, dividir):");

// creo la variable resultado
let resultado;

// operación
switch (operacion.toLowerCase()) {
    case "sumar":
        resultado = num1 + num2;
        console.log(`El resultado de sumar ${num1} + ${num2} es ${resultado}`);
        break;
    case "restar":
        resultado = num1 - num2;
        console.log(`El resultado de restar ${num1} - ${num2} es ${resultado}`);
        break;
    case "multiplicar":
        resultado = num1 * num2;
        console.log(`El resultado de multiplicar ${num1} * ${num2} es ${resultado}`);
        break;
    case "dividir":
        if (num2 !== 0) { // Verificar si no se intenta dividir por cero
            resultado = num1 / num2;
            console.log(`El resultado de dividir ${num1} / ${num2} es ${resultado}`);
        } else {
            console.log("No se puede dividir entre cero.");
        }
        break;
    default:
        console.log("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir");
}