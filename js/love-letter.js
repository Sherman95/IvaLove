document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card");
  const valentines = document.querySelector(".valentines");

  // Expande o contrae la carta al hacer clic en el contenedor .valentines
  valentines.addEventListener("click", function () {
    card.classList.toggle("expanded"); // Alterna la clase 'expanded'
  });
});