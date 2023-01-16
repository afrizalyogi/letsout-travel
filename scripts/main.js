function onlyOne(checkbox) {
	var checkboxes = document.getElementsByName("package-select");
	checkboxes.forEach((item) => {
		if (item !== checkbox) item.checked = false;
	});
}
