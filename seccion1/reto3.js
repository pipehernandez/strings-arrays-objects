const correo = prompt("Ingrese su correo: ");

const chequearArroba = (elemento) => {
    return elemento.includes("@");
}

const chequearTienePunto = (elemento) => {
    if (!chequearArroba(elemento)) {
        return false;
    } else return elemento.split("@")[1].includes(".");
}

const chequearArrobaYPuntoSeparados = (elemento) => {
    if (elemento.includes("@.") || elemento.includes(".@")) {
        return false;
    } else return true;
}

const chequearEspacio = (elemento) => {
    return !elemento.includes(" ");
}

if (chequearArroba(correo) && chequearTienePunto(correo) && chequearArrobaYPuntoSeparados(correo) && chequearEspacio(correo)) {
    console.log("Correo electrónico válido");
} else console.log("Correo electrónico invalido");