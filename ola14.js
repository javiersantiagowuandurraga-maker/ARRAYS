function leerPrecios(cantidad) {
  let precios = [];

  for (let i = 0; i < cantidad; i++) {
    let precio = Number(prompt("Precio " + (i + 1) + ":"));
    precios.push(precio);
  }

  return precios;
}

function calcularConIva(precio) {
  return Math.round(precio * 1.19);
}

function aplicarIvaConMap(precios) {
  return precios.map((precio) => calcularConIva(precio));
}

function aplicarIvaConFor(precios) {
  let preciosConIva = [];

  for (let i = 0; i < precios.length; i++) {
    preciosConIva.push(calcularConIva(precios[i]));
  }

  return preciosConIva;
}

function arraysIguales(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

function ejecutarEjercicio14() {
  let cantidad = pedirEntero("¿Cuántos productos?", 1);
  let precios = leerPrecios(cantidad);
  let conIvaMap = aplicarIvaConMap(precios);
  let conIvaFor = aplicarIvaConFor(precios);

  console.log("Sin IVA: " + unirConComas(precios));
  console.log("Con IVA: " + unirConComas(conIvaMap));
  console.log("Total con IVA: $" + calcularTotal(conIvaMap));
  console.log("¿Las versiones coinciden?: " + arraysIguales(conIvaMap, conIvaFor));
  console.log("Precios originales: " + unirConComas(precios));
}
