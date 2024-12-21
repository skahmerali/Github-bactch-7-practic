const images = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Automatically change images every 5 seconds
setInterval(() => {
    changeImage(1);
}, 5000);

// Function to change image
function changeImage(direction) {
    const totalImages = images.children.length;
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Button event listeners
prevButton.addEventListener('click', () => changeImage(-1));
nextButton.addEventListener('click', () => changeImage(1));
