"use strict";

const subscribeForm = document.querySelector("#subscribe");
const signInForm = document.querySelector("#sign-in");
const get = document.querySelector("#get");

const messages = {
	waiting: "waiting...",
	success: "success",
	failure: "Something is wrong. Plesae try again !"
}

subscribeForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const message = document.createElement("p");
	message.classList.add("message");
	e.target.append(message);

	message.textContent = messages.waiting;
	const formData = new FormData(e.target);

	const request = new XMLHttpRequest();
	request.open("POST", "server/server.php");
	// request.setRequestHeader("content-type", "mulipart/form-data");
	request.send(formData);

	request.addEventListener("load", () => {
		if (request.status === 200) {
			message.textContent = messages.success;
			e.target.reset();
		} else {
			message.textContent = messages.failure;
			e.target.reset();
		}
	});
});

signInForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const formData = new FormData(e.target);
	const obj = {};
	formData.forEach((value, key) => {
		obj[key] = value;
	});

	const request = new XMLHttpRequest();
	request.open("POST", "server/server.php");
	request.setRequestHeader("content-type", "application/json");
	request.send(JSON.stringify(obj));
	e.target.reset();

	// request.addEventListener("load", () => {
	// 	if (request.status === 200) {
	// 		window.location.href = "https://google.com";
	// 	} else {
	// 		console.log("error");
	// 	}
	// });
});


// get.addEventListener("click", () => {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", "server/server.php");
// 	request.setRequestHeader("content-type", "application/json");
// 	request.send();

// 	request.addEventListener("load", () => {
// 		if (request.status === 200) {
// 			console.log(request);
// 		} else {
// 			console.log("error");
// 		}
// 	});
// });