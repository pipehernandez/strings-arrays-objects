let inventario = [];
let salir = false;
let id = 0;
let malasPalabras = [
  `palabra1`,
  `palabra2`,
  `palabra3`,
  `palabra4`,
  `palabra5`,
];
while (!salir) {
  let opcion = prompt(`Ingrese una de las opciones: 
    \n 1. Agregar un producto
    \n 2. Duplicar un producto
    \n 3. Ver productos
    \n 4. Actualizar producto
    \n 5. Verificar existencia e inventario
    \n 6. Venta de productos
    \n 7. Compra de productos
    \n 8. Calculo valor total de inventario
    \n 9. Ordenar productos
    \n 10. Identificacion de productos con malas palabras
    \n 11. Reporte general de productos
    \n 12. Salir del sistema`);

  switch (opcion) {
    case "1":
      nombre = prompt("Ingrese el nombre del producto: ");
      precio = prompt("Ingrese el precio del producto: ");
      cantidad = prompt("Ingrese la cantidad del producto: ");
      descripcion = prompt("Ingrese la descripción del producto: ");

      let producto = Object.assign(
        {},
        {
          id: ++id,
          nombre,
          precio,
          cantidad,
          descripcion,
        }
      );
      inventario.push(producto);
      break;
    case "2":
      inventario.forEach((producto, index) => {
        alert(
          `Producto ${index + 1}: ${producto.nombre} \nPrecio: ${
            producto.precio
          } \nCantidad: ${producto.cantidad} \nDecripcion: ${
            producto.descripcion
          }`
        );
      });
      let idADuplicar = prompt(`Ingrese el id del producto a duplicar: `);
      let productoADuplicar = inventario[idADuplicar - 1];
      let iguales = 0;
      inventario.forEach((producto) => {
        if (producto.nombre.startsWith(productoADuplicar.nombre)) {
          iguales++;
        }
      });
      let prouctoDuplicado = Object.assign(
        {},
        {
          id: ++id,
          nombre: iguales
            ? productoADuplicar.nombre + `Copy` + iguales
            : productoADuplicar.nombre + `Copy`,
          precio: productoADuplicar.precio,
          cantidad: productoADuplicar.cantidad,
          descripcion: productoADuplicar.descripcion,
        }
      );
      inventario.push(prouctoDuplicado);
      break;
    case "3":
      inventario.forEach((producto, index) => {
        alert(
          `Producto ${index + 1}: ${producto.nombre} \nPrecio: ${
            producto.precio
          } \nCantidad: ${producto.cantidad} \nDecripcion: ${
            producto.descripcion
          }`
        );
      });
      let buscar = true;
      while (buscar) {
        let opcionBuscar = prompt(
          "Ingrese una de las siguientes opciones:\n1. Buscar por nombre. \n2. Buscar por precio. \n3. Volver al menu principal."
        );
        switch (opcionBuscar) {
          case "1":
            let nombre = prompt(`Ingrese el nombre del producto:`);
            let productosPorNombre = inventario.filter(
              (producto) => producto.nombre === nombre
            );
            productosPorNombre.forEach((producto) => {
              alert(
                `Producto: ${producto.nombre} \nPrecio: ${producto.precio} \nCantidad: ${producto.cantidad} \nDecripcion: ${producto.descripcion}`
              );
            });
            break;
          case "2":
            let precio = prompt(`Ingrese el precio del producto: `);
            let productosPorPrecio = inventario.filter(
              (producto) => producto.precio === precio
            );
            productosPorPrecio.forEach((producto) => {
              alert(
                `Producto: ${producto.nombre} \nPrecio: ${producto.precio} \nCantidad: ${producto.cantidad} \nDecripcion: ${producto.descripcion}`
              );
            });
            break;
          case "3":
            buscar = false;
            break;
        }
      }
      break;
    case "4":
      inventario.forEach((producto, index) => {
        alert(
          `Producto ${index + 1}: ${producto.nombre} \nPrecio: ${
            producto.precio
          } \nCantidad: ${producto.cantidad} \nDecripcion: ${
            producto.descripcion
          }`
        );
      });
      let idAActualizar = prompt("Ingrese el id del producto a actualizar: ");
      let nombreActualizado = prompt(
        "Ingrese el nuevo nombre del producto o enter para mantener el mismo: "
      );
      let precioActualizado = prompt(
        "Ingrese el nuevo precio del producto o enter para mantener el mismo: "
      );
      let cantidadActualizada = prompt(
        "Ingrese la nueva cantidad del producto o enter para mantener la misma: "
      );
      let descripcionActualizada = prompt(
        "Ingrese la nueva descripcion del producto o enter para mantener la misma: "
      );
      if (nombreActualizado) {
        inventario[idAActualizar - 1].nombre = nombreActualizado;
      }
      if (precioActualizado) {
        inventario[idAActualizar - 1].precio = precioActualizado;
      }
      if (cantidadActualizada) {
        inventario[idAActualizar - 1].cantidad = cantidadActualizada;
      }
      if (descripcionActualizada) {
        inventario[idAActualizar - 1].descripcion = descripcionActualizada;
      }
      break;
    case "5":
      let nombreAChequear = prompt(`Ingrese el nombre del producto: `);
      let productoAChequear = inventario.find(
        (producto) => producto.nombre === nombreAChequear
      );
      if (!productoAChequear) {
        alert(`Producto no encontrado`);
        break;
      }
      if (productoAChequear.cantidad === 0) {
        alert(`Producto agotado`);
        break;
      }
      alert(
        `Producto: ${productoAChequear.nombre} \nPrecio: ${productoAChequear.precio} \nCantidad: ${productoAChequear.cantidad} \nDescripcion: ${productoAChequear.descripcion}`
      );
      break;
    case "6":
      let nombreAVender = prompt(`Ingrese el nombre del producto: `);
      let productoAVender = inventario.find(
        (producto) => producto.nombre === nombreAVender
      );
      if (!productoAVender) {
        alert(`Producto no encontrado`);
        break;
      }
      if (productoAVender.cantidad === 0) {
        alert(`Producto agotado`);
        break;
      }
      productoAVender.cantidad--;
      alert(
        `Venta realizada, ${productoAVender.cantidad} restantes en inventario.`
      );
      break;
    case "7":
      let nombreAComprar = prompt(`Ingrese el nombre del producto: `);
      let productoAComprar = inventario.find(
        (producto) => producto.nombre === nombreAComprar
      );
      if (!productoAComprar) {
        alertalert(`Producto no encontrado`);
        break;
      }
      productoAComprar.cantidad++;
      alert(
        `Compra realizada, ${productoAComprar.cantidad} disponibles en inventario.`
      );
      break;
    case "8":
      let valorTotal = inventario.reduce(
        (acc, producto) => acc + producto.precio * producto.cantidad,
        0
      );
      alert(`El valor del inventario es: ${valorTotal}`);
      break;
    case "9":
      let orden = true;
      while (orden) {
        let opcionOrden = prompt(
          `Ingresa una de las siguientes opciones: \n1. Ordenar por nombre. \n2. Ordenar por precio. \n3. Volver al menu principal.`
        );
        switch (opcionOrden) {
          case "1":
            inventario.sort((a, b) => a.nombre.localeCompare(b.nombre));
            inventario.forEach((producto) => {
              alert(
                `Producto : ${producto.nombre} \nPrecio: ${producto.precio} \nCantidad: ${producto.cantidad} \nDescripcion: ${producto.descripcion}`
              );
            });
            break;
          case "2":
            inventario.sort((a, b) => a.precio - b.precio);
            inventario.forEach((producto) => {
              alert(
                `Producto : ${producto.nombre} \nPrecio: ${producto.precio} \nCantidad: ${producto.cantidad} \nDescripcion: ${producto.descripcion}`
              );
            });
            break;
          case "3":
            orden = false;
            break;
          default:
            alert(`Opcion invalida.`);
            break;
        }
      }
      break;
    case "10":
      inventario.forEach((producto) => {
        let palabrasDeDescripcion = producto.descripcion.split(" ");
        palabrasDeDescripcion.forEach((word) => {
          if (malasPalabras.includes(word)) {
            alert(
              `Producto : ${producto.nombre} \nPrecio: ${producto.precio} \nCantidad: ${producto.cantidad} \nDescripcion: ${producto.descripcion}`
            );
          }
        });
      });
      break;
    case "11":
      let productosTotales = inventario.length;
      let valorTotalInventario = inventario.reduce(
        (acc, producto) => acc + producto.precio * producto.cantidad,
        0
      );
      let productosMasCaros = inventario.filter(
        (producto) =>
          producto.precio ===
          Math.max(...inventario.map(producto => producto.precio))
      );
      let productosMasBaratos = inventario.filter(
        (producto) =>
          producto.precio ===
          Math.min(...inventario.map(producto => producto.precio))
      );
      let productoConMasCantidad = inventario.filter(
        (producto) =>
          producto.cantidad ===
          Math.max(...inventario.map(producto => producto.cantidad))
      );
      let productoConMenosCantidad = inventario.filter(
        (producto) =>
          producto.cantidad ===
          Math.min(...inventario.map(producto => producto.cantidad))
      );
      let productosConMalasPalabras = inventario.filter(producto => {
        let palabrasDeDescripcion = producto.descripcion.split(" ");
        return palabrasDeDescripcion.some(palabra =>
          malasPalabras.includes(palabra)
        );
      });
      alert(`Cantidad de productos: ${productosTotales}`);
      alert(`Valor total del inventario: ${valorTotalInventario}`);
      alert(`Cantidad de productos mas caros: ${productosMasCaros.length}`);
      alert(`Cantidad de productos mas baratos: ${productosMasBaratos.length}`);
      alert(
        `Cantidad de productos con mayor cantidad: ${productoConMasCantidad.length}`
      );
      alert(
        `Cantidad de productos con menor cantidad: ${productoConMenosCantidad.length}`
      );
      alert(
        `Cantidad de productos con malas palabras en la descripcion: ${productosConMalasPalabras.length}`
      );
      break;
    case "12":
      salir = true;
      break;
    default:
      alert(`Opcion invalida`);
      break;
  }
}
