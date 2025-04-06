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
function openOtherProject() {
    window.location.href = "love letter.html"; // Ruta al archivo love letter.html
  }

