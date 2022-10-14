"use strict";

// CRUD = Create (POST), Read (GET), Update (PUT), Delete (DELETE)

const root = document.querySelector("#root");

const screenBlock = document.createElement("div");
const screenInput = document.createElement("input");
const screenBtnAdd = document.createElement("button");

const listsBlock = document.createElement("div");

screenBlock.id = "screenBlock"
screenInput.type = "text";
screenInput.placeholder = "Type here...";
screenBtnAdd.textContent = "ADD";

listsBlock.id = "listsBlock";

root.prepend(screenBlock);
root.append(listsBlock);
screenBlock.append(screenInput, screenBtnAdd);

const url = "http://localhost:8888/todo/";

root.addEventListener("submit", function (e) {
	e.preventDefault();
	const val = screenInput.value.trim();

	if (val !== "") {
		fetch(url, {
			method: "POST",
			headers: {
				"content-type":"application/json"
			},
			body: JSON.stringify({title: val})
		});
	}

	this.reset();
});

fetch(url)
.then(data => data.json())
.then(data => {
	data.forEach(todo => {
		listsBlock.innerHTML += `
			<div class="listsBlock__item">
				<p>
					<span>${todo.id}</span>
					${todo.title}
				</p>
				<button data-rm>Remove</button>
			</div>
		`;
	});

	return data;
})
.then(data => {
	const removeBtns = document.querySelectorAll("[data-rm]");
	removeBtns.forEach(btn => {
		btn.addEventListener("click", function () {
			this.parentElement.remove();

			data.forEach(todo => {
				const fakeId = btn.previousElementSibling.firstElementChild.textContent;

				if (parseInt(fakeId) === todo.id) {
					fetch(url+todo.id, {
						method: "DELETE"
					});
				}
			})
		});
	});
});