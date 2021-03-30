var pbutton = document.querySelector(".productweek__button");

var basket = document.querySelector(".basket");

var bgmodal = document.querySelector(".bg-modal");

pbutton.addEventListener("click", function (evt) {
	evt.preventDefault();
	basket.classList.remove("basket-none");
	bgmodal.classList.remove("bg-modal-none");

});

bgmodal.addEventListener("click", function (evt) {
	evt.preventDefault();
	basket.classList.add("basket-none");
	bgmodal.classList.add("bg-modal-none");

});



window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (!basket.classList.contains("basket-none")) {
			basket.classList.add("basket-none");
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (!bgmodal.classList.contains("bg-modal-none")) {
			bgmodal.classList.add("bg-modal-none");
		}
	}
});
