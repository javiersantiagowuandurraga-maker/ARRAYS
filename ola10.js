function convertirDolaresAPesos(dolares) {
  return dolares * 3550;
}
function ejercicio10() {
  let dolares = Number(prompt("Dólares (0 para terminar):"));
  let personas = 0;
  let total = 0;
  while (dolares !== 0) {
    let pesos = convertirDolaresAPesos(dolares);
    console.log("Equivale a: " + pesos + " pesos");
    personas++;
    total += pesos;
    dolares = Number(prompt("Dólares (0 para terminar):"));
  }
  console.log("Personas atendidas: " + personas);
  console.log("Total en pesos: " + total);
}

function generarNumeroSecreto(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}
function evaluarIntento(intento, secreto) {
  if (intento === secreto) {
    return 0; // acierto
  } else if (intento < secreto) {
    return -1; // intento menor
  } else {
    return 1; // intento mayor
  }
}
