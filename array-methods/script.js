"use strict";

// const arr = [14, 6, 89, 21];

// FOR EACH
// arr.forEach((item, index, currentArray) => {
// 	console.log(`${index}: ${item} => ${currentArray}`);
// });

// FILTER
// const filteredArr = arr.filter((item, index, currentArray) => {
// 	return item >= 10;
// });

// const filteredString = arr.filter(item => typeof(item) === "string");
// console.log(filteredString);
// console.log(filteredArr);

// MAP
// const newArr = arr.map(item => item);
// console.log(newArr);

// REDUCE
// const prices = [2500, 3800, 4600];
// const sale = [974, 1840, 2999];
// const all = [...prices, ...sale];

// const result = all.reduce((total, current) => {
// 	return total + current;
// }, 0);

// console.log(result);

// const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
// const totalLetters = letters.reduce((result, current, index) => {
// 	return [
// 		...result,
// 		index
// 	]
// }, []);

// console.log(totalLetters);


// SOME & EVERY
// const anotherArr = [24, 15, 68, 41, 76, "str"];
// const some = anotherArr.some(item => typeof(item) === "string");
// console.log(some);

// const every = anotherArr.every(item => typeof(item) === "number");
// console.log(every);

// CONCAT
// const firstArr = [2, 4, 6];
// const lastArr = [3, 5, 7];

// const z = [].concat(firstArr, lastArr);
// const y = [...firstArr, ...lastArr];

// console.log(z);
// console.log(y);

// FIND
// const findArr = [5, 50, 10, 87, 45, 0, 100, 95, 6];
// const found = findArr.find(item => item > 10); // 50
// const foundLast = findArr.findLast(item => item > 10); // 95
// const foundIndex = findArr.findIndex(item => item === 6);
// console.log(foundIndex);
// console.log(found);
// console.log(foundLast);

// FILL // WARRNING !!!

// const a = [1, 2, 3, 4];
// const b = [1, 2, 3, 4];
// const c = [1, 2, 3, 4];

// console.log(a.fill(0, 2, 3)); // [ 1, 2, 0, 4 ]
// console.log(b.fill(5, 1)); // [ 1, 5, 5, 5 ]
// console.log(c.fill(7)); // [ 7, 7, 7, 7 ]

// ARRAY 

const btns = document.querySelectorAll("button");
const test = Array.from(btns);

// console.log(Array.isArray(btns)); // false
// console.log(Array.isArray(test)); // true

console.log(Array.of(10, 5, 6, 7, 9, 50, "ssfs"));