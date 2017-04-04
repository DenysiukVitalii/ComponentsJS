window.onload = function() {
	var sliderWrapper = document.querySelector('.slider-wrapper');
  var slides = document.querySelectorAll('.slide');
  var prevBtn = document.querySelector('.slider-previous');
  var nextBtn = document.querySelector('.slider-next');

  var currentSlide = 0;
  var widthSlide = slides[0].clientWidth;
  var amountSlides = slides.length;

	var startAutoplay;
	var autoplay;
	var DELAY_AUTOPLAY = 5000;
	var INTERVAL_AUTOPLAY = 3000;

  function preparingSlider() {
    sliderWrapper.style.width = widthSlide * (amountSlides + 2) + 'px';
    sliderWrapper.insertAdjacentElement('beforeEnd', sliderWrapper.children[0].cloneNode(true));
    sliderWrapper.insertAdjacentElement('afterBegin', sliderWrapper.children[amountSlides - 1].cloneNode(true));
    sliderWrapper.style.transition = 'transform 0s';
    sliderWrapper.style.transform = 'translateX(' + ( - widthSlide) + 'px)';
  }

	var autoplaySlides = function () {
			if (currentSlide === amountSlides - 1) {
				setTimeout(function() {
					sliderWrapper.style.transition = 'transform 0s';
					sliderWrapper.style.transform = 'translateX(' + ( - widthSlide) + 'px)';
					currentSlide = 0;
				}, 400);
			}
			currentSlide++;
			sliderWrapper.style.transition = 'transform .4s';
			sliderWrapper.style.transform = 'translateX(' + ( - widthSlide * (currentSlide + 1)) + 'px)';
	};

	autoplay = setInterval(autoplaySlides, INTERVAL_AUTOPLAY);

  prevBtn.addEventListener('click', function() {
		clearInterval(autoplay);
		clearTimeout(startAutoplay);
    if (!currentSlide) {
      setTimeout(function() {
        sliderWrapper.style.transition = 'transform 0s';
        sliderWrapper.style.transform = 'translateX(' + ( -  widthSlide * (amountSlides)) + 'px)';
        currentSlide = amountSlides - 1;
      }, 400);
    }
    currentSlide--;
    sliderWrapper.style.transition = 'transform .4s';
    sliderWrapper.style.transform = 'translateX(' + ( - widthSlide * (currentSlide + 1)) + 'px)';
		startAutoplay = setTimeout(function () {
			autoplay = setInterval(autoplaySlides, INTERVAL_AUTOPLAY);
		}, DELAY_AUTOPLAY);
  });


  nextBtn.addEventListener('click', function() {
		clearInterval(autoplay);
		clearTimeout(startAutoplay);
    if (currentSlide === amountSlides - 1) {
      setTimeout(function() {
        sliderWrapper.style.transition = 'transform 0s';
        sliderWrapper.style.transform = 'translateX(' + ( - widthSlide) + 'px)';
        currentSlide = 0;
      }, 400);
    }
    currentSlide++;
    sliderWrapper.style.transition = 'transform .4s';
    sliderWrapper.style.transform = 'translateX(' + ( - widthSlide * (currentSlide + 1)) + 'px)';
		startAutoplay = setTimeout(function () {
			autoplay = setInterval(autoplaySlides, INTERVAL_AUTOPLAY);
		}, DELAY_AUTOPLAY);
  });

	preparingSlider();
}

/*
// old version
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
*/
