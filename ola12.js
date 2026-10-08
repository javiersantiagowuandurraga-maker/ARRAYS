function leerNombres(cantidad) {
  let nombres = [];

  for (let i = 0; i < cantidad; i++) {
    nombres.push(prompt("Persona " + (i + 1) + ":"));
  }

  return nombres;
}

function rotarDerecha(lista, k) {
  let rotada = [];
  let cantidad = lista.length;

  if (cantidad === 0) {
    return rotada;
  }

  let desplazamiento = k % cantidad;

  for (let i = 0; i < cantidad; i++) {
    let indiceOriginal = (i - desplazamiento + cantidad) % cantidad;
    rotada.push(lista[indiceOriginal]);
  }

  return rotada;
}

function ejecutarEjercicio12() {
  let cantidad = pedirEntero("¿Cuántas personas?", 1);
  let personas = leerNombres(cantidad);
  let k = pedirEntero("¿Cuántas posiciones rotar?", 0);
  let filaRotada = rotarDerecha(personas, k);

  console.log("Fila original: " + unirConComas(personas));
  console.log("Fila rotada: " + unirConComas(filaRotada));
}
