const slides = [
  '<div><img class="carousel__inner-slide-icon" src="img/spots/spots01.jpeg" alt="Carousel Spots IMG 01"></div>',
  '<div><img class="carousel__inner-slide-icon" src="img/spots/spots02.jpeg" alt="Carousel Spots IMG 02"></div>',
  '<div><img class="carousel__inner-slide-icon" src="img/spots/spots03.jpeg" alt="Carousel Spots IMG 03"></div>',
  '<div><img class="carousel__inner-slide-icon" src="img/spots/spots04.jpeg" alt="Carousel Spots IMG 04"></div>',
  '<div><img class="carousel__inner-slide-icon" src="img/spots/spots05.jpeg" alt="Carousel Spots IMG 05"></div>',
  '<div><img class="carousel__inner-slide-icon" src="img/spots/spots06.jpeg" alt="Carousel Spots IMG 06"></div>',    
];

let currentSlide = 0;


function showCurrentSlide() {
  const slideContainer = document.querySelector(".spots__carousel-container");
  slideContainer.innerHTML = slides[currentSlide];

  if (window.innerWidth > 766) {
    const secondSlideIdx = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    slideContainer.innerHTML += slides[secondSlideIdx];

    if (window.innerWidth > 991) {
      const thirdSlideIdx =
        secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
      slideContainer.innerHTML += slides[thirdSlideIdx];
    }
  }
}


function nextSlide() {
  currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
  showCurrentSlide();
  updateDots();
}

function prevSlide() {
  currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
  showCurrentSlide();
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll(".spots__carousel-dot");
  for (let i = 0; i < dots.length; i++) {
  if (i === currentSlide) {
  dots[i].classList.add("spots__carousel-dot--active");
  } else {
  dots[i].classList.remove("spots__carousel-dot--active");
  }
  }
}

showCurrentSlide();
const btnNext = document.querySelector(".spots__carousel-next");
btnNext.addEventListener("click", nextSlide);

const btnPrev = document.querySelector(".spots__carousel-prev");
btnPrev.addEventListener("click", prevSlide);

window.addEventListener("resize", showCurrentSlide);

const dotContainer = document.querySelector(".spots__carousel-dots");
for (let i = 0; i < slides.length; i++) {
const dot = document.createElement("button");
dot.classList.add("spots__carousel-dot");
dotContainer.appendChild(dot);
dot.addEventListener("click", () => {
currentSlide = i;
showCurrentSlide();
updateDots();
});
}
updateDots();