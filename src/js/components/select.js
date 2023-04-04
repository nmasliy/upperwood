import Choices from "choices.js";

const selectNodes = document.querySelectorAll('.form__item select');

selectNodes.forEach(el => {
	const choices = new Choices(el, {
		searchEnabled: false,
		itemSelectText: '',
		duplicateItemsAllowed: false
	});
})

