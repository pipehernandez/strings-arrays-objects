let notas = prompt(`Ingrese todas las notas separadas por ","`);
let calificaciones = notas.split(",");
let numeros = calificaciones.map(elemento => parseInt(elemento));
let promedio = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0) / calificaciones.length;
alert(`El promedio de las calificaciones es: `+ promedio);
