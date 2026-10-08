function calcularInteres(saldo, porcentaje) {
  return saldo * porcentaje / 100;
}
function mostrarInversion(capital, meses) {
  let saldo = capital;
  for (let mes = 1; mes <= meses; mes++) {
    saldo += calcularInteres(saldo, 2);
    console.log("Mes " + mes + ": " + saldo);
  }
  console.log("Ganancia total: " + (saldo - capital));
}
function ejercicio4() {
  let capital = Number(prompt("Capital inicial:"));
  let meses = Number(prompt("Número de meses:"));
  mostrarInversion(capital, meses);
}