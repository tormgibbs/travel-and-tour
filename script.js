const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const exploreBtn = document.getElementById("exploreBtn");
const startBtn = document.getElementById("startBtn");
const discoverBtn = document.getElementById("discoverBtn");

let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));

document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
      const accordionItem = button.parentNode;
      accordionItem.classList.toggle('active');
  });
});

exploreBtn.addEventListener('click', () => {
  console.log("Explore button clicked");
})

startBtn.addEventListener('click', () => {
  console.log("Start button clicked");
})

discoverBtn.addEventListener('click', () => {
  console.log("Discover button clicked");
})

const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');

const prevCarouselBtn = document.querySelector('.prev');
const nextCarouselBtn = document.querySelector('.next');

let currentIndex = 0;

function moveCarousel(direction) {
  currentIndex = (currentIndex + direction + cards.length) % cards.length;
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * 320; // 300px card width + 20px margin
  carousel.style.transform = `translateX(${offset}px)`;
}

prevCarouselBtn.addEventListener('click', () => moveCarousel(-1));
nextCarouselBtn.addEventListener('click', () => moveCarousel(1));

// Clone first and last card for infinite effect
const firstCardClone = cards[0].cloneNode(true);
const lastCardClone = cards[cards.length - 1].cloneNode(true);
carousel.appendChild(firstCardClone);
carousel.insertBefore(lastCardClone, cards[0]);

// Adjust initial position
carousel.style.transform = 'translateX(-320px)';