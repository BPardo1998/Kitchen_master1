document.querySelector('.cerrar3').addEventListener('click', function(e) {
    e.preventDefault();
    window.parent.postMessage('cerrarCarrito', '*');
});

//esto lo que hace es enviar un mensaje al documento padre(la pagina principal), cuando se haga clic en la imagen material-symbols-outlined que es la x  de la hoja contraseña

//AHORA VA,MOS A CREAR ITERACION PARA QUE CUANDO DE CLIC EN CONFIRMAR, ME MUESTRE LA PAGINA DE CORTREO ENVIADO

document.querySelector('.button-primario').addEventListener('click', function(e) {
  e.preventDefault();

  const modal = document.getElementById('carritoModal');
  const iframe = document.getElementById('iframeCarrito');

  // Establece la URL del iframe
  iframe.src = "../correo_enviado/index.html";
  modal.classList.add('abierto');
});


document.getElementById('carritoModal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('abierto');
    document.getElementById('iframeCarrito').src = "";
  }
});
