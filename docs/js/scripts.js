// Get all the project carousels (each carousel-container)
const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach(carousel => {
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    const carouselItems = carousel.querySelector('.carousel');
    let currentIndex = 0;

    const updateCarousel = () => {
        const items = carouselItems.querySelectorAll('.carousel-item');
        const totalItems = items.length;

        // Prevent out of bounds navigation
        if (currentIndex < 0) {
            currentIndex = totalItems - 1;
        } else if (currentIndex >= totalItems) {
            currentIndex = 0;
        }

        // Slide the carousel by applying the transform property
        carouselItems.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    // Move to the next item
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        updateCarousel();
    });

    // Move to the previous item
    prevBtn.addEventListener('click', () => {
        currentIndex--;
        updateCarousel();
    });
});
