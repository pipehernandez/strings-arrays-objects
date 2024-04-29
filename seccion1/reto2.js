const contraseña = prompt(`Por favor ingresa tu contraseña segura, esta debe cumplir con las siguientes condiciones:\n1.Al menos 8 caracteres\n2.Al menos un numero\n3.Al menos una letra\n4.Al menos un caracter especial: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , . | / \\ ~ \``);

const chequeoNumeros = (elemento) => {
    const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return elemento.split("").some(e => numeros.includes(e));
}

const chequeoLetras = (elemento) => {
    const letrasMinusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const letrasMayuculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'k', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return elemento.split("").some(elemento => {
        return letrasMinusculas.includes(elemento) || letrasMayuculas.includes(elemento)
    })
}

const chequeoCaracteresEspeciales = (elemento) => {
    const caracteresEspeciales = `! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , . | / \ ~ \``
    const listaCaracteresEspeciales = caracteresEspeciales.split(' ')
    return elemento.split("").some(e => listaCaracteresEspeciales.includes(e))
}

const chequeoLongitud = (contraseña.length) >= 8;
const tieneNumeros = (chequeoNumeros(contraseña));
const tieneLetras = (chequeoLetras(contraseña));
const tieneCaracterEspecial = (chequeoCaracteresEspeciales(contraseña));

if (chequeoLongitud && tieneNumeros && tieneLetras && tieneCaracterEspecial) {
    console.log("La contraseña es Segura");
} else {
    console.log("La contraseña es Insegura");
    if (!chequeoLongitud) {
        console.log("La contraseña no tiene 8 caracteres")
    } else if (!tieneNumeros) {
        console.log("La contraseña no tiene numeros")
    } else if (!tieneLetras) {
        console.log("La contraseña no tiene letras")
    }
}