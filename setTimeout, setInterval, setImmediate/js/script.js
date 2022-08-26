"use strict";
let state = false;
const first = setTimeout(() => {
	console.log(10 + 15);
	state = true;
}, 1500);

if (state) {
	clearTimeout(first); // ինչ-որ պայմանով
}

let i = 0;
const second = setInterval(() => {
	i++;
	console.log(i);

	if (i === 500) {
		clearInterval(second);
	}
}, 0);

console.log("Hello");