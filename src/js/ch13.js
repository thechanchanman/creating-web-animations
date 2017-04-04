var bigYellowCircle = document.getElementById("bigYellowCircle");
var blueSquare = document.getElementById("blueSquare");
var greenPentagon = document.getElementById("greenPentagon");

function setTranslate(xPos, yPos, el) {
	el.style.transform = 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)';
	// Using ES6
	// el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

window.addEventListener("DOMContentLoaded", scrollLoop, false);

var xScrollPosition, yScrollPosition;

function scrollLoop() {
	xScrollPosition = window.scrollX;
	yScrollPosition = window.scrollY;

	setTranslate(0, yScrollPosition * -0.2, bigYellowCircle);
	setTranslate(0, yScrollPosition * -1.5, blueSquare);
	setTranslate(0, yScrollPosition * 0.5, greenPentagon);

	requestAnimationFrame(scrollLoop);
}
