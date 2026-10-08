function convertirAKelvin(celsius) {
  return celsius + 273.15;
}
function convertirAFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}
function calcularPromedio(suma, cantidad) {
  return suma / cantidad;
}
function ejercicio3() {
  let dias = Number(prompt("¿Cuántos días?:"));
  let suma = 0;
  for (let dia = 1; dia <= dias; dia++) {
    let celsius = Number(prompt("Temperatura día " + dia + " (°C):"));
    console.log("Día " + dia + ": " + celsius + " °C = " +
      convertirAKelvin(celsius) + " K = " + convertirAFahrenheit(celsius) + " °F");
    suma += celsius;
  }
  if (dias > 0) console.log("Promedio: " + calcularPromedio(suma, dias) + " °C");
}