function tieneDescuento(kilos) {
  return kilos > 10;
}
function calcularTotalCliente(kilos, precioKilo) {
  let subtotal = kilos * precioKilo;
  return tieneDescuento(kilos) ? subtotal * 0.85 : subtotal;
}
function procesarClientes(cantidad, precioKilo) {
  let recaudado = 0;
  let descuentos = 0;
  for (let i = 1; i <= cantidad; i++) {
    let kilos = Number(prompt("Kilos cliente " + i + ":"));
    let total = calcularTotalCliente(kilos, precioKilo);
    recaudado += total;
    if (tieneDescuento(kilos)) descuentos++;
    console.log("Cliente " + i + " paga: " + total);
  }
  console.log("Total recaudado: " + recaudado);
  console.log("Clientes con descuento: " + descuentos);
}
function ejercicio7() {
  let precio = Number(prompt("Precio por kilo:"));
  procesarClientes(15, precio);
}