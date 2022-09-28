"use strict";

class Main {
	constructor (name, password) {
		this.name = name;
		this.password = password;
	}
	static hello () {
		console.log("Hello from Main class");
	}

	static res = 105 * 7.2 / 4.3
}

class Test extends Main {}

Main.hello();
Test.hello();

console.log(Main.res);
console.log(Test.res);

// ներքևում նշվածները ՉԵՆ ԱՇԽԱՏԵԼՈՒ
// new Main.hello();
// const test = new Main();
// test.hello();