module.exports = function crate() {
	const root = document.createElement("div");
	const form = document.createElement("form");
	const input = document.createElement("input");
	const btn = document.createElement("button");

	root.id = "root";
	form.id = "app-form";
	input.type = "text";
	input.placeholder = "Type Here...";
	btn.textContent = "ADD";
	btn.id = "addBtn";
	root.append(form);
	form.append(input, btn);

	return root;
}