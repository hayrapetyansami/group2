"use strict";

const person = {
	name: "John",
	age: 21,
	isAdult: true,
	family: {
		parents: {
			mother: "Nelly",
			father: "Adam"
		},

		siblings: {
			brother: "Joe",
			sister: "Cloe"
		}
	}
};

// const copy = JSON.parse(JSON.stringify(person));
// copy.family.siblings.brother2 = "Alex";

console.log(JSON.stringify(person, undefined, 4));

// JSON => JavaScript Object Notation
// JSON.stringify => Object-ը դարձնում ենք JSON
// JSON.parse => JSON-ը դարձնում ենք Object
// JSON-ը չի ընդունում Method, undefined և ․․․