## Actividad 2_Utileria-js
Repositorio de la Actividad 2, con ejercicios js, css.

Utileria.js es una pequeña librería desarrollada con **JavaScript**, creada para facilitar la revisión de información que un usuario escribe dentro de un formulario.

El proyecto permite comprobar datos como correos, nombres y contraseñas. También incluye herramientas para calcular la edad, identificar si una persona es mayor de edad, darle formato a un número telefónico y conocer la fortaleza de una contraseña.
Demo en vivo: https://hernandezguzmanconcepcionescarleth.github.io/utileria-js/
## Instalación

Descarga `js/utileria.js` e inclúyelo antes de tu propio guión:

```html
<script src="js/utileria.js"></script>
```

Las funciones quedan disponibles globalmente.

## Funciones disponibles

### validarCorreo(correo) → boolean

Comprueba si el texto ingresado tiene la estructura básica de una dirección de correo electrónico.

```javascript
validarCorreo("scarlett@gmail.com"); // true
validarCorreo("scarlett@gmail");     // false
```

El resultado será `true` cuando el formato sea válido y `false` cuando no lo sea.

### soloLetras(texto) → boolean

Revisa que el contenido tenga únicamente letras y espacios. También permite utilizar letras acentuadas y la letra ñ.

```javascript
soloLetras("Oaxaca de Juárez"); // true
soloLetras("Oaxaca123");        // false
```

Esta función se utiliza para validar campos como el nombre y la ciudad de origen.

### validarLongitud(numero, maxLongitud) → boolean

Comprueba que la cantidad de caracteres de un número no sea mayor al límite establecido.

```javascript
validarLongitud(951123, 6);  // true
validarLongitud(9511234, 6); // false
```

### calcularEdad(fechaNacimiento) → number

Obtiene la edad de una persona tomando como referencia su fecha de nacimiento y la fecha actual.

```javascript
calcularEdad("2000-04-08"); // 26
```

La edad obtenida puede cambiar dependiendo de la fecha en que se ejecute la función.

### esMayorDeEdad(fechaNacimiento) → boolean

Determina si una persona ya cumplió los 18 años.

```javascript
esMayorDeEdad("2000-04-08"); // true
esMayorDeEdad("2012-06-20"); // false
```

Esta función trabaja junto con `calcularEdad()` y su resultado se muestra en la ventana modal del formulario.

### validarPassword(password) → boolean

Comprueba que una contraseña tenga un nivel básico de seguridad. Para ser válida necesita tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.

```javascript
validarPassword("Scarlett@25"); // true
validarPassword("scarlett25");  // false
```

Esta validación se utiliza en el archivo `login.html`.

## Funciones adicionales

Además de las funciones principales, agregué dos funciones para complementar el funcionamiento de la librería.

### formatearTelefono(numero) → string

Convierte un teléfono de 10 dígitos a un formato más fácil de leer.

```javascript
formatearTelefono("9514567890");
// Resultado: "(951) 456-7890"
```

Cuando el valor no contiene 10 dígitos, la función regresa el dato original.

```javascript
formatearTelefono("95145");
// Resultado: "95145"
```

### medirFortalezaContrasena(contrasena) → string

Analiza algunas características de la contraseña y muestra un nivel de seguridad.

Los resultados posibles son `Debil`, `Media` y `Fuerte`.

```javascript
medirFortalezaContrasena("hola");        // "Debil"
medirFortalezaContrasena("Scarlett25");  // "Media"
medirFortalezaContrasena("Scarlett@25"); // "Fuerte"
```

Esta función se ejecuta mientras el usuario escribe su contraseña en el login.

## Funcionamiento del proyecto

La librería se integró en dos páginas principales. En `login.html` se valida que el correo y la contraseña tengan un formato correcto. Cuando los datos cumplen las condiciones, el usuario puede continuar al formulario.

En `index.html` se solicitan datos como nombre, correo, fecha de nacimiento, ciudad de origen y teléfono. Después de validar la información, se abre una ventana modal donde se muestra la edad calculada, si la persona es mayor de edad y el teléfono con formato.
## Capturas
Consola(Funciones Obligatorias)
<img width="2558" height="1508" alt="Captura de pantalla 2026-09-24 175948" src="https://github.com/user-attachments/assets/18223a3a-fc24-419b-bc32-161206b3d6d9" />

Consola(Funciones Propias)
<img width="2558" height="1494" alt="Captura de pantalla 2026-09-24 180623" src="https://github.com/user-attachments/assets/779ad172-b769-418c-ba98-bc00f6b215fb" />
<img width="2558" height="1494" alt="Captura de pantalla 2026-09-24 180623" src="https://github.com/user-attachments/assets/d4324276-cf6c-4932-8764-d8f1faf30d47" />

Registro(Modal)
<img width="1288" height="1462" alt="Captura de pantalla 2026-09-24 181215" src="https://github.com/user-attachments/assets/aa71227a-0cac-4ddb-83c7-23ec387d8752" />

Login
<img width="1084" height="1004" alt="Captura de pantalla 2026-09-24 181329" src="https://github.com/user-attachments/assets/46dfb51f-554d-46b2-a987-e7f2639155a9" />


## Video

## Autor: 
https://github.com/HernandezGuzmanConcepcionEscarleth/utileria-js










