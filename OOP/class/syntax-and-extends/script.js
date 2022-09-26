"use strict";

class Rectangle {
	constructor (width = 0, height = 0) {
		this.width = width;
		this.height = height;
	}

	calcArea(){
		return this.width * this.height;
	}
}

// const box = new Rectangle(50, 50);
// const long = new Rectangle(25, 500);

// console.log(box); console.log(long);
// console.log(box.calcArea()); console.log(long.calcArea());

// class ժառանգություն
// extends + super զույգը պարտադիր են

class ModifedRectangle extends Rectangle {
	constructor (text, color, width, height) {
		super(width, height);
		this.text = text;
		this.color = color;
	}
	props () {
		console.log(`TEXT: ${this.text}, Color: ${this.color}`);
	}
}

const title = new ModifedRectangle("Hello World !!!", "#f00", 50, 100);
console.log(title);
title.props();
console.log(title.calcArea());