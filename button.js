document.getElementById('changeStyleButton').addEventListener('click', function() {
    const images = document.querySelectorAll('.carousel-item img');
    images.forEach(img => {
        img.style.border = '5px solid red';
        img.style.filter = 'grayscale(100%)';
    });
});

document.getElementById('revertStyleButton').addEventListener('click', function() {
    const images = document.querySelectorAll('.carousel-item img');
    images.forEach(img => {
        img.style.border = 'none';
        img.style.filter = 'none';
    });
});