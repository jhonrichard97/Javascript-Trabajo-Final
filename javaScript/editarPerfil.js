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
/*
let ga=document.getElementById('cajaForm');
let texto="";

texto =texto +'<input type="text" value="'+sessionStorage.getItem('nombre')+'"disabled><br>'
texto =texto +'<input type="text" value="'+sessionStorage.getItem('apellido')+'"disabled><br>'
texto =texto +'<input type="text" value="'+sessionStorage.getItem('numDni')+'"disabled><br>'
texto =texto +'<input type="date" value="'+sessionStorage.getItem('nacimiento')+'"disabled><br>'
texto =texto +'<input type="text" value="'+sessionStorage.getItem('celular')+'"disabled><br>'
texto =texto +'<input type="email" value="'+sessionStorage.getItem('correo')+'"disabled><br>'

ga.innerHTML=texto;*/

let nombre=document.getElementById('nombre');
nombre.value=sessionStorage.getItem('nombre');

let apellido=document.getElementById('apellido');
apellido.value=sessionStorage.getItem('apellido');

let numDni=document.getElementById('dni');
numDni.value=sessionStorage.getItem('numDni');

let nacimiento=document.getElementById('nacimiento');
nacimiento.value=sessionStorage.getItem('nacimiento');

let celular=document.getElementById('celular');
celular.value=sessionStorage.getItem('celular');

let correo=document.getElementById('correo');
correo.value=sessionStorage.getItem('correo');