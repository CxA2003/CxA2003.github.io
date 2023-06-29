const darkModeToggle = document.querySelector('#dark-mode-toggle');
const dropdownToggle = document.querySelector('#dropdown-toggle');
const dropdownMenu = document.querySelector('#dropdown-menu');
const navbarOptions = document.querySelectorAll('#navbar-options a');
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');
const prevButton = gallery.querySelector('#prev-button');
const nextButton = gallery.querySelector('#next-button');

let currentImageIndex = 0;

prevButton.addEventListener('click', () => {
    images[currentImageIndex].style.opacity = 0;
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    images[currentImageIndex].style.opacity = 1;
});

nextButton.addEventListener('click', () => {
    images[currentImageIndex].style.opacity = 0;
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    images[currentImageIndex].style.opacity = 1;
});

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

dropdownToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

navbarOptions.forEach(option => {
    option.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
