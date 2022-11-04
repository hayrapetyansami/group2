import axios from "axios";

const form = document.querySelector("form");
const url = "http://localhost:3000/post";

form.addEventListener("submit", function (e) {
	e.preventDefault();
	axios.post(url, Object.fromEntries(new FormData(this)));
});

axios.get(url)
.then(data => {
	console.log(data.data);
	console.log(data.data.data);
	console.log(data.data.request);
});