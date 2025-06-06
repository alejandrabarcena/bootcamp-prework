// Cambiar fondo al azar cuando el usuario haga clic
const colores = [
  "linear-gradient(to right, #f8a8d1, #9c27b0)", // Rosa a morado
  "linear-gradient(to right, #ff7e5f, #feb47b)", // Naranja a amarillo
  "linear-gradient(to right, #00c6ff, #0072ff)", // Azul a azul claro
  "linear-gradient(to right, #ff6a00, #ee0979)"  // Rojo a rosa
];

function changeColor() {
  document.body.style.background = colores[Math.floor(Math.random() * colores.length)];
}

// Animación de rebote para los botones
let buttons = document.querySelectorAll('.vibe-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('bounce');
    setTimeout(() => {
      button.classList.remove('bounce');
    }, 1500); // Duración de la animación
  });
});
