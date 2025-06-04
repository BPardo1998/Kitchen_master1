  const btnBuscar = document.getElementById("btn-buscar");
  const inputBusqueda = document.getElementById("input-busqueda");

  btnBuscar.addEventListener("click", () => {
    btnBuscar.style.display = "none";
    inputBusqueda.style.display = "block";
    inputBusqueda.focus();
  });

  inputBusqueda.addEventListener("blur", () => {
    inputBusqueda.style.display = "none";
    btnBuscar.style.display = "flex";
  });