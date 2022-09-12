"use strict";
// ES5 Function Constructor
function Person (fullname, age, country) {
	this.fullname = fullname;
	this.age = age;
	this.country = country;
	this.say = function () {
		console.log(`hello dear, ${fullname}`);
	};
	this.sayCountry = function () {
		console.log(`${fullname} is from ${country}`);
	};
}

const john = new Person("John Smith", 39, "USA");
const any = new Person("Ani Grigoryan", 27, "ARMENIA");

john.say();
any.say();
john.sayCountry();
any.sayCountry();