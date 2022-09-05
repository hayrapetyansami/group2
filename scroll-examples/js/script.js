"use strict";

const text = document.querySelector("#text_container p");
const topBtn = document.querySelector("[data-top]");
const bottomBtn = document.querySelector("[data-bottom]");
const span = document.querySelector("span");
const topElem = document.querySelector("#top");

bottomBtn.addEventListener("click", () => {
	// text.scrollTo(0, text.scrollHeight);
	// text.scroll(0, text.scrollHeight);
	// text.scrollBy(0, text.scrollHeight);
	// այս գրելաձևը կարող ենք օգտագործել վերևում նշված փոլոր մեթոդների դեպքում
	// text.scroll({
	// 	top: text.scrollHeight,
	// 	behavior: "smooth"
	// });

	// start, centrer, end
	span.scrollIntoView({
		block: "end", behavior: "smooth"
	});
});

topBtn.addEventListener("click", () => {
	// text.scrollTo(0, -text.scrollHeight);
	// text.scroll(0, -text.scrollHeight);
	// text.scrollBy(0, -text.scrollHeight);
	// այս գրելաձևը կարող ենք օգտագործել վերևում նշված փոլոր մեթոդների դեպքում
	text.scroll({
		top: -text.scrollHeight,
		behavior: "smooth"
	});
});

// console.log(window.scrollX); read-only
// console.log(window.scrollY); read-only

document.addEventListener("scroll", () => {
	if (document.documentElement.scrollTop >= 500) {
		topElem.style.display = "block";
		topElem.addEventListener("click", () => {
			document.documentElement.scrollIntoView({
				block: "start",
				behavior: "smooth"
			})
		});
	} else {
		topElem.removeAttribute("style");
	}
});