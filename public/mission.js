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
    if (index < 0) {
        currentIndex = slide.length - slidesPerView;
    } else if (index > slide.length - slidesPerView) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${(100 / slidesPerView) * currentIndex}%)`;
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
