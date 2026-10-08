function multiplicar(multiplicando, multiplicador) {
  return multiplicando * multiplicador;
}
function mostrarTabla(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + multiplicar(numero, i));
  }
}
function ejercicio1() {
  mostrarTabla(Number(prompt("Número:")));
}
