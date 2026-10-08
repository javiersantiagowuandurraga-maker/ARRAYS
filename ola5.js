function clasificarNumero(numero) {
  if (numero > 0) return "positivo";
  if (numero < 0) return "negativo";
  return "cero";
}
function contarNumeros(cantidad) {
  let positivos = 0;
  let negativos = 0;
  let ceros = 0;
  for (let i = 1; i <= cantidad; i++) {
    let tipo = clasificarNumero(Number(prompt("Número " + i + ":")));
    if (tipo === "positivo") positivos++;
    else if (tipo === "negativo") negativos++;
    else ceros++;
  }
  console.log("Positivos: " + positivos);
  console.log("Negativos: " + negativos);
  console.log("Ceros: " + ceros);
}
function ejercicio5() {
  contarNumeros(20);
}