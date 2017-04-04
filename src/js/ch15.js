// queryring the DOM
var links = document.querySelectorAll(".itemLinks");
var wrapper = document.querySelector("#wrapper");

// pointer to the currently displayed item
var activeLink = 0;

// setting up the event listeners
for (var i = 0; i < links.length; i += 1) {
	var link = links[i];
	link.addEventListener("click", setClickedItem, false);

	// identify the item for the activeLink
	link.itemID = i;
}

// set first item as active
links[activeLink].classList.add("active");

function setClickedItem(e) {
	removeActiveLinks();

	var clickedLink = e.target;
	activeLink = clickedLink.itemID;

	changePosition(clickedLink);
}

function removeActiveLinks(e) {
	for (var i = 0; i < links.length; i += 1) {
		links[i].classList.remove("active");
	}
}

// Changing the slider position and highlight active link
function changePosition(link) {
	var position = link.getAttribute("data-pos");
	var translateValue = 'translate3d(' + position + ', 0px, 0)';
	wrapper.style.transform = translateValue;

	link.classList.add("active");
}
