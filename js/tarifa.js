// Creo la variable pagoMes
let pagoMes = 12000;

// Creo la variable consumoKWH
let consumoKWH = 450;

// operador ternario
let totalAPagar = (consumoKWH > 300) ? pagoMes * 1.2 : pagoMes;

// mensaje consola
console.log(`Debido a que su hogar tuvo un consumo de ${consumoKWH} kWh, en base al ajuste tarifario (hogares con consumo mayor a 300 kWh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $${totalAPagar.toFixed(2)}`);