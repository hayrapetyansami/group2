"use strict";

const animOneBtn = document.querySelector("#anim1 button");
const animOneBox = document.querySelector("#box");
const animeTwoImg = document.querySelector("#anim2 img");
const animeTwoBtn = document.querySelector("#anim2 button");

// function customAnime () {
// 	let x = 0;

// 	const id = setInterval(frame, 10);

// 	function frame () {
// 		if (x === 300-12) {
// 			clearInterval(id);
// 		} else {
// 			x++;
// 			animOneBox.style.cssText = `
// 				top: ${x}px;
// 				left: ${x}px;
// 			`;
// 		}
// 	}
// }

// animOneBtn.addEventListener("click", () => customAnime());

let x = 0;
function reqAnimation () {
	x++;
	animOneBox.style.cssText = `
		top: ${x}px;
		left: ${x}px;
	`;

	if (x < 300 - 12) {
		requestAnimationFrame(reqAnimation)
	}
}

animOneBtn.addEventListener("click", () => requestAnimationFrame(reqAnimation));

const id = requestAnimationFrame(reqAnimation);
cancelAnimationFrame(id);

// animate() մեթոդ

let animalAnimation;

animeTwoBtn.addEventListener("click", function () {
	if (!animalAnimation) {
		animalAnimation = animeTwoImg.animate([
			{filter: "blur(10px)"},
			{filter: "blur(9px)"},
			{filter: "blur(8px)"},
			{filter: "blur(7px)"},
			{filter: "blur(6px)"},
			{filter: "blur(5px)"},
			{filter: "blur(4px)"},
			{filter: "blur(3px)"},
			{filter: "blur(2px)"},
			{filter: "blur(1px)"},
			{filter: "blur(0px)"},
		], {
			duration: 2000,
			
		});
	} else if (animalAnimation.playState === "paused") {
		animalAnimation.play();
	} else {
		animalAnimation.pause();
	}
});

// {transform: "translateY(0px)"},
// {transform: "translateY(50px)"},
// {transform: "translateY(-50px)"},
// {transform: "translateY(0px)"},


// {transform: "scale(0.1) rotate(0deg)", opacity: "0.1", filter: "blur(1px)"},
// {transform: "scale(0.2) rotate(90deg)", opacity: "0.2"},
// {transform: "scale(0.3) rotate(180deg)", opacity: "0.3"},
// {transform: "scale(0.4) rotate(270deg)", opacity: "0.4"},
// {transform: "scale(0.5) rotate(360deg)", opacity: "0.5"},
// {transform: "scale(0.6) rotate(270deg)", opacity: "0.6"},
// {transform: "scale(0.7) rotate(180deg)", opacity: "0.7"},
// {transform: "scale(0.8) rotate(90deg)", opacity: "0.8"},
// {transform: "scale(0.9) rotate(0deg)", opacity: "0.9"},
// {transform: "scale(1)", opacity: "1", filter: "blur(0px)"}