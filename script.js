

//Aqui colocamos el codigo para recibir el mensaje que envia carrito para cerrar el iframe

document.querySelector('.carrito').addEventListener('click', function(e) {
  e.preventDefault();
  const modal = document.getElementById('carritoModal');
  const iframe = document.getElementById('iframeCarrito');
  iframe.src = `${window.location.origin}/carrito/index.html`;
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


//Aqui colocamos el codigo para recibir el mensaje que envia carrito para cerrar el iframe

document.querySelector('.papa').addEventListener('click', function(e) {
  e.preventDefault();
  const modal = document.getElementById('carritoModal');
  const iframe = document.getElementById('iframeCarrito');
  iframe.src = `${window.location.origin}/barra/index.html`;
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

//AQUI AMOS A COLOCAR LA ALERTA DE PRODUCTO AGREGADO A TRU CARRITO
  document.querySelectorAll('.boton3').forEach(boton => {
    boton.addEventListener('click', function() {
      const alerta = document.getElementById('alertaCarrito');
      alerta.classList.add('mostrar');
      alerta.classList.remove('oculto');

      // Ocultar después de 2 segundos
      setTimeout(() => {
        alerta.classList.remove('mostrar');
        alerta.classList.add('oculto');
      }, 2000);
    });
  });



