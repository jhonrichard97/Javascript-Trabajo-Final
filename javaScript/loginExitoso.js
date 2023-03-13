function validarUser() {
    let estado = sessionStorage.getItem('sesion');
    let nombre = sessionStorage.getItem('nombre').toUpperCase();
    let apellido = sessionStorage.getItem('apellido').toUpperCase();

    if (estado == 'true') {
        document.getElementById('user').innerHTML = 'HOLA, ' + nombre + " " + apellido;
    }
}

let botonUser = document.getElementById('user');

botonUser.addEventListener('click',editarPerfil);

function editarPerfil(){
    let estado = sessionStorage.getItem('sesion');
    if(estado=='true'){
        window.location.href="editarPerfil.html";
    }else{
        window.location.href="login.html";
    }
}