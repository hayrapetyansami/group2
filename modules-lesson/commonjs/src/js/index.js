"use strict";

const { persons, setRing } = require("./modules/ring");
const ui = require("./modules/ui")

setRing(persons, "Frodo");

for (const person of persons) {
	console.log(person);
}

document.body.prepend(ui());