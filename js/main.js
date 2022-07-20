"use strict";

const lime = document.getElementById("lime"),
btns = document.querySelectorAll("button"),
flags = document.querySelector("#flags"),
flag = flags.querySelectorAll(".flag"),
wrapper = document.querySelector("#wrapper"),
boxes = wrapper.querySelectorAll(".box"),
chgitem = document.querySelector("[data-chgitem]");

// 1)
lime.style.width = "500px";
lime.style.height = "500px";
lime.style.background = "#5d5d5d";
lime.style.borderRadius = "0px 10%";

// 2)
lime.style.cssText = `
	background: linear-gradient(purple, orange);
	width: 200px;
	height: 200px;
	// border-radius: 0px 10%;
`;

// let i = 0;
// for (let item in window.document.styleSheets[0].ownerNode.style) {
// 	console.log(item);
// 	i++;
// }
// console.log(i);


boxes.forEach(item => {
	item.textContent = `Hello I'm ${50 < 0 ? "Robot" : "Juior"}`;
	item.style.cssText = `
		display: flex;
		align-items: center;
		background: ${10 < 5 ? "#000" : "#f0f"};
		width: 200px;
		height: 200px;
		border-radius: 10px;
		color: #fff;
		font-size: 28px;
		font-weight: bold;
		text-align: center;
		font-family: tahoma
	`
});

const text2 = document.createElement("p");// ստեղծում ենք P
const text1 = document.createElement("p");// ստեղծում ենք P
text2.textContent = "Hello I'm APPEND";
text1.textContent = "Hello I'm PREPEND";

wrapper.prepend(text1); // ավելացնում ենք wrapper-ի սկզբում

// wrapper.append(text2); // ավելացնում ենք wrapper-ի վերջում
wrapper.appendChild(text2) // հին տարբերակ

// lime.remove(); //ջնջում ենք էլեմենտը, որի վրա կանչել ենք
// document.querySelector("body").removeChild(lime) // հին տարբերակ

// lime.before(flags) // flags թեգը դնում ենք lime-ից առաջ
document.querySelector("body").insertBefore(flags, lime) // հին տարբերակ

flags.after(wrapper) // wrapper թեգը դնում ենք flags-ից հետո

// lime.replaceWith(chgitem); 
document.body.replaceChild(chgitem, lime) // հին տարբերակ
/* 
	ջնջում ա էն էլեմենտը, որի վրա կանչել ենք,
	ու տեղը դնում ա էն էլեմենտը որը փոխանցել ենք
*/


const block = document.createElement("div");
document.body.append(block);

block.innerHTML = "<h1 style=\"color: red; font-family: cursive;\">Hello I'm BIG title</h1>";

// textContent => TEXT
// innerHTML => HTML

console.log(block);