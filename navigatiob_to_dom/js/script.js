const currentID = document.getElementById("current");
const curretData = document.querySelector('[data-current]');

// 1)
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);
// console.log(currentID.parentNode);
// console.log(curretData.parentNode);
// console.log(curretData.previousSibling);
// console.log(curretData.nextSibling);

// 2)
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);
// console.log(document.body.children);
// console.log(currentID.parentElement);
// console.log(curretData.parentElement);
// console.log(curretData.previousElementSibling);
// console.log(curretData.nextElementSibling);


// example
// const bnt1 = currentID.previousElementSibling;
// const p = document.querySelector("p");

// bnt1.addEventListener("click", () => {
// 	p.textContent += `
// 		bla
// 		bla
// 		bla
// 	`
// });

const third = currentID.parentElement.nextElementSibling.nextElementSibling;
const title = document.createElement("h1");
const paragraph = document.createElement("p")
title.textContent = "Hello dear group, it's our 29th lesson";
paragraph.textContent = "You can find this code, in your group's github"

third.append(title, paragraph)

