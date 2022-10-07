"use strict";

// resolve => ամեն ինչ բարեհաջող է անցել
// reject => մեր խնդրանքը մերժվել է

console.log("Պատրաստվում ենք միանալ սերվերին․․․");

const request = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Խնդրում ենք սպասել․․․");
	
		const product = {
			brand: "Google",
			type: "Mobile",
			name: "Pixel 7",
			storage: "512GB",
			price: 1088
		};

		resolve(product);
		// reject();

	}, 1000);
});

request.then(product => {
	product.status = "Վաճառված է";
	return product;
}).then(data => {
	data.isAnlocked = true;
	console.log(data);
}).catch(() => {
	throw new Error("Ինչ-որ բան սխալ է գնացել, խնդրում ենք փորձել կրկին");
}).finally(() => {
	console.log("Կապի ավարտ");
});

// const test = time => {
// 	return new Promise (resolve => {
// 		setTimeout(() => resolve(), time);
// 	});
// }

// Promise.all([test(1000), test(2000), test(3000), test(10000)])
// .then(() => console.log("Բոլորը աշխատեցին"));

// Promise.race([test(10), test(2000), test(3000), test(10000)])
// .then(() => console.log("Race is working..."));


// Օրինակ, որ Promise չի աշխատում միայն setTimeout-ով 
console.log("Before");

const data = new Promise((resolve, reject) => {
	const arr = [7, 5, 9, 2, 1, 3, 6, 0];

	if (Math.max(...arr) > 20) {
		resolve("Ամենամեծ թիվը մեծ է քսանից")
	} else {
		reject("Զանգվածի ոչ մի թիվը մեծ չէ քսանից")
	}
});

data.then(data => {
	console.log(data);
}).catch((e) => {
	console.log(e);
}).finally(() => {
	console.log("Օկեյ");
});

console.log("After");