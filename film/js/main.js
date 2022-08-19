"use strict";
const poster = document.querySelector("header img");
const adv = document.querySelectorAll("#main_promo .mp");
const filmsBlock = document.querySelector("#films");
const form = document.querySelector("#add");

poster.src = "img/bg2.jpg";
poster.alt = "Hitman's Wife's Bodyguard";
adv.forEach(adv => adv.remove());
document.title = poster.alt;

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
	let valCopy = val;
	const check = document.querySelector("input[name='favorite']");

	if (val !== "") {
		if (val.length >= 21) {
			val = `${val.slice(0, 21)}...`;
		}

		if (check.checked) {
			console.log(`This film <${valCopy}> added to favorite`);
		}

		_DB.movies.push(valCopy);
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
				${index + 1}. ${film} 
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