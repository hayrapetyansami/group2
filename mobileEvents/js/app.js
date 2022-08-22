"use strict";

const box = document.getElementById("box");

box.addEventListener("touchmove", (e) => {
	let x = e.touches[0].pageX;
	let y = e.touches[0].pageY;

	e.target.style.cssText = `
		transform: translateX(${x}px) translateY(${y}px) 
	`;
});

// box.addEventListener("touchstart", () => {
// 	console.log("touchstart");
// });

// box.addEventListener("touchmove", () => {
// 	console.log("touchmove");
// });

// box.addEventListener("touchend", () => {
// 	console.log("touchend");
// });