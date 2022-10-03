"use strict";

// AJAX = Asyncron JavaScript and XML

const AMD_input = document.querySelector("#amd");
const USD_input = document.querySelector("#usd");

AMD_input.addEventListener("input", (e) => {
	const request = new XMLHttpRequest();

	// 1) method, 2) url, 3) async, 4) password
	request.open("GET", "./db/data.json");
	request.setRequestHeader("content-type", "application/json");
	request.send();

	// status, statusText, response, readyState

	request.addEventListener("readystatechange", () => {
		if (request.readyState === 4 && request.status === 200) {
			const data = JSON.parse(request.response);
			USD_input.value = (
				parseFloat(e.target.value)
				/
				parseFloat(data.value.usd)
			).toFixed(2);
		}

		// if (isNaN(USD_input) || isNaN(AMD_input)) {
		// 	USD_input.value = 0;
		// }
	});
});

USD_input.addEventListener("input", (e) => {
	const request = new XMLHttpRequest();
	request.open("GET", "./db/data.json");
	request.setRequestHeader("content-type", "appliaction/json");
	request.send();

	request.addEventListener("load", () => {
		if (request.status === 200) {
			const data = JSON.parse(request.response);
			AMD_input.value = (
				parseFloat(data.value.usd)
				*
				parseFloat(e.target.value)
			).toFixed(2);
		}
	});
});