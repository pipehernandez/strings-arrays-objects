let continuar = true;
const listaEventos = [];
let id = 0;
while (continuar) {
  const ingreso = prompt(
    "Ingrese una de las siguientes opciones:\n1. Crear un evento.\n2. Ver eventos \n 3. Buscar eventos por nombre\n 4. Actualizar evento\n 5. Eliminar evento\n 6. Salir"
  );
  switch (ingreso) {
    case "1":
      const nombreEvento = prompt("Ingresa el nombre del evento: ");
      const fechaEvento = prompt("Ingresa la fecha del evento (AAAA-MM-DD): ");
      const descripcionEvento = prompt("Ingresa la descripción del evento: ");
      const evento = Object.assign(
        {},
        {
          id: id++,
          nombreEvento,
          fechaEvento,
          descripcionEvento,
        }
      );
      listaEventos.push(evento);
      break;
    case "2":
      listaEventos.forEach((evento, index, array) => {
        alert(
          `Evento ${index + 1}: ${evento.nombreEvento} \nFecha: ${
            evento.fechaEvento
          } \nDescripción: ${evento.descripcionEvento}`
        );
      });
      break;
    case "3":
      const buscar = prompt("Ingresa el nombre del evento que deseas buscar: ");
      const buscarEvento = listaEventos.filter(
        (evento) => evento.nombreEvento === buscar
      );
      if (buscarEvento.length === 0) {
        alert("No se encontraron eventos con ese nombre");
        break;
      }
      buscarEvento.forEach((evento, index) => {
        alert(
          `Evento ${index + 1}: ${evento.nombreEvento} \nFecha: ${
            evento.fechaEvento
          } \nDescripción: ${evento.descripcionEvento}`
        );
      });
      break;
    case "4":
      listaEventos.forEach((evento, index) => {
        alert(
          `Evento ${index + 1}: ${evento.nombreEvento} \nFecha: ${
            evento.fechaEvento
          } \nDescripción: ${evento.descripcionEvento}`
        );
      });
      const idDeEvento = prompt("Ingresa el id del evento a actualizar: ");
      const nombreEventoActualizado = prompt(
        "Ingrese el nombre nuevo para el evento o enter para dejar el mismo: "
      );
      const fechaEventoActualizada = prompt(
        "Ingrese la fecha nueva del evento o enter para dejar la misma: "
      );
      const descripcionEventoActualizada = prompt(
        "Ingrese la descripcion nueva para el evento o enter para dejar la misma: "
      );
      if (nombreEventoActualizado) {
        listaEventos[idDeEvento - 1].nombreEvento = nombreEventoActualizado;
      }
      if (fechaEventoActualizada) {
        listaEventos[idDeEvento - 1].fechaEvento = fechaEventoActualizada;
      }
      if (descripcionEventoActualizada) {
        listaEventos[idDeEvento - 1].descripcionEvento =
          descripcionEventoActualizada;
      }
      break;
    case "5":
      listaEventos.forEach((evento, index) => {
        alert(
          `Evento ${index + 1}: ${evento.nombreEvento} \nFecha: ${
            evento.fechaEvento
          } \nDescripción: ${evento.descripcionEvento}`
        );
      });
      const idEventoEliminar = prompt("Ingresa el id del evento que quieres eliminar: ");
      listaEventos.splice(idEventoEliminar - 1, 1);
      break;
    case "6":
      continuar = false;
      break;
    default:
      break;
  };
};
