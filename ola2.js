function calcularCubo(a) {
  return  a * a * a;
}
function calcularCuartaParte(numero) {
  return numero / 4;
}
function ejercicio2() {
  let sumaCubos = 0;
  for (let i = 1; i <= 10; i++) {
    let numero = Number(prompt("Número " + i + ":"));
    let cubo = calcularCubo(numero);
    console.log("Número: " + numero + " | Cubo: " + cubo +
      " | Cuarta parte: " + calcularCuartaParte(numero));
    sumaCubos += cubo;
  }
  console.log("Suma de los cubos: " + sumaCubos);
}
