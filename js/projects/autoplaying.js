 // Agrega autoplay a la barra de desplazamiento horizontal
 var scrollContainer = document.getElementById("horizontal-scroll");
 var scrollAmount = 1;

 setInterval(function() {
   // Si hemos llegado al final, vuelve al principio
   if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
     scrollContainer.scrollLeft = 0;
   } else {
     // De lo contrario, sigue desplazándote
     scrollContainer.scrollLeft += scrollAmount;
   }
 }, 50);
