var signup = document.querySelector(".comments__button");

var failure = document.querySelector(".failure");

var failure__close = document.querySelector(".failure__confirm");

signup.addEventListener("click", function (evt) {
	evt.preventDefault();
	failure.classList.remove("failure-none");
});


failure__close.addEventListener("click", function (evt) {
	evt.preventDefault();
	failure.classList.add("failure-none")
});
window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (!failure.classList.contains("failure-none")) {
			failure.classList.add("failure-none");
		}
	}
});
