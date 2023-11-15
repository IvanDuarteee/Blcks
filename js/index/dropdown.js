$(document).ready(function () {
    // Escuchar el clic en los enlaces del dropdown
    $('.dropdown-item').click(function (e) {
      e.preventDefault(); // Evitar la acción predeterminada del enlace

      // Obtener el identificador del panel de pestañas correspondiente al enlace clicado
      var tabId = $(this).attr('data-bs-target');

      // Activar el panel de pestañas correspondiente
      $('.nav-pills a[href="' + tabId + '"]').tab('show');
    });
  });