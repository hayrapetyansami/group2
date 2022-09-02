"use strict";

const box = document.querySelector("#box");
const btn = document.querySelector("#btn");

// box.style.boxSizing = "border-box";

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(`width: ${width}`);
// console.log(`height: ${height}`);

/* 
	offsetHeight: Number
	offsetWidth: Number
	offsetTop: Number
	offsetLeft: Number
	offsetParent: HTML TAG
*/

btn.addEventListener("click", () => {
	// box.style.height = box.scrollHeight + "px";
	// console.log(box.scrollTop);
});

// console.log(box.getBoundingClientRect());

const aaa = window.getComputedStyle(box);
console.log(aaa.display);

console.log(window.getComputedStyle(box).getPropertyValue("display"));

console.log(window.getComputedStyle(box).display);