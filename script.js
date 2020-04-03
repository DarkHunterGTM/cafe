var formulario = document.querySelector('#formulario');
var erroresUl = document.querySelector('#errores');
var inputNombre = document.querySelector('#nombre');
var inputTelefono = document.querySelector('#telefono');
var inputCorreo = document.querySelector('#correo');
var botonGuardar = document.querySelector('#guardar');
function enviarFormulario() {
    // Variables
    var errores = [];
    // Validamos nombre
    //// ¿Es un numero?
    if (!isNaN(parseInt(inputNombre.value)))
        errores.push('El nombre no puede ser un número');
    //// Es obligatorio
    if (inputNombre.value === '')
        errores.push('El nombre es obligatorio');
    if (isNaN(parseInt(inputTelefono.value)))
        errores.push('El telefono debe ser un número');
    //// Es obligatorio
    if (inputTelefono.value === '')
        errores.push('El Telefono es obligatorio');
    if (!isNaN(parseInt(inputCorreo.value)))
        errores.push('debe ingresar un correoo');
    //// Es obligatorio
    if (inputCorreo.value === '')
        errores.push('El correo es obligatorio');
    // Mostramos los errores
    imprimirErrores(errores);
    // Enviamos formulario
    if (errores.length === 0)
        formulario.submit();
}
/**
 * Imprime todos los errores en el UL
 * @param errores Array - Frases de error
 */
function imprimirErrores(errores) {
    // Limpiamos los errores anteriores en HTML
    erroresUl.textContent = '';
    // Generamos todos LI con su mensaje
    errores.forEach(function (mensaje) {
        // Creamos nuevo LI
        var nuevoLi = document.createElement('li');
        nuevoLi.textContent = mensaje;
        // Lo añadimos dentro de nuestro UL
        erroresUl.appendChild(nuevoLi);
    });
}
botonGuardar.addEventListener('click', enviarFormulario);
