"use strict";

class Main {
	constructor (width, height, weight, background) {
		this.width = width;
		this.height = height;
		this.weight = weight;
		this.background = background;
	}
	calcThis() {
		return this.height * this.width;
	}
}

class Designer extends Main {
	constructor (color, cover, width, height, weight, background) {
		super(width, height, weight, background);
		this.color = color;
		this.cover = cover;
		delete this.weight;
	}
}

const square = new Main(600, 350, 1000000000);
const box = new Main(50, 50);
const long = new Main(800, 10, 500);

const div = new Designer("red", "full", 50, 50, "", "blue");
console.log(div);

console.log(div instanceof Main);