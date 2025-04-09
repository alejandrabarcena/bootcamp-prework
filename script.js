/* RESET DE ESTILOS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* BODY - Fondo y Tipografía */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f1f1f1;
  color: #333;
  line-height: 1.6;
  padding: 20px;
}

/* TÍTULO PRINCIPAL - H1 */
h1 {
  text-align: center;
  color: #9c27b0;
  font-size: 3rem;
  margin-bottom: 1rem;
}

/* PÁRRAFOS */
p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #555;
  text-align: center;
}

/* ENLACE DEL CV - Botón */
a {
  display: inline-block;
  background-color: #9c27b0;
  color: #fff;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  text-align: center;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 2rem;
}

a:hover {
  background-color: #ba68c8;
  transform: scale(1.1);
}

/* SECCIÓN DE CONTACTO - Fondo y Diseño */
section {
  background: #ba68c8;
  color: #fff;
  padding: 40px 20px;
  border-radius: 15px;
  margin-top: 30px;
  text-align: center;
}

/* SECCIÓN DE CONTACTO - TÍTULO */
section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

/* SECCIÓN DE CONTACTO - ENLACE DE EMAIL */
section p {
  font-size: 1.2rem;
  margin-top: 10px;
}

section a {
  color: #fff;
  text-decoration: underline;
}

section a:hover {
  color: #f3f3f3;
  text-decoration: none;
}

/* ANIMACIONES DE FONDO */
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
