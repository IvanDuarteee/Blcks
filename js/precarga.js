   // Cuando la ventana haya cargado completamente
   window.addEventListener('load', function() {
    // Retraso mínimo en segundos antes de ocultar el preloader (por ejemplo, 1 segundo)
    var minimumDurationInSeconds = 1.25;

    // Calculamos el tiempo actual más el retraso mínimo
    var hideTime = new Date().getTime() + minimumDurationInSeconds * 1000;

    // Agregamos la clase "loaded" al body después del retraso mínimo
    setTimeout(function() {
      document.body.classList.add('loaded');
    }, hideTime - new Date().getTime());
  });


