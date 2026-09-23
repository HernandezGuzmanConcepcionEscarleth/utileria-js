// 1. Validar correo
function validarCorreo(correo) {

    const regex = /^[^@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(correo);
}


// 2. Validar que solo tenga letras
function soloLetras(texto) {

    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    return regex.test(texto);
}


// 3. Validar longitud
function validarLongitud(numero, maxLongitud) {

    return String(numero).length <= maxLongitud;
}


// 4. Calcular edad
function calcularEdad(fechaNacimiento) {

    // Separar año, mes y dia
    const partes = fechaNacimiento.split("-");

    const anio = parseInt(partes[0]);
    const mes = parseInt(partes[1]) - 1;
    const dia = parseInt(partes[2]);

    const nacimiento = new Date(anio, mes, dia);

    const hoy = new Date();

    let edad =
        hoy.getFullYear() - nacimiento.getFullYear();

    const diferenciaMes =
        hoy.getMonth() - nacimiento.getMonth();

    if (
        diferenciaMes < 0 ||
        (diferenciaMes === 0 &&
        hoy.getDate() < nacimiento.getDate())
    ) {

        edad--;
    }

    return edad;
}


// 5. Validar si es mayor de edad
function esMayorDeEdad(fechaNacimiento) {

    return calcularEdad(fechaNacimiento) >= 18;
}


// 6. Validar contraseña
function validarPassword(password) {

    const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;

    return regex.test(password);
}


// FUNCION LIBRE 1
// Formatear numero telefonico
function formatearTelefono(numero) {

    const soloDigitos =
        String(numero).replace(/\D/g, "");

    // Debe tener 10 digitos
    if (soloDigitos.length !== 10) {

        return numero;
    }

    return `(${soloDigitos.slice(0,3)}) ${soloDigitos.slice(3,6)}-${soloDigitos.slice(6)}`;
}


// FUNCION LIBRE 2
// Medir fortaleza de contraseña
function medirFortalezaContrasena(contrasena) {

    let puntos = 0;

    if (contrasena.length >= 8) puntos++;

    if (/[a-z]/.test(contrasena)) puntos++;

    if (/[A-Z]/.test(contrasena)) puntos++;

    if (/\d/.test(contrasena)) puntos++;

    if (/[^a-zA-Z0-9]/.test(contrasena)) puntos++;


    if (puntos <= 2) {

        return "Debil";
    }

    if (puntos <= 4) {

        return "Media";
    }

    return "Fuerte";
}