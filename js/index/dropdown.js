document.addEventListener('DOMContentLoaded', function () {
  var dropdownItems = document.querySelectorAll('.dropdown-item');

  dropdownItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      var tabId = this.getAttribute('data-bs-target');

      // Desactivar la clase 'active' en otros elementos
      dropdownItems.forEach(function (otherItem) {
        otherItem.classList.remove('active');
      });

      // Desactivar la clase 'show' en otros elementos
      document.querySelectorAll('.tab-pane').forEach(function (pane) {
        pane.classList.remove('show', 'active');
      });

      // Activar el panel de pestañas correspondiente
      document.querySelector(tabId).classList.add('show', 'active');
      item.classList.add('active');
    });
  });
});
