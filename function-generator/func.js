"use strict";

function* generate () {
	yield "A";
	yield "l";
	yield "e";
	yield [10, 15, 20, 55];
}

const anun = generate();

for (let key of generate()) {
	console.log(key);
}

// console.log(anun.next().value);
// console.log(anun.next().value);
// console.log(anun.next().value);
// console.log(anun.next().value);
// console.log(anun.next().done);

// function* count (n) {
// 	for (let i = 0; i < n; i++) {
// 		yield i
// 	}
// }

// const counter = count(7);

// console.log(counter.next());
// console.log(counter.next());