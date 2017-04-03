window.onload = function () {
 var slider = document.getElementById('main-slider');
 var sliderWrapper = document.querySelector('.slider-wrapper');
 var slides = document.querySelectorAll('.slide');
 var prevBtn = document.querySelector('.slider-previous');
 var nextBtn = document.querySelector('.slider-next');
 var amountSlides = slides.length;
 var widthSlide = parseInt(slides[0].offsetWidth);
 var countNext = 0;
 sliderWrapper.style.width = amountSlides * parseInt(slides[0].offsetWidth) + 'px';
 var currentPosition;

  nextBtn.addEventListener('click', function () {
    if (countNext === 0) currentPosition = 0; else
    currentPosition = Math.abs(+getComputedStyle(sliderWrapper).transform.split('(')[1].split(')')[0].split(',')[4]);

    if (currentPosition == widthSlide * (amountSlides - 1)) sliderWrapper.style.transform = 'translateX(0px)'; else
    sliderWrapper.style.transform = 'translateX(-' +  (widthSlide + currentPosition)  + 'px)';

    countNext++;
  });

  prevBtn.addEventListener('click', function () {
    if (countNext === 0) currentPosition = 0; else
    currentPosition = +getComputedStyle(sliderWrapper).transform.split('(')[1].split(')')[0].split(',')[4];

    if (currentPosition == 0) sliderWrapper.style.transform = 'translateX(-' + (widthSlide * (amountSlides - 1)) + 'px)'; else
    sliderWrapper.style.transform = 'translateX(' + (widthSlide + currentPosition) + 'px)';
  });

}
