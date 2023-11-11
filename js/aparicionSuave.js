window.addEventListener('load', function () {
    const elementsToFadeIn = document.querySelectorAll('.transition-fade-in');
  
    elementsToFadeIn.forEach(function (element) {
      element.style.opacity = 9; // Establece la opacidad inicial
  
      // Utiliza una pequeña demora para aplicar la transición después de que se cargue la página
      setTimeout(function () {
        element.style.opacity = 1; // Establece la opacidad final
      }, 1000); // Ajusta el valor de demora según sea necesario
    });
  });
  