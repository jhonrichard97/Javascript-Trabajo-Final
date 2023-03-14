function validarUser() {
    let estado = sessionStorage.getItem('sesion');
    let nombre = sessionStorage.getItem('nombre').toUpperCase();
    let apellido = sessionStorage.getItem('apellido').toUpperCase();

    if (estado == 'true') {
        document.getElementById('user').innerHTML = 'HOLA, ' + nombre + " " + apellido;
    }
}

let botonUser = document.getElementById('user');

botonUser.addEventListener('click', editarPerfil);

function editarPerfil() {
    let estado = sessionStorage.getItem('sesion');
    if (estado == 'true') {
        window.location.href = "editarPerfil.html";
    } else {
        window.location.href = "login.html";
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

let nombre = document.getElementById('nombre');
nombre.value = sessionStorage.getItem('nombre');

let apellido = document.getElementById('apellido');
apellido.value = sessionStorage.getItem('apellido');

let numDni = document.getElementById('dni');
numDni.value = sessionStorage.getItem('numDni');

let nacimiento = document.getElementById('nacimiento');
nacimiento.value = sessionStorage.getItem('nacimiento');

let celular = document.getElementById('celular');
celular.value = sessionStorage.getItem('celular');

let correo = document.getElementById('correo');
correo.value = sessionStorage.getItem('correo');

//DESABILITAMOS LOS INPUT QUE NO SE PODRA ACTUALIZAR

$(document).ready(function () {
    $("#nombre").attr('disabled', 'disabled');
    $("#apellido").attr('disabled', 'disabled');
    $("#dni").attr('disabled', 'disabled');
    $("#nacimiento").attr('disabled', 'disabled');
    $("#check1").attr('disabled', 'disabled');
    $("#check2").attr('disabled', 'disabled');
});

function validar() {

    /*let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let numDni = document.getElementById('dni').value;
    let nacimiento = document.getElementById('nacimiento').value;*/
    let celular = document.getElementById('celular').value;
    let correo = document.getElementById('correo').value;
    let contrasenaAnterior = document.getElementById('contrasenaAnterior').value;
    let contrasenaNueva = document.getElementById('contrasenaNueva').value;

    let cambioContra=false;
    let cambioCelular=false;
    let cambioCorreo=false;

    //VALIDAR NUMERO CELULAR 
    var ExpRegCel = "^[0-9]+$";
    if (celular == null || celular.length == 0) {
        document.getElementById('textoCelular').innerHTML = "Ingresar celular (obligatorio)";
        document.getElementById('textoCelular').style.color = "red";
        location.href = "#celular";
        return false;
    } else if (celular.match(ExpRegCel) == null) {
        document.getElementById('textoCelular').innerHTML = "Ingresar celular valido (solo numeros)";
        document.getElementById('textoCelular').style.color = "red";
        location.href = "#celular";
        return false;
    } else if (celular.length != 9) {
        document.getElementById('textoCelular').innerHTML = "Ingresar celular valido (9 digitos)";
        document.getElementById('textoCelular').style.color = "red";
        location.href = "#celular";
        return false;
    } else {
        document.getElementById('textoCelular').innerHTML = "";
        sessionStorage.setItem('celular', celular);
        cambioCelular=true;
    }

    //VALIDAR CORREO ELECTRONICO
    var ExpRegCorreo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (correo == null || correo.length == 0) {
        document.getElementById('textoCorreo').innerHTML = "Ingresar correo (obligatorio)";
        document.getElementById('textoCorreo').style.color = "red";
        location.href = "#correo";
        return false;
    } else if (correo.match(ExpRegCorreo) == null) {
        document.getElementById('textoCorreo').innerHTML = "Ingresar correo valido";
        document.getElementById('textoCorreo').style.color = "red";
        location.href = "#correo";
        return false;
    } else {
        document.getElementById('textoCorreo').innerHTML = "";
        sessionStorage.setItem('correo', correo);
        cambioCorreo=true;
    }

    //VALIDAR LA CONTRASEÑA ANTERIOR
    let contraActual = sessionStorage.getItem('contrasena');
    /*if (contrasenaAnterior == null || contrasenaAnterior.length == 0) {
        document.getElementById('textoContrasena').innerHTML = "Ingresar contraseña anterior(obligatorio) no debe estar vacio";
        document.getElementById('textoContrasena').style.color = "red";
        location.href = "#contrasenaAnterior";
        return false;
    } else*/

    if ((contrasenaAnterior == null || contrasenaAnterior.length == 0) && (contrasenaNueva == null || contrasenaNueva.length == 0)) {
        document.getElementById('textoContrasena').innerHTML = "";
        alert('ejecuto el primer if');
    } else if ((contrasenaAnterior != null || contrasenaAnterior.length != 0) && (contrasenaNueva == null || contrasenaNueva.length == 0)) {

        document.getElementById('textoContrasenaConfirmar').innerHTML = "Ingrese nueva contraseña ga";
        document.getElementById('textoContrasenaConfirmar').style.color = "red";
        location.href = "#textoContrasenaConfirmar";

        //VALIDAR CONTRASEÑA ANTERIOR SI COINCIDE
        if (contrasenaAnterior != contraActual) {
            document.getElementById('textoContrasena').innerHTML = "Contraseña no coincide s";
            document.getElementById('textoContrasena').style.color = "red";
            location.href = "#contrasenaAnterior";
            return false;
        } else {
            document.getElementById('textoContrasena').innerHTML = "";
        }

        return false;

    } else if ((contrasenaAnterior == null || contrasenaAnterior.length == 0) && (contrasenaNueva != null || contrasenaNueva.length != 0)) {
        document.getElementById('textoContrasena').innerHTML = "Ingrese contraseña anterior 2";
        document.getElementById('textoContrasena').style.color = "red";
        location.href = "#contrasenaAnterior";
        return false;
    } else if ((contrasenaAnterior != null || contrasenaAnterior.length != 0) && (contrasenaNueva != null || contrasenaNueva.length != 0)) {

        //VALIDAR CONTRASEÑA ANTERIOR SI COINCIDE
        if (contrasenaAnterior != contraActual) {
            document.getElementById('textoContrasena').innerHTML = "Contraseña no coincide s";
            document.getElementById('textoContrasena').style.color = "red";
            location.href = "#contrasenaAnterior";
            return false;
        } else {
            document.getElementById('textoContrasena').innerHTML = "";
        }
        //VALIDAR CONTRASEÑA NUEVA
        var ExpRegContrasena = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

        if (contrasenaNueva.match(ExpRegContrasena) == null) {
            document.getElementById('textoContrasenaConfirmar').innerHTML = "La contraseña debe contener :";
            document.getElementById('textoContrasenaConfirmar').innerHTML += "<br>Una letra minuscula";
            document.getElementById('textoContrasenaConfirmar').innerHTML += "<br>Una letra mayuscula";
            document.getElementById('textoContrasenaConfirmar').innerHTML += "<br>Un numero";
            document.getElementById('textoContrasenaConfirmar').innerHTML += "<br>Un caracter especial";
            document.getElementById('textoContrasenaConfirmar').innerHTML += "<br>Minimo 8 digitos";
            document.getElementById('textoContrasenaConfirmar').style.color = "red";
            location.href = "#correo";
            return false;
        } else {
            document.getElementById('textoContrasenaConfirmar').innerHTML = "";
            sessionStorage.setItem('contrasena', contrasenaNueva);
            sessionStorage.setItem('contrasenaConfirmar', contrasenaNueva);
            cambioContra=true;
        }
    }
}