var signup = document.querySelector(".comments__button");

var success = document.querySelector(".success");

var success__close = document.querySelector(".success__close");

signup.addEventListener("click", function (evt) {
	evt.preventDefault();
	success.classList.remove("success-none");
});


success__close.addEventListener("click", function (evt) {
	evt.preventDefault();
	success.classList.add("success-none")
});


window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (!success.classList.contains("success-none")) {
			success.classList.add("success-none");
		}
	}
});
