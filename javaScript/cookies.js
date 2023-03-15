// Función para validar usuario ingresado
function primeraFuncion() {

    if(sessionStorage.getItem('sesion')!=null){
        let estado = sessionStorage.getItem('sesion');
        let nombre = sessionStorage.getItem('nombre').toUpperCase();
        let apellido = sessionStorage.getItem('apellido').toUpperCase();
    
        if (estado == 'true') {
            document.getElementById('user').innerHTML = 'HOLA, ' + nombre + " " + apellido;
        }
    }
}