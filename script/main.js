// photo-slider //
let slides = document.querySelectorAll('.slides img');
let prevbtn = document.querySelector('.prev');
let nextbtn = document.querySelector('.next');
let currentSlide = 0;

displaySlide();

function displaySlide(i)
 {
    if (i >= slides.length) {
        currentSlide = 0;
    }
    else if (i < 0) {
        currentSlide = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("display");
    });
    slides[currentSlide].classList.add("display");
}
prevbtn.addEventListener('click',() =>{
    currentSlide--;
    displaySlide(currentSlide);
})
nextbtn.addEventListener('click',() =>{
    currentSlide++;
    displaySlide(currentSlide);
})



