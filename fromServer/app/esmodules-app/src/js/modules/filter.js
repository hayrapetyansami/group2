export default function (btnArray, url, UI) {
	btnArray.forEach(btn => {
		btn.addEventListener("click", async () => {
			let filterUrl;
			UI.listsBlock.innerHTML = "";

			if (btn.dataset.filter === "filterComplete") {
				filterUrl = `${url}?isComplete=true`;
			} else if (btn.dataset.filter === "filterUnComplete") {
				filterUrl = `${url}?isComplete=false`;
			} else if (btn.dataset.filter === "filterAll") {
				filterUrl = url;
			}

			await fetch(filterUrl)
			.then(data => data.json())
			.then(data => data.forEach(obj => UI.toHTML(obj.id, obj.title, obj.isComplete)));
		});
	});
}