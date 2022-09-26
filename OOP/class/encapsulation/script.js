"use strict";

// encapsulation
function User (email, password) {
	this.email = email;
	// this.password = password;
	let pass = password;

	this.say = function () {
		console.log(`email: ${this.email}`);
	}

	// getter & setter imitation

	this.getPass = function () {
		return pass;
	}

	this.setPass = function (newPass) {
		pass = newPass;
	}
}

const john = new User("john-smit@gmail.com", "qwerty#888#2022");
console.log(john.getPass()); // get || "qwerty#888#2022"
john.setPass("test") // set
console.log(john.getPass()); // get || "test"

// console.log(john);
// john.say();

// class

class User {
	constructor (email) {
		this.email = email;
		// this._password = password;
	}

	#password = "asksamj*(^&^%$%#";

	say() {
		console.log(`email: ${this.email}, password: ${this.#password}`);
	}

	get getPass() {
		return this.#password;
	}

	set getPass(newPass) {
		this.#password = newPass;
	}
}

const alex = new User("alex@mail.ru");

console.log(alex.getPass);
alex.getPass = "test";
console.log(alex.getPass);


class a {
	constructor (username) {
		this.username = username;
	}

	static hello = function () {
		console.log("Hello Armenia");
	}
}

class b extends a {
	constructor (username) {
		super(username);
	}
}

a.hello();
b.hello();