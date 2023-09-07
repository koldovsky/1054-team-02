const slides = [
    '<div><img src="img/why-choose-us/cassette.jpg" alt="Cassette"></div>',
    '<div><img src="img/why-choose-us/chameleon.jpg" alt="Chameleon"></div>',
    '<div><img src="img/why-choose-us/man-headphones.jpg" alt="Man-headphones"></div>',
    '<div><img src="img/why-choose-us/volume-controller.jpg" alt="Volume-controller"></div>',
];

let currentSlide = 0;

const slideContainer = document.querySelector('.carousel-why-choose-us .carousel-why-choose-us-slide');

function renderSlide() {
    slideContainer.innerHTML = slides[currentSlide];
}

function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderSlide();
}

setInterval(nextSlide, 3000);

renderSlide();