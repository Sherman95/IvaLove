let images = document.querySelectorAll('.gallery > img');
let currentIndex = 0; // Índice de la imagen visible

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.gallery > img');
  let currentIndex = 0; // Índice de la imagen visible

  function resetAnimations() {
      images.forEach((image, index) => {
          image.classList.remove('active', 'stacked', 'behind'); // Elimina todas las clases
          if (index === currentIndex) {
              image.classList.add('active'); // Imagen activa
          } else if (index === (currentIndex + 1) % images.length) {
              image.classList.add('stacked'); // Imagen apilada detrás
          } else {
              image.classList.add('behind'); // Imagen más atrás
          }
      });
  }

  function showNextImage() {
      // Avanza al siguiente índice de forma cíclica
      currentIndex = (currentIndex + 1) % images.length;

      // Actualiza las clases
      resetAnimations();
  }

  // Inicializar: Marca la primera imagen como activa y las demás como apiladas
  resetAnimations();

  // Agregar un evento de clic a la galería
  document.querySelector('.gallery').addEventListener('click', showNextImage);
});

document.addEventListener("DOMContentLoaded", function () {
  const heartContainer = document.getElementById("heart-container");

  function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");

      // Posición horizontal aleatoria
      heart.style.left = Math.random() * 100 + "vw";

      // Tamaño aleatorio
      const size = Math.random() * 10 + 10 + "px";
      heart.style.width = size;
      heart.style.height = size;

      // Duración aleatoria
      heart.style.animationDuration = Math.random() * 2 + 3 + "s";

      heartContainer.appendChild(heart);

      // Elimina el corazón después de que termine la animación
      setTimeout(() => {
          heart.remove();
      }, 5000);
  }

  // Genera corazones cada 100ms (más abundante)
  setInterval(createHeart, 50);
});

document.addEventListener("DOMContentLoaded", function () {
  const backgroundMusic = document.getElementById("background-music");
  const playMusicButton = document.getElementById("play-music");

  // Reproduce o pausa la música al hacer clic en el botón
  playMusicButton.addEventListener("click", function () {
      if (backgroundMusic.paused) {
          backgroundMusic.play();
          playMusicButton.textContent = "Pausar Música"; // Cambia el texto del botón
      } else {
          backgroundMusic.pause();
          playMusicButton.textContent = "Reproducir Música"; // Cambia el texto del botón
      }
  });
});

function openOtherProject() {
    window.location.href = "love letter.html"; // Ruta al archivo love letter.html
  }

