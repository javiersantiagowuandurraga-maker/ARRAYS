function calcularHorasExtra(horas) {
  return horas > 40 ? horas - 40 : 0;
}
function calcularSalarioSemanal(horas) {
  let extras = calcularHorasExtra(horas);
  return (horas - extras) * 12000 + extras * 15000;
}
function ejercicio6() {
  let cantidad = Number(prompt("¿Cuántos obreros?:"));
  let nomina = 0;
  for (let i = 1; i <= cantidad; i++) {
    let salario = calcularSalarioSemanal(Number(prompt("Horas obrero " + i + ":")));
    nomina += salario;
    console.log("Obrero " + i + ": " + salario);
  }
  console.log("Total nómina: " + nomina);
}