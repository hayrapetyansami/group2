"use strict";
// CRUD = Create (POST), Read (GET), Update (PUT), Delete (DELETE)
const root = document.querySelector("#root");

const title = document.createElement("h1");
const subTitle = document.createElement("p");
const form = document.createElement("form");
const screenBlock = document.createElement("div");
const screenInput = document.createElement("input");
const screenAddBtn = document.createElement("button");

const listsBlock = document.createElement("div");

title.textContent = "CRUD";
subTitle.textContent = "Async Application";

form.id = "app-form"
screenBlock.id = "screenBlock"
screenInput.type = "text";
screenInput.placeholder = "Type here...";
screenAddBtn.textContent = "ADD";
screenAddBtn.id = "screenAddBtn";

listsBlock.id = "listsBlock";

root.prepend(title, subTitle);
root.append(form);
form.prepend(screenBlock);
form.append(listsBlock);
screenBlock.append(screenInput, screenAddBtn);

const url = "http://localhost:8888/todo/";

form.addEventListener("submit", function (e) {
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
				<div class="listsBlock__item__content">
					<span>${todo.id}</span>
					<input type="text" value="${todo.title}" readonly>
				</div>
				<div class="buttons">
					<button data-rm>Remove</button>
					<button data-ed>Edit</button>
					<button data-sv>Save</button>
				</div>
			</div>
		`;
	});

	return data;
})
.then(data => {
	const removeBtns = document.querySelectorAll("[data-rm]");
	const editBtns = document.querySelectorAll("[data-ed]");
	const saveBtns = document.querySelectorAll("[data-sv]");

	editBtns.forEach((btn, index) => {
		btn.addEventListener("click", function () {
			const input = this.parentElement.previousElementSibling.lastElementChild;

			input.classList.add("edit");
			input.removeAttribute("readonly");

			saveBtns.forEach((saveBtn, saveBtnIndex) => {
				if (index === saveBtnIndex) {
					saveBtn.style.display = "inline-block";
					btn.style.display = "none";
				}
			}) 
		});
	});

	function changeDB (btnArray, method) {
		btnArray.forEach(btn => {
			btn.addEventListener("click", function () {	
				data.forEach(todo => {
					const fakeId = btn.parentElement.previousElementSibling.firstElementChild.textContent;
					const forEddited = btn.parentElement.previousElementSibling.lastElementChild;
					if (parseInt(fakeId) === todo.id) {
						fetch(`${url}${todo.id}`, {
							method: method,
							headers: {
								"content-type":"application/json"
							},
							body: method === "PUT" ? JSON.stringify({title: forEddited.value.trim()}) : ""
						});
					}
				})
			});
		});
	}

	changeDB(removeBtns, "DELETE");
	changeDB(saveBtns, "PUT");
});


const a = 7;

try {
	console.log(a);
	console.log(b);
	console.log(c);
} catch (err) {
	console.log(err);
	// throw new Error(err + " Barev dzez")
} 

// finally {
// 	console.log("Ամեն ինչ շատ վատ էր");
// }

console.log(10);