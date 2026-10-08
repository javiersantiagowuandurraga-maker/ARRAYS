function leerProductos(cantidad) {
  let productos = [];

  for (let i = 0; i < cantidad; i++) {
    productos.push(prompt("Producto " + (i + 1) + ":"));
  }

  return productos;
}

function mostrarLista(productos) {
  console.log("Lista del mercado:");

  productos.forEach((producto, indice) => {
    console.log((indice + 1) + ". " + producto);
  });

  console.log("Total: " + productos.length + " productos");
}

function ejecutarEjercicio13() {
  let cantidad = pedirEntero("¿Cuántos productos?", 0);
  let productos = leerProductos(cantidad);

  mostrarLista(productos);
}

// forEach no se puede detener a la mitad con break.
// Úsalo para procesar todos los elementos. Para detener una búsqueda
// al encontrar un valor, conviene usar un ciclo for o while.
