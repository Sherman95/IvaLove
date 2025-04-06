document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card");
  const valentines = document.querySelector(".valentines");

  // Expande o contrae la carta al hacer clic en el contenedor .valentines
  valentines.addEventListener("click", function () {
    card.classList.toggle("expanded"); // Alterna la clase 'expanded'
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const playMusic = urlParams.get("playMusic");

  if (playMusic === "true") {
      const backgroundMusic = document.getElementById("background-music");
      backgroundMusic.play();
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const backgroundMusic = document.getElementById("background-music");
  const playMusicButton = document.getElementById("play-music");

  // Reproduce la música al hacer clic en el botón
  playMusicButton.addEventListener("click", function () {
      backgroundMusic.play();
      playMusicButton.style.display = "none"; // Oculta el botón después de iniciar la música
  });

  // Alternativamente, puedes usar un clic en cualquier parte de la página
  document.body.addEventListener("click", function () {
      if (backgroundMusic.paused) {
          backgroundMusic.play();
      }
  });
});
