function existeEnLista(lista, valor) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === valor) {
      return true;
    }
  }

  return false;
}

function eliminarRepetidos(numeros) {
  let sinRepetidos = [];

  for (let i = 0; i < numeros.length; i++) {
    if (!existeEnLista(sinRepetidos, numeros[i])) {
      sinRepetidos.push(numeros[i]);
    }
  }

  return sinRepetidos;
}

function ejecutarEjercicio11() {
  let numeros = leerNumeros(10);
  let sinRepetidos = eliminarRepetidos(numeros);
  let repetidosEliminados = numeros.length - sinRepetidos.length;

  console.log("Sin repetidos: " + unirConComas(sinRepetidos));
  console.log("Se eliminaron " + repetidosEliminados + " repetidos");
}
