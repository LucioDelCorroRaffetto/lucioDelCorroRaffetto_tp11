//  creo el prompt
const prompt = require('prompt-sync')();

// solicito al usuario una palabra en español
let palabra = prompt("Ingrese una palabra en español:");

// Variable que guarda la palabra
let traduccion;

// traduccion
switch (palabra.toLowerCase()) {
    case "perro":
        traduccion = "dog";
        break;
    case "gato":
        traduccion = "cat";
        break;
    case "puerta":
        traduccion = "door";
        break;
    case "ventana":
        traduccion = "window";
        break;
    case "mesa":
        traduccion = "table";
        break;
    default:
        console.log("La palabra ingresada es incorrecta.");
}

// mensaje final
if (traduccion) {
    console.log(`La traducción de "${palabra}" es "${traduccion}".`);
}
