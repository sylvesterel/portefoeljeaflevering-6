// ---- Navbar scroll effect ----
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ---- Carousel functionality ----
const slidesContainer = document.getElementById('slides');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;
const slidesPerView = 3;

// Funktion til at vise slide
function showSlide(index) {
    const slideGap = 40; // gap mellem slides
    const slideWidth = slides[0].offsetWidth + slideGap;
    const maxIndex = slides.length - slidesPerView;

    // Wrap-around logik
    if (index < 0) {
        currentIndex = maxIndex;
    } else if (index > maxIndex) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

// Button events
prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

// Auto slide hver 5 sekunder
setInterval(() => showSlide(currentIndex + 1), 5000);

// Initial visning
showSlide(currentIndex);
