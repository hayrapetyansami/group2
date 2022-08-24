"use strict";

const btns = document.querySelectorAll("button");
const wrapper = document.querySelector("#wrapper");

// e.target.nodeName === "BUTTON"
// e.target.tagName === "BUTTON"
// e.target.localName === "button"
// e.target.matches("button.this");

wrapper.addEventListener("click", (e) => {
	if (e.target && e.target.matches("button")) {
		console.log(e.target);
	}
});

// wrapper.addEventListener("click", (e) => {
// 	if (e.target && e.target.tagName === "BUTTON") {
// 		console.log(e.target);
// 	}
// });

for (let i = 5; i <= 10; i++) {
	const elem = document.createElement("button");
	elem.textContent = i;
	wrapper.append(elem);
}