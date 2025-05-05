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



// API call to get a random quote
fetch('https://api.api-ninjas.com/v1/quotes', {
    method: 'GET',
    headers: {
        'X-Api-Key': 'Cg9/EuOivLd4htC/jZ1XPg==RVdRrJZh8vA2FBqB',
        'Content-Type': 'application/json'
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (result) {
        console.log(result);
        document.getElementById('quote').innerText = `"${result[0].quote}"`;
        document.getElementById('author').innerText = `—${result[0].author}`;
    })
    .catch(function (error) {
        console.error('Error:', error);
    });


