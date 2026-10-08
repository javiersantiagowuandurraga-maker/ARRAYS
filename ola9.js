function esHombre(genero) {
  return genero.toUpperCase() === "H";
}
function ejercicio9() {
  let cantidad = Number(prompt("¿Cuántas personas?:"));
  let hombres = 0;
  let mujeres = 0;
  let sumaHombres = 0;
  let sumaMujeres = 0;
  let sumaGrupo = 0;
  for (let i = 1; i <= cantidad; i++) {
    let genero = prompt("Género persona " + i + " (H/M):");
    let edad = Number(prompt("Edad persona " + i + ":"));
    sumaGrupo += edad;
    if (esHombre(genero)) {
      hombres++;
      sumaHombres += edad;
    } else {
      mujeres++;
      sumaMujeres += edad;
    }
  }
  console.log("Hombres: " + hombres);
  console.log(hombres > 0 ? "Promedio de edad: " + calcularPromedio(sumaHombres, hombres) : "No hay hombres.");
  console.log("Mujeres: " + mujeres);
  console.log(mujeres > 0 ? "Promedio de edad: " + calcularPromedio(sumaMujeres, mujeres) : "No hay mujeres.");
  if (cantidad > 0) console.log("Promedio del grupo: " + calcularPromedio(sumaGrupo, cantidad));
}