function initializeImageSlider(idName, projectName, totalImages) {
  let currentImage = 1;

  function changeImage(step) {
    currentImage += step;
    if (currentImage > totalImages) {
      currentImage = 1;
    } else if (currentImage < 1) {
      currentImage = totalImages;
    }
    document.getElementById(`${idName}`).src = `/img/${projectName}/${currentImage}.png`;
  }

  function showImage(imageNumber) {
    currentImage = imageNumber;
    document.getElementById(`${idName}`).src = `/img/${projectName}/${currentImage}.png`;
  }

  // Automatically change the image every 5 seconds
  setInterval(() => {
    changeImage(1);
  }, 5000);

  return {
    changeImage,
    showImage,
  };

}


// Inicializar el slider de imágenes para Virginia con 5 imágenes
const virginiaImageSlider = initializeImageSlider('mainImageVirginia', 'virginia', 8);

// Inicializar el slider de imágenes para Raleigh con 1 imagen
const raleighImageSlider = initializeImageSlider('mainImageRaleigh', 'raleigh', 1);

// Inicializar el slider de imágenes para Brightwood con 1 imagen
const brightwoodImageSlider = initializeImageSlider('mainImageBrightwood', 'brightwood', 10);