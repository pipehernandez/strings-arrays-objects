let notas = prompt(`Ingrese todas las notas separadas por ","`);

let calificaciones = notas.split(",");
let numeros = calificaciones.map(elemento => parseInt(elemento));

let promedio = numeros.reduce((acumulador, elemento) => acumulador+ elemento, 0) / calificaciones.length;

let notaMaxima = Math.max(...numeros);

let notaMinima = Math.min(...numeros);

let aprobados = numeros.filter(elemento => elemento >= 70).length;

let reprobados = numeros.filter(elemento => elemento < 70).length;

let notasOrdenadas = numeros.sort((a, b) => b - a);

alert(`El promedio de las calificaciones es: `+ promedio),
alert(`La calificación mas alta es: `+ notaMaxima);
alert(`La calificación mas baja es: `+ notaMinima);
alert(`El numero de aprobados es: `+ aprobados);
alert(`El numero de reprobados es: `+ reprobados);
alert(`Las notas de mayor a menor son: `+ notasOrdenadas.join(", "))