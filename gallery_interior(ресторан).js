document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('#gallery-container .slidee li');
    const nextButton = document.querySelector('.slidesnav.next');
    const prevButton = document.querySelector('.slidesnav.prev');
    let currentIndex = 0;

    function updateSlides() {
        const offset = -currentIndex * 100; // Вычисляем смещение
        document.querySelector('#gallery-container .slidee').style.transform = `translateX(${offset}%)`;
        
        // Обновляем состояние кнопок
        prevButton.classList.toggle('disabled', currentIndex === 0);
        nextButton.classList.toggle('disabled', currentIndex === slides.length - 1);
    }

    nextButton.addEventListener('click', function() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlides();
        }
    });

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlides();
        }
    });
});