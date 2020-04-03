
let formulario: HTMLFormElement = document.querySelector('#formulario');
let erroresUl: HTMLUListElement = document.querySelector('#errores');
let inputNombre: HTMLInputElement = document.querySelector('#nombre');
let inputTelefono: HTMLInputElement = document.querySelector('#telefono');
let inputCorreo: HTMLInputElement = document.querySelector('#correo');
let botonGuardar: HTMLButtonElement = document.querySelector('#guardar');

function enviarFormulario(): void {

    // Variables

    let errores: string[] = []

    // Validamos nombre

    //// ¿Es un numero?

    if (isNaN(parseInt(inputNombre.value))) errores.push('El nombre no puede ser un número')
    //// Es obligatorio

    if (inputNombre.value === '') errores.push('El nombre es obligatorio')

    if (isNaN(parseInt(inputTelefono.value))) errores.push('El telefono debe  ser un número')
    //// Es obligatorio

    if (inputTelefono.value === '') errores.push('El telefono es obligatorio')

    if (isNaN(parseInt(inputCorreo.value))) errores.push('El correo no puede ser un número')
    //// Es obligatorio

    if (inputCorreo.value === '') errores.push('la correo es obligatorio')
    // Mostramos los errores

    imprimirErrores(errores)

    // Enviamos formulario

    if (errores.length === 0) formulario.submit()
}

/**
 * Imprime todos los errores en el UL
 * @param errores Array - Frases de error
 */
function imprimirErrores(errores: string[]): void {
    // Limpiamos los errores anteriores en HTML

    erroresUl.textContent = ''
    // Generamos todos LI con su mensaje

    errores.forEach(function(mensaje) {
        // Creamos nuevo LI

        let nuevoLi = document.createElement('li')
        nuevoLi.textContent = mensaje
        // Lo añadimos dentro de nuestro UL

        erroresUl.appendChild(nuevoLi)
    })
}
botonGuardar.addEventListener('click', enviarFormulario)
