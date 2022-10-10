"use strict";

// API => Application Programming Interface

// DOM API
// document.querySelector();
// document.createElement();
// setTimeout()

/*
	1. fetch-ի առաջին պարամետրը դա URL-ն է
	2. fetch-ի երկրորդ պարամետրը դա Settings-ն է Object-ի տեսքով
	3․ Եթե fetch API-ն մենք օգտագործում ենք GET հարցման համար, ապա մենք 2րդ պարամետր ՉԵՆՔ ԳՐՈՒՄ, սակայն, եթե մենք օգտագործելու ենք POST, PUT և/կամ այլն մեթոդներ, ապա որպես 2րդ պարամետր ՊԱՐՏԱԴԻՐ պետք է նշենք այդ Object-ը
*/

// const posts = "https://jsonplaceholder.typicode.com/posts/";
// const photos = "https://jsonplaceholder.typicode.com/photos/";

// const wrapper = document.createElement("div");
// const postsList = document.createElement("div");
// const photosList = document.createElement("div");

// document.body.prepend(wrapper);
// wrapper.append(postsList);
// wrapper.append(photosList);

// let i = 1;

// ստանում ենք փոստերը
// const getPostsFromServer = setInterval(() => {
// 	fetch(`${posts}${i}`)
// 	.then(response => response.json())
// 	.then(response => {
// 		postsList.innerHTML += `
// 			<div style="margin-bottom: 40px">
// 				<h2>${response.title}</h2>
// 				<p>${response.body}</p>
// 			</div>
// 		`;
// 	});

// 	if (i === 10) {
// 		clearInterval(getPostsFromServer);
// 	}

// 	i++;
// }, 500);

// ստանում ենք նկարներ
// const getPhotosFromServer = setInterval(() => {
// 	fetch(`${photos}${i}`)
// 	.then(data => data.json())
// 	.then(data => {
// 		photosList.innerHTML += `
// 			<div>
// 				<img src=${data.url} alt="${data.title}" style="max-width: 500px; width: 100%; display: block; margin-bottom: 12px;">
// 			</div>
// 		`;
// 	});

// 	if (i === 10) {
// 		clearInterval(getPhotosFromServer);
// 	}
// 	i++;
// }, 500);

const elem = document.createElement("div");
document.body.prepend(elem);
const article = {
	userId: 11,
	author: "Ալինա Գևորգյան",
	title: "«Կոշ» ՔԿՀ նախկին պետը դատապարտվեց 5 տարվա ազատազրկման. պաշտպանը դատավճռի դեմ բողոք կներկայացնի",
	body: "Երեւանի ընդհանուր իրավասության դատարանը՝ դատավոր Մեսրոպ Մակյանի նախագահությամբ, «Զոն նայող» դատապարտյալից 700.000 դրամ կաշառք ստանալու համար «Կոշ» ՔԿՀ նախկին պետ Լյովա Բաղդասարյանին մեղավոր է ճանաչել՝ դատապարտելով 5 տարվա ազատազրկման։ \n Բաղդասարյանը մեղադրվում էր նաեւ յուրացում կատարելու մեջ, սակայն դատարանն այդ հոդվածով նրան արդարացրեց։ Նշանակված պատժում հաշվակցելով Լյովա Բաղդասարյանի՝ նախաքննության ընթացքում կալանքի տակ գտնվելու 3 ամիս ժամկետը՝ դատարանը որպես վերջնական պատիժ է սահմանել ազատազրկումը՝ 4 տարի 8 ամիս ժամկետով։"
}

// ուղարկում ենք նոր փոստ
fetch("https://jsonplaceholder.typicode.com/posts/", {
	method: "POST",
	headers: {
		"content-type": "application/json"
	},
	body: JSON.stringify(article)
})
.then(data => data.json())
.then(data => {
	elem.innerHTML = `
		<h2>${data.title}</h2>
		<p>${data.body}</p>
	`;
});