
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


  // AQUI VAMOS A AÑADIR EL CODIGO PARA QUE LAS IOMAGENES DE SIMULTANEAS SE PMUEVAN CADA TRES SEGUNDFOS 
      const imagenes = document.querySelectorAll('.simultaneas img');
        let indice = 0;

      function mostrarSiguienteImagen() {
        imagenes[indice].classList.remove('mostrar');
        indice = (indice + 1) % imagenes.length;
        imagenes[indice].classList.add('mostrar');

    setTimeout(mostrarSiguienteImagen, 3000);
  }

  setTimeout(mostrarSiguienteImagen, 3000);


