"use strict";
const poster = document.querySelector("header img");
const filmsBlock = document.querySelector("#films");
const form = document.querySelector("#add");

function init (x) {
	poster.src = `img/bg${x}.jpg`;
	if (poster.src.slice(-7) === "bg2.jpg") {
		poster.alt = "Hitman's Wife's Bodyguard";
	} else if (poster.src.slice(-7) === "bg1.jpg") {
		poster.alt = "Gemini Man";
	}
	document.title = poster.alt;
	document.querySelectorAll("#main_promo .mp").forEach(adv => adv.remove());
}
init(2);

const _DB = {
	movies: [
		"Logan", "Spider-Man", "The Seven Samurai",
		"Bonnie and Clyde", "Reservoir Dogs", "Doctor Zhivago",
		"The Deer Hunter", "Rocky", "Crid"
	]
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let val = e.target.firstElementChild.value.trim();
	const check = document.querySelector("input[name='favorite']");

	if (val !== "") {
		if (check.checked) {
			console.log(`This film <${val}> added to favorite`);
		}

		_DB.movies.push(val);
	}

	setSort(_DB.movies);
	createFilmsList(_DB.movies, filmsBlock);
	e.target.reset();
});

function setSort(arr) {
	arr.sort();
}

function createFilmsList (films, parent) {
	parent.innerHTML = "";
	setSort(films);

	films.forEach((film, index) => {
		parent.innerHTML += `
			<p>
				${index + 1}. ${film.length >= 21 ? film.slice(0, 21)+'...' : film} 
				<span data-rm>&#128465</span>
			</p>
		`;
	});

	removeFilmFromList("[data-rm]")
}

function removeFilmFromList (selector) {
	setSort(_DB.movies);
	document.querySelectorAll(selector).forEach((btn, index) => {
		btn.addEventListener("click", () => {
			btn.parentElement.remove();
			_DB.movies.splice(index, 1);
			createFilmsList (_DB.movies, filmsBlock);
		});
	});
}

createFilmsList(_DB.movies, filmsBlock);