"use strict";

// GET & SET

const person = {
	name: "John Smith",
	age: 29,

	get userAge () {
		return this.age;
	},

	set userAge (newAge) {
		this.age = newAge;
	}
};

console.log(person.userAge); // get
person.userAge = 49; // set
console.log(person.userAge); // get