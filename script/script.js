const imagenes = document.querySelectorAll('.simultaneas img');
    let index = 0;

    setInterval(() => {
      // Oculta todas las imágenes
      imagenes.forEach(img => img.classList.remove('mostrar'));

      // Muestra la siguiente imagen
      index = (index + 1) % imagenes.length;
      imagenes[index].classList.add('mostrar');
    }, 5000); // 5000 ms = 5 segundos