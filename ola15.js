function leerDistancias(cantidad) {
  let distancias = [];

  for (let i = 0; i < cantidad; i++) {
    let distancia = Number(prompt("Distancia " + (i + 1) + ":"));

    while (Number.isNaN(distancia) || distancia < 0) {
      console.log("Ingresa una distancia válida, igual o mayor que 0.");
      distancia = Number(prompt("Distancia " + (i + 1) + ":"));
    }

    distancias.push(distancia);
  }

  return distancias;
}

function obtenerEnvioGratis(distancias) {
  return distancias.filter((distancia) => distancia <= 3);
}

function contarConEnvio(distancias) {
  let pedidosQuePagan = distancias.filter(
    (distancia) => distancia > 3 && distancia <= 10
  );

  return pedidosQuePagan.length;
}

function buscarPrimeroFuera(distancias) {
  return distancias.find((distancia) => distancia > 10);
}

function ejecutarEjercicio15() {
  let cantidad = pedirEntero("¿Cuántos pedidos?", 1);
  let distancias = leerDistancias(cantidad);
  let gratis = obtenerEnvioGratis(distancias);
  let primeroFuera = buscarPrimeroFuera(distancias);

  console.log(
    "Envío gratis (" +
      gratis.length +
      "): " +
      mostrarListaONinguno(gratis)
  );
  console.log("Pagan envío: " + contarConEnvio(distancias));

  if (primeroFuera === undefined) {
    console.log("Todos los pedidos están en cobertura");
  } else {
    console.log("Primer pedido fuera de cobertura: " + primeroFuera + " km");
  }
}
