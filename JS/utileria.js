// validar correo
// sirve para revisar que el correo tenga un formato correcto
// por ejemplo: usuario@gmail.com
function validarCorreo(correo) {

    // esta expresion revisa que tenga texto antes del @,
    // despues del @ y que tenga un punto como .com
    const regex = /^[^@]+@[^\s@]+\.[^\s@]+$/;

    // test devuelve true si cumple y false si no cumple
    return regex.test(correo);
}



// validar que solo tenga letras
// sirve para evitar que el usuario escriba numeros o simbolos
// lo uso para validar el nombre y tambien se puede usar para la ciudad
function soloLetras(texto) {

    // permite letras mayusculas, minusculas, acentos, ñ y espacios
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    // devuelve true si solamente encuentra letras
    return regex.test(texto);
}



// validar longitud
// sirve para comprobar que un numero tenga la cantidad de digitos indicada
// en mi formulario lo uso para comprobar que el telefono tenga 10 digitos
function validarLongitud(numero, maxLongitud) {

    // convierto el numero a texto para poder contar cuantos caracteres tiene
    // === significa que debe tener exactamente la longitud indicada
    return String(numero).length === maxLongitud;
}



// calcular edad
// sirve para calcular la edad de una persona usando su fecha de nacimiento
function calcularEdad(fechaNacimiento) {

    // la fecha viene de esta forma: año-mes-dia
    // con split la separo usando el guion
    const partes = fechaNacimiento.split("-");

    // obtengo el año
    const anio = parseInt(partes[0]);

    // obtengo el mes
    // le resto 1 porque javascript empieza los meses desde 0
    const mes = parseInt(partes[1]) - 1;

    // obtengo el dia
    const dia = parseInt(partes[2]);

    // creo una fecha con los datos de nacimiento
    const nacimiento = new Date(anio, mes, dia);

    // obtengo la fecha actual
    const hoy = new Date();

    // primero calculo la diferencia entre el año actual
    // y el año de nacimiento
    let edad =
        hoy.getFullYear() - nacimiento.getFullYear();

    // calculo la diferencia de meses
    const diferenciaMes =
        hoy.getMonth() - nacimiento.getMonth();

    // reviso si la persona todavia no ha cumplido años este año
    if (
        diferenciaMes < 0 ||
        (diferenciaMes === 0 &&
        hoy.getDate() < nacimiento.getDate())
    ) {

        // si todavia no cumple años le resto uno a la edad
        edad--;
    }

    // regreso la edad calculada
    return edad;
}



// validar si es mayor de edad
// sirve para saber si la persona tiene 18 años o mas
function esMayorDeEdad(fechaNacimiento) {

    // llamo a calcularEdad y comparo si el resultado es mayor o igual a 18
    // devuelve true si es mayor de edad y false si es menor
    return calcularEdad(fechaNacimiento) >= 18;
}



// validar contraseña
// sirve para revisar que la contraseña sea segura
function validarPassword(password) {

    // debe tener minimo 8 caracteres
    // tambien debe tener una minuscula, una mayuscula,
    // un numero y un caracter especial
    const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;

    // devuelve true si la contraseña cumple todos los requisitos
    return regex.test(password);
}



// formatear numero telefonico
// esta es mi primera funcion agregada
// la invente para que el numero de telefono
// se muestre de una forma mas ordenada
function formatearTelefono(numero) {

    // elimina cualquier cosa que no sea un numero
    const soloDigitos =
        String(numero).replace(/\D/g, "");

    // reviso que tenga exactamente 10 digitos
    if (soloDigitos.length !== 10) {

        // si no tiene 10 lo regreso como estaba
        return numero;
    }

    // separo el telefono para mostrarlo de esta forma:
    // (951) 123-4567
    return `(${soloDigitos.slice(0, 3)}) ${soloDigitos.slice(3, 6)}-${soloDigitos.slice(6)}`;
}



