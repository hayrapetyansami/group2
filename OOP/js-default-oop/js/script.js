"use strict";

const soldier = {
	health: 100,
	armor: 150,
	damage: 100,
	country: "USA",
	run() {
		console.log("I'm running sr !!!");
	}
};

const alex = Object.create(soldier);
// console.log(alex.country);
const john = {
	armor: 13
};

// չենք օգտագործելու այս մեթոդը
// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

console.log(john.damage);
// console.dir(alex);