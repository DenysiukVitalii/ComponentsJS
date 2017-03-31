window.onload = function() {
	  var counterElement = document.getElementById('counter');
	  var counterValue = counterElement.dataset.value;
	  var ANIMATION_DURATION = 1000;
	  var numberOfDigits = counterValue.length;
	  var arrayOfDigitLists = [];
	  var animationDuration;
	  var list;

	  for (var i = 0; i < numberOfDigits; i++) {
	    list = createDigitList();
	    list.style.left = 0.5 * i + 'em';
	    list.classList.add('counter-animate');
	    animationDuration = ANIMATION_DURATION / (counterValue.slice(0, i + 1)) / 100;
	    if (i >= 2) animationDuration = numberOfDigits - i - 0.5;
	    list.style.animationDuration = animationDuration + 's';
	    arrayOfDigitLists.push(list);
	    counterElement.appendChild(list);
	  }

	  setTimeout(function() {
	  	for (i = 0; i < numberOfDigits; i++) {
		    arrayOfDigitLists[i].classList.remove('counter-animate');
		    arrayOfDigitLists[i].innerText = counterValue[i];
	    }
		}, ANIMATION_DURATION + 100);

  	function createDigitList() {
  		var ul = document.createElement('ul');
  	  var li;
  	  for (var i = 0; i < 10; i++) {
  	    li = document.createElement('li');
  	    li.innerHTML = i;
  	    ul.appendChild(li);
  	  }
  	  ul.classList.add('list-of-digits');
  	  return ul;
  	}
}
