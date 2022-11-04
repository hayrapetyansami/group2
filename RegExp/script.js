"use strict";

// new RegExp("pattern", "flags");

// example 1
// const answer = prompt("Type your name...");
// const reg = /n/gim;

// console.log(answer.match(reg));

// example 2
// const pass = prompt("Type your password...");
// console.log(pass.replace(/./g, "*"));

// example 3
// const age = prompt("Type your age...");
// const reg = /\d{3}/g;
// console.log(age.match(reg));

// example 4
// const telnumber = "045:99:99:99";
// const reg = telnumber.replace(/:/g, "-");
// console.log(reg);

// exapmle 5
// const username = prompt("Type your username...");
// const reg = /john/gi;
// console.log(reg.test(username));
// console.log(username.match(reg));

// example 6
// const str = "Hello, my name is R2D2, and i live in the B3R7IN, A3V8, B8G3";
// console.log(str.match(/\w\d\w\d*\w?./g)); // R2D2 B3R7IN A3V8 B8G3
// console.log(str.match(/\d/g)); // 2 2 3 7 3 8 8 3
// console.log(str.match(/\a/gi)); // a a A
// console.log(str.match(/\ \w{2}\ /gi)); //my is in


// g - global (groups)
// i - registr
// m = multiline

// w - word
// d - number

// https://regex101.com/ 