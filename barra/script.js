//Aqui esta e mensaje de cerrar la ventana abierta desde la pagina principal 
document.querySelector('.imagen').addEventListener('click', function(e) {
    e.preventDefault();
    window.parent.postMessage('cerrarCarrito', '*');
});

//esto lo que hace es enviar un mensaje al documento padre(la pagina principal), cuando se haga clic en la imagen cerrar1

document.querySelector('.titulo8').addEventListener('click', function(e) {
  e.preventDefault();

  const modal = document.getElementById('carritoModal');
  const iframe = document.getElementById('iframeCarrito');

  // Establece la URL del iframe
  iframe.src = "../Mi cuenta/index.html";
  modal.classList.add('abierto');
});


document.getElementById('carritoModal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('abierto');
    document.getElementById('iframeCarrito').src = "";
  }
});

//Aqui colocamos el codigo para recibir el mensaje que envia carrito para cerrar el iframe

document.querySelector('.titulo8').addEventListener('click', function(e) {
  e.preventDefault();
  const modal = document.getElementById('carritoModal');
  const iframe = document.getElementById('iframeCarrito');
  iframe.src = "../Mi cuenta/index.html";
  modal.classList.add('abierto');
});

//hasta aqui lo que me hace es abrir la pagina de mi cuenta cuando le doy clic a mi cuenta desde el index barra



