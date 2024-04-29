let continuar = true;
const dominio = "myDomain.com";
const usuarios = {};
while(continuar){
    const nombre = prompt("Ingrese su nombre y apellido: ").toLowerCase();
    const splitName = nombre.split(" ");
    if (splitName.length != 2){
        console.log("Nombre invalido.")
        continue;
    }
    const primeras3LetrasNombre = splitName[0].slice(0,3);
    const primeras3LetrasApellido = splitName[1].slice(0,3);
    let nombreUsuario = `${primeras3LetrasNombre}${primeras3LetrasApellido}`;
    const esIgual = chequearunico(nombreUsuario);
    if (esIgual > 0){
        nombreUsuario += esIgual;
        
    }
    let email = `${nombreUsuario}@${dominio}`;
    Object.assign(usuarios, {
        [nombreUsuario]: email
    });
    console.table(usuarios);
    continuar = confirm("Presione ok para ingresar otro usuario, cancel para salir")
}

function chequearunico(nombreUsuario){
    const llaveUsuario = Object.keys(usuarios);
    let esIgual = 0;
    llaveUsuario.forEach(element => {
        // if(element.startsWith(nombreUsuario)){
        //     console.log("Ya fue ingresado")
        //     esIgual++;
        // }
        let casiIgual = "";
        for (let i = 0; i < element.length; i++) {
            casiIgual += element[i];
            if (casiIgual === nombreUsuario){
                esIgual++
            }
        }
    })
    return esIgual;
}