// medir fortaleza de contraseña
// esta es mi segunda funcion agregada
// la invente para indicar si una contraseña es debil, media o fuerte
function medirFortalezaContrasena(contrasena) {

    // aqui voy contando los requisitos que cumple
    let puntos = 0;

    // suma un punto si tiene minimo 8 caracteres
    if (contrasena.length >= 8) puntos++;

    // suma un punto si tiene una letra minuscula
    if (/[a-z]/.test(contrasena)) puntos++;

    // suma un punto si tiene una letra mayuscula
    if (/[A-Z]/.test(contrasena)) puntos++;

    // suma un punto si tiene un numero
    if (/\d/.test(contrasena)) puntos++;

    // suma un punto si tiene un caracter especial
    if (/[^a-zA-Z0-9]/.test(contrasena)) puntos++;

    // si consigue 2 puntos o menos la considero debil
    if (puntos <= 2) {

        return "Debil";
    }

    // si consigue entre 3 y 4 puntos la considero media
    if (puntos <= 4) {

        return "Media";
    }

    // si cumple los 5 requisitos la considero fuerte
    return "Fuerte";
}





// validar los datos del formulario
// esta parte conecta mis funciones anteriores con los campos del formulario

document.addEventListener("DOMContentLoaded", function () {

    // busco mi formulario por medio de su id
    const formulario =
        document.getElementById("formPricipal");

    // reviso primero si el formulario existe en la pagina
    // esto evita errores cuando utilizo la libreria
    // en otras paginas como pruebaCDN.html
    if (formulario) {

        // este evento se ejecuta cuando presiono el boton enviar
        formulario.addEventListener("submit", function (event) {

            // evita que el formulario se envie
            // o recargue inmediatamente
            event.preventDefault();


            // obtengo lo que escribio el usuario en el nombre
            const nombre =
                document.getElementById("nombre").value;

            // obtengo el correo
            const correo =
                document.getElementById("correo").value;

            // obtengo la fecha de nacimiento
            const fechaNacimiento =
                document.getElementById("fechaNacimiento").value;

            // obtengo el telefono
            const telefono =
                document.getElementById("telefono").value;

            // obtengo la contraseña
            const password =
                document.getElementById("password").value;



            // valido el nombre usando mi funcion soloLetras
            if (!soloLetras(nombre)) {

                // si contiene numeros o simbolos muestro este mensaje
                document.getElementById("errorNombre").textContent =
                    "El nombre solo debe contener letras";

                // return detiene la validacion
                return;
            }

            // si esta correcto limpio el mensaje de error
            document.getElementById("errorNombre").textContent = "";



            // valido el correo usando mi funcion validarCorreo
            if (!validarCorreo(correo)) {

                document.getElementById("errorCorreo").textContent =
                    "Ingresa un correo valido";

                return;
            }

            document.getElementById("errorCorreo").textContent = "";



            // reviso que el usuario haya seleccionado una fecha
            if (fechaNacimiento === "") {

                alert("Ingresa tu fecha de nacimiento");

                return;
            }



            // llamo a mi funcion para calcular la edad
            // guardo el resultado en la variable edad
            const edad =
                calcularEdad(fechaNacimiento);



            // uso mi funcion para revisar que tenga minimo 18 años
            if (!esMayorDeEdad(fechaNacimiento)) {

                alert("Debes ser mayor de edad");

                return;
            }



            // uso validarLongitud para comprobar
            // que el telefono tenga 10 digitos
            if (!validarLongitud(telefono, 10)) {

                alert("El telefono debe tener 10 digitos");

                return;
            }



            // uso mi primera funcion agregada
            // convierte por ejemplo:
            // 9511234567 en (951) 123-4567
            const telefonoFormateado =
                formatearTelefono(telefono);



            // reviso que la contraseña cumpla
            // con todos los requisitos
            if (!validarPassword(password)) {

                alert(
                    "La contraseña debe tener minimo 8 caracteres, " +
                    "una mayuscula, una minuscula, " +
                    "un numero y un caracter especial"
                );

                return;
            }



            // uso mi segunda funcion agregada
            // el resultado puede ser debil, media o fuerte
            const fortaleza =
                medirFortalezaContrasena(password);



            // si todos los datos son correctos
            // muestro los resultados
            alert(
                "Datos correctos" +
                "\nEdad: " + edad +
                "\nTelefono: " + telefonoFormateado +
                "\nFortaleza de contraseña: " + fortaleza
            );

        });

    }

});