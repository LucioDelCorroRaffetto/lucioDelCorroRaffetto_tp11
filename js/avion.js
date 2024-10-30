//  creo el prompt
const prompt = require('prompt-sync')();

// Solicitp al usuario la velocidad y la altura del vuelo
let velocidad = parseFloat(prompt("Ingrese la velocidad del avión en km/hr (kilometros/hora):"));
let altura = parseFloat(prompt("Ingrese la altura del avión en m (metros):"));

// Verifico si el avión está listo para aterrizar
if (velocidad >= 268 && velocidad <= 278 && altura >= 150 && altura <= 300) {
    console.log("El avión está listo para aterrizar.");
} else {
    console.log("El avión no está listo para aterrizar. Verifique la velocidad y la altura.");
}
