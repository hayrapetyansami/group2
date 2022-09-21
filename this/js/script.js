"use strict";

// function context (a, b) {
// 	console.log(this); // undefined || globalThis

// 	function calc() {
// 		console.log(this); // undefined || globalThis
// 		return a + b;
// 	}

// 	return calc()
// }

// console.log(context(4, 5)); // 9

// const obj = {
// 	num1: 15,
// 	num2: 17,
// 	num3: 22,
// 	show: function () {
// 		console.log(this); // obj => context

// 		const showA = () => {
// 			console.log(this);
// 		}
// 		showA ();
// 	}
// }

// obj.show();

// function User (name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// const petros = new User("Petros", 35);
// const poghos = new User("Poghos", 41);

// console.log(petros);
// console.log(poghos);

// CALL, APPLY, BIND

// function myCountry(city, n) {
// 	console.log(this);
// 	console.log(`${this.country}: ${city}`);
// 	console.log(((this.a + this.b) * this.c) * n);
// }

// const data = {
// 	country: "Armenia",
// 	a: 10,
// 	b: 20,
// 	c: 30
// };

// myCountry.call(data, "Yerevan", 2);
// myCountry.apply(data, ["Yerevan", 2]);

// function double (n) {
// 	console.log(`n: ${n}`);
// 	console.log(`this: ${this}`);
// 	return this * n;
// }

// const sum = double.bind(2); // ստեղ double-ի THIS-ը դնում ենք 2

// console.log(sum(3)); // մենք ստեղ double-ի N-ը դնում ենք ինչ-որ թիվ
// console.log(sum(7)); // մենք ստեղ double-ի N-ը դնում ենք ինչ-որ թիվ
// console.log(sum(9)); // մենք ստեղ double-ի N-ը դնում ենք ինչ-որ թիվ

// event !== this
const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
	console.log(e.target);
	e.target.style.background = "#00f";
});

btn.addEventListener("click", function () {
	console.log(this);
	this.style.background = "#f00";
});

/* 
	1) եթե "use strict"-ը միացված ա մենք ստանում ենք undefined
	հակառակ դեպքում globalThis (browser-ում => window)

	2) Օբջեքթի մեջ ստեղծված մեթոդի (function) THIS-ը հղվում է դեպի այդ Օբջեքթ,
	բայց եթե մեթոդը լինի սլաքով ֆունկցիա, ապա նա կվերցնի իր ծնողի THIS-ը

	3) function constrctor-ի և class-ի մեջ օգտագործած THIS-ը դա նոր ստեղծվող (new)
	օբջեքթի նախատիպն ա (prototype)

	4) arrow function-ի THIS-ը իր ծնողի THIS-ն ա, arrow functuin-ը չունի
	սեփական THIS

	5) Ձեռքով կոնտեքստը (this) կապելու համար, մենք օգտագործում ենք՝
	call, apply, bind: BIND-ը վերադարձնում է ՖՈՒՆԿՑԻԱ
*/