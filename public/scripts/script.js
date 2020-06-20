window.onload = function() {
    console.log(document.title);
    if (document.title = 'Taylor Liss | Gallery'){
        cycleGallery();
    }
}

function cycleGallery() {
    var slides = document.querySelectorAll('.button-container .slider-button');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide,4000);

    function nextSlide() {
        slides[currentSlide].className = 'slider-button';
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].className = 'slider-button showing';
        let currentButton = document.getElementsByClassName('showing');
        currentButton[0].click();
    }
};

