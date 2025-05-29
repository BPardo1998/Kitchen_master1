document.querySelector('.titulo2').addEventListener('click', function(e) {
  e.preventDefault();

  const modal = document.getElementById('carritoModal');
  const iframe = document.getElementById('iframeCarrito');

  // Establece la URL del iframe
  iframe.src = "../contraseña/index2.html";
  modal.classList.add('abierto');
});


document.getElementById('carritoModal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('abierto');
    document.getElementById('iframeCarrito').src = "";
  }
});
//Aqui colocamos el codigo para recibir el mensaje que envia carrito para cerrar el iframe

document.querySelector('.titulo2').addEventListener('click', function(e) {
  e.preventDefault();
  const modal = document.getElementById('carritoModal');
  const iframe = document.getElementById('iframeCarrito');
  iframe.src = "../contraseña/index2.html";
  modal.classList.add('abierto');
});

// Escuchar mensajes desde el iframe
window.addEventListener('message', function(event) {
  if (event.data === 'cerrarCarrito') {
    const modal = document.getElementById('carritoModal');
    const iframe = document.getElementById('iframeCarrito');
    modal.classList.remove('abierto');
    iframe.src = "";
  }
});
// También cerramos al hacer clic fuera del modal
document.getElementById('carritoModal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('abierto');
    document.getElementById('iframeCarrito').src = "";
  }
});
//AQUI ABAJO VAMOS A LLAMAR AL BOTON INSCRIBETE AQUI Y ESTO NOS VAA LLEVAR A LA PAGINA INSCRIBIRME

document.querySelector('.boton3').addEventListener('click', function(e) {
  e.preventDefault();

  const modal = document.getElementById('carritoModal');
  const iframe = document.getElementById('iframeCarrito');

                             // Establece la URL del iframe
  iframe.src = "../inscribirme/index.html";
  modal.classList.add('abierto');
});

document.getElementById('carritoModal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('abierto');
    document.getElementById('iframeCarrito').src = "";
  }
});
                       //Aqui colocamos el codigo para recibir el mensaje que envia carrito para cerrar el iframe

document.querySelector('.boton3').addEventListener('click', function(e) {
  e.preventDefault();
  const modal = document.getElementById('carritoModal');
  const iframe = document.getElementById('iframeCarrito');
  iframe.src = "../inscribirme/index.html";
  modal.classList.add('abierto');
});

                                                   // Escuchar mensajes desde el iframe
window.addEventListener('message', function(event) {
  if (event.data === 'cerrarCarrito') {
    const modal = document.getElementById('carritoModal');
    const iframe = document.getElementById('iframeCarrito');
    modal.classList.remove('abierto');
    iframe.src = "";
  }
});
                                                       // También cerramos al hacer clic fuera del modal
document.getElementById('carritoModal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('abierto');
    document.getElementById('iframeCarrito').src = "";
  }
});