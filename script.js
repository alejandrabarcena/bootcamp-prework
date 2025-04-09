/* Reset de estilos para que todo se vea igual */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Fondo vibrante y texturizado */
body {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(to right, #ff7e5f, #feb47b); /* Gradiente vibrante */
  color: #fff;
  line-height: 1.8;
  padding: 50px;
  background-size: 200% 200%;
  animation: gradientBackground 10s ease infinite;
}

/* Animación del fondo dinámico */
@keyframes gradientBackground {
  0% {
    background-position: 100% 0%;
  }
  50% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 100% 0%;
  }
}

/* Barra de navegación fija con hover y transición de color */
header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #9c27b0;
  padding: 15px 0;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

nav ul li a:hover {
  color: #ffeb3b; /* Amarillo brillante al hacer hover */
  transform: scale(1.2);
}

/* Sección "Sobre Mí" */
#about {
  text-align: center;
  margin-top: 100px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

#about h1 {
  font-size: 3.5rem;
  color: #ff6f61;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
}

#about p {
  font-size: 1.3rem;
  margin: 15px 0;
  color: #fff;
}

/* Botón para cambiar el fondo con animación */
button {
  background-color: #ffeb3b;
  color: #9c27b0;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

button:hover {
  background-color: #ff6f61;
  transform: scale(1.1);
}

/* Sección "Mis Skills" */
#skills {
  margin-top: 50px;
  text-align: center;
}

#skills h2 {
  font-size: 3rem;
  color: #ff6f61;
  margin-bottom: 20px;
}

#skills ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  list-style: none;
  font-size: 1.3rem;
  padding: 0;
}

#skills ul li {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

#skills ul li:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-10px);
}

/* Sección "CV" con animación */
#cv {
  text-align: center;
  margin-top: 50px;
}

.cv-button {
  display: inline-block;
  background-color: #9c27b0;
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  font-size: 1.2rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 20px;
}

.cv-button:hover {
  background-color: #ffeb3b;
  transform: scale(1.1);
}

.cv-button:active {
  transform: scale(1);
}

/* Sección "Contacto" */
#contact {
  margin-top: 50px;
  text-align: center;
}

#contact h2 {
  font-size: 2.5rem;
  color: #ff6f61;
  margin-bottom: 20px;
}

.contact-button {
  display: inline-block;
  background-color: #9c27b0;
  color: white;
  padding: 12px 25px;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  margin-top: 20px;
  font-size: 1.2rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.contact-button:hover {
  background-color: #ffeb3b;
  transform: scale(1.1);
}

.contact-button:active {
  transform: scale(1);
}

/* Animación de entrada de elementos */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

body {
  animation: fadeIn 2s ease-in-out;
}
