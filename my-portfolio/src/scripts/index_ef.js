document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector("body");
  textElement.style.opacity = "0";

  setTimeout(function () {
    textElement.style.opacity = "1";
    textElement.style.transition = "opacity 1s";
  }, 500);
});
