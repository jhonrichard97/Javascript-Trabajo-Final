//DECLARAMOS LAS VARIABLES A USAR EN EL CARRITO
var nombreProducto;
var precioAntesProducto;
var precioAhoraProducto;
var cantidadProducto;

//FUNCION PARA CREAR UNA COOKIE
function addCart(objeto) {
  //OBTENER POSICION CONTADOR DE LA COOKIE PARA NOMBRE
  let cookieLeer = document.cookie;
  let posicionCookie = parseInt(cookieLeer.slice(cookieLeer.search("contador") + 9));

  var contenedor = objeto.parentElement;
  // Obtenermos los Datos del producto
  let nombre = contenedor.getElementsByTagName("h3")[0].innerText;
  let precioAntes = contenedor.getElementsByTagName("h5")[0].innerText;
  let precioAhora = contenedor.getElementsByTagName("h4")[0].innerText;

  //creamos el objeto con los datos obtenidos
  let varObject = {
    "name": nombre,
    "price": precioAntes,
    "now": precioAhora
  }

  //VALIDAMOS SI CONTADOR COOKIE YA EXISTE
  if (posicionCookie >= 1) {
    cookieLeer = document.cookie;
    posicionCookie = parseInt(cookieLeer.slice(cookieLeer.search("contador") + 9));
    //INSERTAMOS LA COOKIE COMO UN OBJETO Y NOMENCLATURA
    document.cookie = "cookieProducto" + posicionCookie + "=" + JSON.stringify(varObject);
    posicionCookie++;
    document.cookie = "contador=" + posicionCookie;
    //SINO EXISTE LO CREAMOS CON SU NOMENCLATURA
  } else {
    document.cookie = "contador=1";
    posicionCookie = 1;
    document.cookie = "cookieProducto" + posicionCookie + "=" + JSON.stringify(varObject);
    document.cookie = "contador=2";
  }
}

//FUNCION PARA ACTUALIZAR EL CARRITO DE COMPRAS
function actualizarLista() {
  var lista = document.getElementById("listaCarrito");
  var texto = "";

  let cookieLeer = document.cookie;
  let posicionCookie = parseInt(cookieLeer.slice(cookieLeer.search("contador") + 9));

  let position=parseInt(document.cookie.split(';').length);
  //BUCLE PARA RECORRER LOS PRODUCTOS COOKIE SEGUN EL CONTADOR
  for (var i = 1; i <= position+20; i++) {
    if (verificar(i)==true) {
      obtenerCookie("cookieProducto" + i);
      texto = texto + '<div class="productoListaCarrito">';
      texto = texto + '<button type="button" class="btn-close deleteCookie" onclick="eliminarCookie(this)" data-bs-dismiss="modal" aria-label="Close" id="cookieProducto' + i + '"></button>';
      texto = texto + "<h5 class='tituloProducto'>" + nombreProducto + "</h5>";
      texto = texto + "<p class='precioAntes'>" + precioAntesProducto + "</p>";
      texto = texto + "<p class='precioAhora'>" + precioAhoraProducto + "</p>";
      texto = texto + "</div>";
    }
  }
  lista.innerHTML = texto;
}
function verificar(e){
  return document.cookie.includes('cookieProducto'+e);
}

//FUNCION PARA OBTENER UNA COOKIE
function obtenerCookie(name) {
  let cookie = {};
  let varProducto;
  document.cookie.split(';').forEach(function (el) {
    let [k, v] = el.split('=');
    cookie[k.trim()] = v;
  })
  //DEPURAR EL OBJETO COOKIE
  varProducto = cookie[name].replace('}', '').replace("{", "").replace(/['"]+/g, '');
  varProducto = varProducto.split(",");
  console.log(varProducto);
  //GUARDO LOS VALORES
  nombreProducto = varProducto[0].slice(5);
  precioAntesProducto = varProducto[1].slice(6);
  precioAhoraProducto = varProducto[2].slice(4);
}

function eliminarCookie(object) {
  let id = object.id;
  document.cookie = id + "=; max-age=0";
  console.log("se borro " + id);
  let valorConta = document.cookie.split(';').length;
  valorConta--;
  document.cookie = "contador=" + valorConta;
}