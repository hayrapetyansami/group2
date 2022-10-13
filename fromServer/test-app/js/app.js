"use strict"

// NPM - Node Package Manager

const data = {
	"posts": [
	  { "id": 1, "title": "json-server", "author": "typicode" }
	],
	"comments": [
	  { "id": 1, "body": "some comment", "postId": 1 }
	],
	"profile": { "name": "typicode" }
}

const app1 = {
	id: 1,
	title: "json-server",
	author: "typicode"
}

const app2 = {
	title: "lesson",
	author: "group 2"
}

fetch("http://localhost:3000/posts", {
	method: "POST",
	headers: {
		"content-type": "application/json"
	},
	body: JSON.stringify({app1, app2})
});

fetch(`http://localhost:3000/posts/2`)
.then(data => data.json())
.then(data => console.log(data))