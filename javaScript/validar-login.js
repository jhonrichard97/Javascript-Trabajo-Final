function validar() {
    let usuario = document.getElementById('inputEmail').value;
    let contrasena = document.getElementById('inputPassword').value;

    //validar correo
    var ExpRegUsuario = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (usuario == null || usuario.length == 0) {
        document.getElementById('mensajeEmail').innerHTML = "Ingresar correo (obligatorio)";
        document.getElementById('mensajeEmail').style.color = "red";
        location.href = "#inputEmail";
        return false;
    } else if (usuario.match(ExpRegUsuario) == null) {
        document.getElementById('mensajeEmail').innerHTML = "Ingresar correo valido";
        document.getElementById('mensajeEmail').style.color = "red";
        location.href = "#inputEmail";
        return false;
    } else {
        document.getElementById('mensajeEmail').innerHTML = "";
    }

    //validar contraseña
    if (contrasena == null || contrasena.length == 0) {
        document.getElementById('mensajeContrasena').innerHTML = "Ingresar contraseña (obligatorio)";
        document.getElementById('mensajeContrasena').style.color = "red";
        location.href = "#inputPassword";
        return false;
    } else {
        document.getElementById('mensajeContrasena').innerHTML = "";
    }

    var correoCookie;
    var contraCookie;

    function obtenerCookie(name) {
        let cookie = {};
        let varUser;
        document.cookie.split(';').forEach(function (el) {
            let [k, v] = el.split('=');
            cookie[k.trim()] = v;
        })
        //DEPURAR EL OBJETO COOKIE
        if(cookie[name]==undefined){
            return false;
        }
        varUser = cookie[name].replace('}', '').replace("{", "").replace(/['"]+/g, '');
        varUser = varUser.split(",");
        console.log(varUser);
        //GUARDO LOS VALORES
        correoCookie = varUser[1].slice(7);
        contraCookie = varUser[2].slice(11);
        if(correoCookie==usuario && contraCookie==contrasena){
            return true;
        }else{
            return false;
        }
    }

    if(obtenerCookie(usuario)==false){
        document.getElementById('mensajeContrasena').innerHTML = "Usurio y/o contraseña incorrecto";
        document.getElementById('mensajeContrasena').style.color = "red";
        return false;
    }else{
        document.getElementById('mensajeContrasena').innerHTML = "";
    }
}