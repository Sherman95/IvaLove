document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card");
  const valentines = document.querySelector(".valentines");

  // Expande o contrae la carta al hacer clic en el contenedor .valentines
  valentines.addEventListener("click", function () {
    card.classList.toggle("expanded"); // Alterna la clase 'expanded'
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const backgroundMusic = document.getElementById("background-music");
  const playMusicButton = document.getElementById("play-music");

  // Reproduce la música al hacer clic en el botón
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
