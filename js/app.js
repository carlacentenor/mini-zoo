var image = document.getElementsByClassName('animal');
var select = document.getElementById('select');

select.onchange = function() {
	if (select.value == "original") {
		for (i = 0; i < image.length; i++) {
			image[i].classList.remove('white-black');
			image[i].classList.remove('negative-colors');
			image[i].classList.remove('sepia');
		}
	} else if (select.value == "white-black") {
		for (i = 0; i < image.length; i++) {
			image[i].classList.add("white-black");
			image[i].classList.remove('negative-colors');
			image[i].classList.remove('sepia');
			image[i].classList.remove('original');
		}

	} else if (select.value == "sepia") {
		for (i = 0; i < image.length; i++) {
			image[i].classList.add("sepia");
			image[i].classList.remove('negative-colors');
			image[i].classList.remove('white-black');
			image[i].classList.remove('original');
		}

	} else if (select.value == "negative-colors") {
		for (i = 0; i < image.length; i++) {
			image[i].classList.add('negative-colors');
			image[i].classList.remove('white-black');
			image[i].classList.remove('sepia');
			image[i].classList.remove('original');
		}

	}
}
