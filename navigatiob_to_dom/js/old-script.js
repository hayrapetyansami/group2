// console.log(document); // document !== HTML
// console.log(document.head); // <head>իրա միջի պարունակությամբ</head>
// console.log(document.body); // <body>իրա միջի պարունակությամբ</body>
// console.log(document.documentElement); // FULL HTML
// console.log(document.body.childNodes); // => ստանում ենք և թեգերը և նոդերը
// console.log(document.body.children); // => ստանում ենք միայն թեգերը

// console.log(document.body.firstChild); // առաջին երեխա => node #TEXT 
// console.log(document.body.lastChild); // Վերջին երեխա => script

// console.log(document.getElementById("current").parentNode);
// console.log(document.getElementById("current").parentNode.parentNode);

// const current = document.querySelector("[data-current]")
// console.log(current.previousSibling.previousSibling);
// console.log(current.nextSibling.nextSibling);

// for (let node of document.body.childNodes){
// 	if (node.nodeName !== "#text" && node.nodeName !== "#comment") {
// 		console.log(node);
// 	}
// }

/* 
	Նշումներ
	#text = /n /t
	#comment = HTML comment <!-- -->
*/