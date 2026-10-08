function obtenerMenor(a, b) {
  return a < b ? a : b;
}
function obtenerMayor(a, b) {
  return a > b ? a : b;
}
function ejercicio8() {
  let cantidad = 25;
  let suma = 0;
  let menor = 0;
  let mayor = 0;
  for (let i = 1; i <= cantidad; i++) {
    let puntos = Number(prompt("Puntos auto " + i + ":"));
    suma += puntos;
    if (i === 1) {
      menor = puntos;
      mayor = puntos;
    } else {
      menor = obtenerMenor(menor, puntos);
      mayor = obtenerMayor(mayor, puntos);
    }
  }
  console.log("Promedio: " + calcularPromedio(suma, cantidad));
  console.log("Menor contaminación: " + menor);
  console.log("Mayor contaminación: " + mayor);
}
