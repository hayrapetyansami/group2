module.exports = function (removeBtn, url) {
	removeBtn.forEach(btn => {
		btn.addEventListener("click", async () => {
			const a = confirm("Are you sure ?");

			if (a) {
				const fakeID = parseInt(btn.parentElement.previousElementSibling.firstElementChild.textContent);
				btn.parentElement.parentElement.remove();

				await fetch(`${url}/${fakeID}`, {
					method: "DELETE"
				});
			} else {
				alert("Good");
			}
		});
	});
}