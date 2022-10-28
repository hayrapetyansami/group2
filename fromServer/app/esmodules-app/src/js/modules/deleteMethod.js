export default function (removeBtn, url) {
	removeBtn.forEach(btn => {
		btn.addEventListener("click", async () => {
			const isDelete = confirm("Are you sure ?");
			console.log("OK DELETE");

			if (isDelete) {
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