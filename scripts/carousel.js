let index = 0;

function moveSlide(step) {
    const container = document.querySelector('.projects-container');
    const totalSlides = document.querySelectorAll('.project-card').length;
    index = (index + step + totalSlides) % totalSlides;
    const offset = -index * 100;
    container.style.transform = `translateX(${offset}%)`;
}
