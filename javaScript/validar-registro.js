class Usuario {
    nomUsuario;
    apeUsuario;
    dniUsuario;
    naciUsuario;
    celUsuario;
    correoUsuario;
    contraUsuario;
    contraConfirmaUsuario;

    constructor(nomUsuario, apeUsuario, dniUsuario, naciUsuario, celUsuario, correoUsuario, contraUsuario, contraConfirmaUsuario) {
        this.nomUsuario = nomUsuario;
        this.apeUsuario = apeUsuario;
        this.dniUsuario = dniUsuario;
        this.naciUsuario = naciUsuario;
        this.celUsuario = celUsuario;
        this.correoUsuario = correoUsuario;
        this.contraUsuario = contraUsuario;
        this.contraConfirmaUsuario = contraConfirmaUsuario;
    }

    get getnomUsuario() {
        return this.nomUsuario;
    }

    get getcorreoUsuario() {
        return this.correoUsuario;
    }
}

function validar() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let numDni = document.getElementById('dni').value;
    let nacimiento = document.getElementById('nacimiento').value;
    let celular = document.getElementById('celular').value;
    let correo = document.getElementById('correo').value;
    let contrasena = document.getElementById('contrasena').value;
    let contrasenaConfirmar = document.getElementById('contrasenaConfirmar').value;

    //VALIDAR NOMBRE
    var ExpRegNom = "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$";
    if (nombre == null || nombre.length == 0) {
        document.getElementById('textoNombre').innerHTML = "Ingresar nombre (obligatorio)";
        document.getElementById('textoNombre').style.color = "red";
        location.href = "#nombre";
        return false;
    } else if (nombre.match(ExpRegNom) == null) {
        document.getElementById('textoNombre').innerHTML = "Ingresar nombre valido (solo letras)";
        document.getElementById('textoNombre').style.color = "red";
        location.href = "#nombre";
        return false;
    } else {
        document.getElementById('textoNombre').innerHTML = "";
    }

    //VALIDAR APELLIDO 
    var ExpRegApe = "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$";
    if (apellido == null || apellido.length == 0) {
        document.getElementById('textoApellido').innerHTML = "Ingresar apellido (obligatorio)";
        document.getElementById('textoApellido').style.color = "red";
        location.href = "#apellido";
        return false;
    } else if (apellido.match(ExpRegApe) == null) {
        document.getElementById('textoApellido').innerHTML = "Ingresar apellido valido (solo letras)";
        document.getElementById('textoApellido').style.color = "red";
        location.href = "#apellido";
        return false;
    } else {
        document.getElementById('textoApellido').innerHTML = "";
    }

    //VALIDAR DNI 
    var ExpRegDni = /^[0-9]+$/;
    if (numDni == null || numDni.length == 0) {
        document.getElementById('textoDni').innerHTML = "Ingresar dni (obligatorio)";
        document.getElementById('textoDni').style.color = "red";
        location.href = "#dni";
        return false;
    } else if (numDni.match(ExpRegDni) == null) {
        document.getElementById('textoDni').innerHTML = "Ingresar dni valido (solo numeros)";
        document.getElementById('textoDni').style.color = "red";
        location.href = "#dni";
        return false;
    } else if (numDni.length != 8) {
        document.getElementById('textoDni').innerHTML = "Ingresar dni valido (8 digitos)";
        document.getElementById('textoDni').style.color = "red";
        location.href = "#dni";
        return false;
    } else {
        document.getElementById('textoDni').innerHTML = "";
    }

    //VALIDAR NACIMIENTO 
    var ExpRegNacimiento = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/; //AÑO/MES/DIA
    let anioUser = parseInt(nacimiento.slice(0, 4));
    let anioActual = new Date().getFullYear();
    anioActual = parseInt(anioActual);

    if (nacimiento == null || nacimiento.length == 0) {
        document.getElementById('textoNacimiento').innerHTML = "Ingresar fecha de nacimiento (obligatorio)";
        document.getElementById('textoNacimiento').style.color = "red";
        location.href = "#nacimiento";
        return false;
    } else if (nacimiento.match(ExpRegNacimiento) == null) {
        document.getElementById('textoNacimiento').innerHTML = "Ingresar fecha de nacimiento valido";
        document.getElementById('textoNacimiento').style.color = "red";
        location.href = "#nacimiento";
        return false;
    } else if ((anioActual - anioUser) < 18) {
        document.getElementById('textoNacimiento').innerHTML = "Debe ser mayor de edad (+18) para registrar usuario";
        document.getElementById('textoNacimiento').style.color = "red";
        location.href = "#nacimiento";
        return false;
    } else {
        document.getElementById('textoNacimiento').innerHTML = "";
    }

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
    }

    //VALIDAR CONTRASEÑA
    var ExpRegContrasena = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

    if (contrasena == null || contrasena.length == 0) {
        document.getElementById('textoContrasena').innerHTML = "Ingresar contraseña (obligatorio)";
        document.getElementById('textoContrasena').style.color = "red";
        location.href = "#correo";
        return false;
    } else if (contrasena.match(ExpRegContrasena) == null) {
        document.getElementById('textoContrasena').innerHTML = "La contraseña debe contener :";
        document.getElementById('textoContrasena').innerHTML += "<br>Una letra minuscula";
        document.getElementById('textoContrasena').innerHTML += "<br>Una letra mayuscula";
        document.getElementById('textoContrasena').innerHTML += "<br>Un numero";
        document.getElementById('textoContrasena').innerHTML += "<br>Un caracter especial";
        document.getElementById('textoContrasena').innerHTML += "<br>Minimo 8 digitos";
        document.getElementById('textoContrasena').style.color = "red";
        location.href = "#correo";
        return false;
    } else {
        document.getElementById('textoContrasena').innerHTML = "";
    }

    //VALIDAR CONFIRMACION DE CONTRASEÑA
    if (contrasenaConfirmar == null || contrasenaConfirmar.length == 0) {
        document.getElementById('textoContrasenaConfirmar').innerHTML = "Ingresar contraseña nuevamente (obligatorio)";
        document.getElementById('textoContrasenaConfirmar').style.color = "red";
        location.href = "#contrasenaConfirmar";
        return false;
    } else if (contrasena != contrasenaConfirmar) {
        document.getElementById('textoContrasenaConfirmar').innerHTML = "La contraseña no coincide";
        document.getElementById('textoContrasenaConfirmar').style.color = "red";
        location.href = "#contrasenaConfirmar";
        return false;
    } else {
        document.getElementById('textoContrasenaConfirmar').innerHTML = "";
    }

    //VALIDAR CHECK 1
    if (document.getElementById('check1').checked != true) {
        document.getElementById('textoCheck1').innerHTML = "Debe aceptar la opcion para registrar el usuario";
        document.getElementById('textoCheck1').style.color = "red";
        location.href = "#check1";
        return false
    } else {
        document.getElementById('textoCheck1').innerHTML = "";
    }

    //VALIDAR CHECK 2
    if (document.getElementById('check2').checked != true) {
        document.getElementById('textoCheck2').innerHTML = "Debe aceptar la opcion para registrar el usuario";
        document.getElementById('textoCheck2').style.color = "red";
        location.href = "#check2";
        return false
    } else {
        document.getElementById('textoCheck2').innerHTML = "";
    }

    //posterior la validacion ingresamos los datos en una clase
    const dniUsuario = new Usuario(nombre, apellido, numDni, nacimiento, celular, correo, contrasena, contrasenaConfirmar);
    console.log(dniUsuario);
    console.log(dniUsuario.getnomUsuario);

    alert("Bienvenido : " + dniUsuario.getnomUsuario + " se envio un correo a " + dniUsuario.getcorreoUsuario + " para su confirmacion.");

    //guardamos los datos en una cookie de manera temporal
    let usuario = {
        "dni":numDni,
        "correo": correo,
        "contrasena": contrasena
    }
    document.cookie = correo + "=" + JSON.stringify(usuario);
}