var leftBtn = document.getElementById('arrow-left'),
    rightBtn = document.getElementById('arrow-right'),
    slide = document.querySelectorAll('.ad-item'),
    secondLeftBtn = document.getElementById('slider-btn-left'),
    secondRightBtn = document.getElementById('slider-btn-right'),
    secondSlide = document.querySelectorAll('.premier-item'),
    ellipse = document.querySelectorAll('.ellipse');

var slideActive = 1;
slide[slideActive].classList.add('active');
ellipse[slideActive].classList.add('active-ellipse');

function slideNext() {
    slide[slideActive].classList.remove('active');
    ellipse[slideActive].classList.remove('active-ellipse');
    slideActive = slideActive + 1;
    slide[slideActive].classList.add('active');
    ellipse[slideActive].classList.add('active-ellipse');
    if (slideActive == 4) {
        slide[slideActive].classList.remove('active');
        ellipse[slideActive].classList.remove('active-ellipse');
        slideActive = 1;
        slide[slideActive].classList.add('active');
        ellipse[slideActive].classList.add('active-ellipse');
    }
}

function slidePrew() {
    slide[slideActive].classList.remove('active');
    ellipse[slideActive].classList.remove('active-ellipse');
    slideActive = slideActive - 1;
    slide[slideActive].classList.add('active');
    ellipse[slideActive].classList.add('active-ellipse');
    if (slideActive == 0) {
        slide[slideActive].classList.remove('active');
        ellipse[slideActive].classList.remove('active-ellipse');
        slideActive = 3;
        slide[slideActive].classList.add('active');
        ellipse[slideActive].classList.add('active-ellipse');
    }
}

rightBtn.addEventListener('click', slideNext);
leftBtn.addEventListener('click', slidePrew);

var activeSlideOne = 1,
    activeSlideTwo = 2;

secondSlide[activeSlideOne].classList.add('active');
secondSlide[activeSlideTwo].classList.add('active');

function secondSlideNext() {
    secondSlide[activeSlideOne].classList.remove('active');
    activeSlideOne = activeSlideTwo;
    activeSlideTwo = activeSlideTwo + 1;
    secondSlide[activeSlideTwo].classList.add('active');
    if(activeSlideTwo == 6) {
        secondSlide[activeSlideTwo].classList.remove('active');
        secondSlide[activeSlideOne].classList.remove('active');
        activeSlideOne = 1;
        activeSlideTwo = 2;
        secondSlide[activeSlideTwo].classList.add('active');
        secondSlide[activeSlideOne].classList.add('active');
    }
}

function secondSlidePrew() {
    secondSlide[activeSlideOne].classList.remove('active');
    activeSlideOne = activeSlideTwo;
    activeSlideTwo = activeSlideTwo - 1;
    secondSlide[activeSlideTwo].classList.add('active');
    if(activeSlideTwo == 0) {
        secondSlide[activeSlideTwo].classList.remove('active');
        secondSlide[activeSlideOne].classList.remove('active');
        activeSlideOne = 4;
        activeSlideTwo = 5;
        secondSlide[activeSlideTwo].classList.add('active');
        secondSlide[activeSlideOne].classList.add('active');
    }
}


secondRightBtn.addEventListener('click', secondSlideNext);
secondLeftBtn.addEventListener('click', secondSlidePrew);