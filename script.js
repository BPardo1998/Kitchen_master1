
<<<<<<< HEAD
=======

>>>>>>> b15afa2b58f4db35d0d567b0815502d623d08d70
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



