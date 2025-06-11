// Espera a que el DOM cargue completamente
document.addEventListener('DOMContentLoaded', () => {
  const opciones = document.querySelectorAll('.opcion');
  const contenedorDetalles = document.getElementById('detallePago');
  const botonPagar = document.getElementById('btnPagar');
  let metodoSeleccionado = null;

  const limpiarErrores = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.classList.remove('error'));
  }


  // Maneja la selección del método de pago
  opciones.forEach(opcion => {
    opcion.addEventListener('click', () => {
      opciones.forEach(opt => opt.classList.remove('activo'));
      opcion.classList.add('activo');

      metodoSeleccionado = opcion.dataset.metodo;
      limpiarErrores();

      // Muestra el formulario correspondiente al método
      switch (metodoSeleccionado) {
        case 'credito':
        case 'debito':
          contenedorDetalles.innerHTML = `
            <div class="campo">
              <label for="numero">Número de tarjeta</label>
              <input type="text" id="numero" placeholder="0000 0000 0000 0000" maxlength="19" inputmode="numeric">
              <span id="tipoTarjeta" style="display:block; margin-top:5px; font-size:12px; color:#555;"></span>
            </div>
            <div class="campo-doble">
              <div>
                <label for="vencimiento">Vencimiento</label>
                <input type="text" id="vencimiento" placeholder="MM/AA" maxlength="5" inputmode="numeric">
              </div>
              <div>
                <label for="cvv">CVV</label>
                <div style="position: relative;">
                  <input type="password" id="cvv" placeholder="•••" maxlength="3" inputmode="numeric">
                  <button type="button" id="toggleCVV" style="position: absolute; right: 8px; top: 8px; background: none; border: none; cursor: pointer;">👁</button>
                </div>
              </div>
            </div>
          `;

          // === LÓGICA PARA FORMATO Y VALIDACIÓN ===
          const numeroInput = document.getElementById('numero');
          const vencimientoInput = document.getElementById('vencimiento');
          const cvvInput = document.getElementById('cvv');
          const tipoTarjeta = document.getElementById('tipoTarjeta');
          const toggleCVV = document.getElementById('toggleCVV');

          // Formatear número de tarjeta en bloques de 4 dígitos
          numeroInput.addEventListener('input', () => {
            let valor = numeroInput.value.replace(/\D/g, '').substring(0, 16);
            numeroInput.value = valor.replace(/(.{4})/g, '$1 ').trim();

            // Identifica tipo de tarjeta (básico)
            if (/^4/.test(valor)) tipoTarjeta.textContent = 'Visa (Crédito)';
            else if (/^5[1-5]/.test(valor)) tipoTarjeta.textContent = 'MasterCard (Débito)';
            else tipoTarjeta.textContent = '';
          });

          // Formato automático MM/AA
          vencimientoInput.addEventListener('input', () => {
            let valor = vencimientoInput.value.replace(/\D/g, '').substring(0, 4);
            if (valor.length >= 3) {
              vencimientoInput.value = valor.substring(0, 2) + '/' + valor.substring(2);
            } else {
              vencimientoInput.value = valor;
            }
          });

          // Mostrar u ocultar CVV
          toggleCVV.addEventListener('click', () => {
            if (cvvInput.type === 'password') {
              cvvInput.type = 'text';
              toggleCVV.textContent = '🙈';
            } else {
              cvvInput.type = 'password';
              toggleCVV.textContent = '👁';
            }
          });

          break;

        case 'nequi':
        case 'daviplata':
          contenedorDetalles.innerHTML = `
            <div class="campo">
              <label for="celular">Número de celular</label>
              <input type="text" id="celular" placeholder="3101234567" maxlength="10" inputmode="numeric">
            </div>
          `;
          break;

        default:
          contenedorDetalles.innerHTML = '';
      }
    });
  });

  // Validación al hacer clic en "Confirmar Pago"
  botonPagar.addEventListener('click', () => {
    if (!metodoSeleccionado) {
      alert('Por favor, selecciona un método de pago.');
      return;
    }

    if (metodoSeleccionado === 'credito' || metodoSeleccionado === 'debito') {
      const numero = document.getElementById('numero')?.value.replace(/\s/g, '').trim();
      const vencimiento = document.getElementById('vencimiento')?.value.trim();
      const cvv = document.getElementById('cvv')?.value.trim();

      if (!numero || !vencimiento || !cvv) {
        alert('Completa todos los campos de la tarjeta.');
        return;
      }

      if (numero.length < 13 || numero.length > 16) {
        alert('El número de tarjeta parece inválido.');
        return;
      }

      alert('Pago procesado con tarjeta.');

    } else if (metodoSeleccionado === 'nequi' || metodoSeleccionado === 'daviplata') {
      const celular = document.getElementById('celular')?.value.trim();

      if (!celular || celular.length !== 10) {
        alert('Ingresa un número de celular válido.');
        return;
      }

      alert(`Pago procesado con ${metodoSeleccionado.toUpperCase()}.`);
    }
  });
});