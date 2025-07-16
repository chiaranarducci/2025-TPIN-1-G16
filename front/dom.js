const jugadores = document.querySelectorAll('.jugador');
const botonEnviar = document.getElementById('botonEnviar');

let seleccionados = [];

jugadores.forEach(jugador => {
  jugador.addEventListener('click', () => {
    jugador.classList.toggle('seleccionado');

    if (seleccionados.includes(jugador)) {
      seleccionados = seleccionados.filter(j => j !== jugador);
    } else {
      seleccionados.push(jugador);
    }
  });
});

botonEnviar.addEventListener('click', () => {
  if (seleccionados.length === 4) {
    alert('¡Seleccionaste 4 jugadores! Verificando conexión...')
  } else {
    alert('Debes seleccionar exactamente 4 jugadores.');
  }
});
