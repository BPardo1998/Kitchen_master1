document.querySelector('.cerrar1').addEventListener('click', function(e) {
    e.preventDefault();
    window.parent.postMessage('cerrarCarrito', '*');
});

//esto lo que hace es enviar un mensaje al documento padre(la pagina principal), cuando se haga clic en la imagen cerrar1