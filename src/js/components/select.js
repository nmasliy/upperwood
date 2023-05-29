import Choices from "choices.js";

const selectNodes = document.querySelectorAll('.custom-select');

selectNodes?.forEach(el => {
	const choices = new Choices(el, {
		searchEnabled: false,
		itemSelectText: '',
		duplicateItemsAllowed: false,
		shouldSort: false
	});
})

