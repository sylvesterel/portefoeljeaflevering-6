window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});


const slides = document.getElementById('slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;
const slidesPerView = 3;

function showSlide(index) {
    const slideWidth = document.querySelector('.slide').offsetWidth + 40;
    currentIndex = index;

    if (currentIndex < 0) {
        currentIndex = slide.length - slidesPerView;
    }

    if (currentIndex > slide.length - slidesPerView) {
        currentIndex = 0;
    }

    slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Optional: Auto slide
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);

// Initial visning
showSlide(currentIndex);
