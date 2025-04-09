// Cambiar fondo al azar cada vez que se haga clic en el botón
const colores = [
  "linear-gradient(to right, #f8a8d1, #9c27b0)",
  "linear-gradient(to right, #ff7e5f, #feb47b)",
  "linear-gradient(to right, #00c6ff, #0072ff)",
  "linear-gradient(to right, #ff6a00, #ee0979)"
];

function changeColor() {
  document.body.style.background = colores[Math.floor(Math.random() * colores.length)];
}
