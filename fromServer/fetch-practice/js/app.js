"use strict";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const formData = new FormData(e.target);
	const dataObj = {};
	formData.forEach((value, key) => {
		dataObj[key] = value;
	});

	fetch("server/query.php", {
		method: "POST",
		headers: {
			"content-type": "application/json"
		},
		body: JSON.stringify(dataObj)
	})
	.then(data => data.text())
	.then(data => console.log(data))
});