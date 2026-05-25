const slides = document.querySelector('.slides');

const slide = document.querySelectorAll('.slide');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

const totalSlides = slide.length;

/* UPDATE SLIDE */
function updateSlide(){
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

/* NEXT */
function nextSlide(){

    currentIndex++;

    if(currentIndex >= totalSlides){
        currentIndex = 0;
    }

    updateSlide();
}

/* PREV */
function prevSlide(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = totalSlides - 1;
    }

    updateSlide();
}

/* BUTTON EVENT */
nextBtn.addEventListener('click', nextSlide);

prevBtn.addEventListener('click', prevSlide);

/* AUTO SLIDE */
setInterval(nextSlide, 5000);