// Función para el modal de promoción
function primeraFuncion() {
    const modalEntrada = new bootstrap.Modal("#modalEntrada");
    modalEntrada.show();
    /*const modalEntrada2 = new bootstrap.Modal("#galleta");
    modalEntrada2.show();*/

    if (sessionStorage.getItem('sesion') != null) {
        let estado = sessionStorage.getItem('sesion');
        let nombre = sessionStorage.getItem('nombre').toUpperCase();
        let apellido = sessionStorage.getItem('apellido').toUpperCase();

        if (estado == 'true') {
            document.getElementById('user').innerHTML = 'HOLA, ' + nombre + " " + apellido;
        }
    }
    let btnCarrito=document.getElementById('btnCarrito');

    let hayCookie=document.cookie.split(';').length;
    
    if(hayCookie==1){
        btnCarrito.innerHTML='<img src="images/car.png" alt="" height="100px"></img>';
    }else if(hayCookie>1){
        btnCarrito.innerHTML='<img src="images/carComplete.png" alt="" height="100px"></img>';
    }
}

//BUSCADOR DE PRODUCTOS CON JQUERY
$(document).ready(function () {
    $('#filtrar').keyup(function () {
        var nombres = $('.tituloProducto');
        var buscando = $(this).val();
        var item = '';
        for (var i = 0; i < nombres.length; i++) {
            item = $(nombres[i]).html().toLowerCase();
            for (var x = 0; x < item.length; x++) {
                if (buscando.length == 0 || item.indexOf(buscando) > -1) {
                    $(nombres[i]).parents('.producto').show();
                } else {
                    $(nombres[i]).parents('.producto').hide();
                }
            }
        }
    });
});

let botonUser = document.getElementById('user');

botonUser.addEventListener('click', editarPerfil);

function editarPerfil() {
    let estado = sessionStorage.getItem('sesion');
    if (estado == 'true') {
        window.location.href = "pages/editarPerfil.html";
    } else {
        window.location.href = "pages/login.html";
    }
}

function myFunctionCookie() {
    var x = document.getElementById("aceptarCookie");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

let comprar=document.getElementById('btnComprar');

comprar.addEventListener('click',function(){
    if(sessionStorage.getItem('sesion')==null || sessionStorage.getItem('sesion')==false){
        alert('FAVOR INICIAR SESION PARA PROCEDER CON LA COMPRA');
    }else{
        alert('COMPRA EXITOSA, GRACIAS POR SU PREFERENCIA');
        eliminarCookieCompra();
    }
});

function eliminarCookieCompra() {
    console.log("Compra exitosa se vacia el carrito");
    for(var i=0;i<20;i++){
        document.cookie = "cookieProducto"+i+"=; max-age=0";
    }
    document.cookie = "contador=1";
  }

let btnCarrito=document.getElementById('btnCarrito');

let hayCookie=document.cookie.split(';').length;

if(hayCookie==1){
    btnCarrito.innerHTML='<img src="images/car.png" alt=""></img>';
}else if(hayCookie>1){
    btnCarrito.innerHTML='<img src="images/carComplete.png" alt=""></img>';
}