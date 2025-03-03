const images = document.querySelectorAll('img'); // Select all images

images.forEach(image => {
    let isZoomed = false; // Track zoom state for each image
    let imgwidth = image.width

    image.addEventListener('click', function() {
        if (isZoomed) {
            image.style.transform = 'scale(1)'; // Original size
        } else {
            image.style.transform = `scale(calc(${window.innerWidth} / ${imgwidth}))`;// Zoomed size
        }
        isZoomed = !isZoomed; // Toggle the zoom state
    });
});