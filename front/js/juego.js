document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-jugadores");
  let seleccionados = [];

  fetch("http://localhost:3000/jugadores")
    .then(res => res.json())
    .then(data => {
      data.forEach(jugador => {
        const boton = document.createElement("button");
        boton.className = "jugador";
        boton.innerHTML = `<img src="assets/${jugador.imagen}" alt="${jugador.nombre}" />`;

        boton.onclick = () => {
          boton.classList.toggle("seleccionado");
          if (boton.classList.contains("seleccionado")) {
            seleccionados.push(jugador);
          } else {
            seleccionados = seleccionados.filter(j => j.id !== jugador.id);
          }

          if (seleccionados.length === 4) {
            const categoria = seleccionados[0].categoria;
            const todosIguales = seleccionados.every(j => j.categoria === categoria);
            const usuario = new URLSearchParams(window.location.search).get("username");

            fetch("http://localhost:3000/partida", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                usuario,
                resultado: todosIguales ? "ganada" : "perdida"
              })
            });

            window.location.href = todosIguales ? "ganaste.html" : "perdiste.html";
          }
        };

        contenedor.appendChild(boton);
      });
    });
});
