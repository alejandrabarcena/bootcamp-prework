// Cambiar fondo al azar cada vez que el usuario hace clic en el botón
const colores = [
  "linear-gradient(to right, #f8a8d1, #9c27b0)", // Rosa a morado
  "linear-gradient(to right, #ff7e5f, #feb47b)", // Naranja a amarillo
  "linear-gradient(to right, #00c6ff, #0072ff)", // Azul a azul claro
  "linear-gradient(to right, #ff6a00, #ee0979)"  // Rojo a rosa
];

function changeColor() {
  document.body.style.background = colores[Math.floor(Math.random() * colores.length)];
}

// Animación de rebote (bouncing) para el botón
let button = document.querySelector("button");

button.addEventListener("click", () => {
  // Cambiar el texto del botón para hacerlo más divertido
  button.innerHTML = "🎨 ¡Pinta la página otra vez! 🎨";

  // Agregar la animación de "bouncing" al botón
  button.classList.add("bounce");

  // Después de 2 segundos, devolver el texto original y quitar la animación
  setTimeout(() => {
    button.innerHTML = "🎨 Cambiar Fondo";
    button.classList.remove("bounce");
  }, 2000); // Duración de la animación
});

// Función para mostrar un mensaje de bienvenida aleatorio al cargar la página
const welcomeMessages = [
  "¡Bienvenida, Alejandra! 💖",
  "¡A crear magia con código! 🔮",
  "¡El mundo es tu lienzo! 🎨",
  "¡Sigue brillando como siempre! ✨"
];

window.onload = () => {
  const welcomeMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
  alert(welcomeMessage);  // Muestra un mensaje de bienvenida al cargar la página
};

// Efecto de escritura animada para el texto del título
let titulo = document.querySelector("h1");
let texto = titulo.textContent;
titulo.textContent = "";

let i = 0;
function escribirTexto() {
  if (i < texto.length) {
    titulo.textContent += texto.charAt(i);
    i++;
    setTimeout(escribirTexto, 100); // Velocidad de la animación de escritura
  }
}

setTimeout(escribirTexto, 1000); // Iniciar la animación después de 1 segundo

