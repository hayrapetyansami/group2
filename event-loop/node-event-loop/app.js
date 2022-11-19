const fs = require("fs");

console.log("init");

setTimeout(() => {
	console.log(performance.now(), "Time is in 1 second");
}, 1000);

setImmediate(() => {
	console.log("Immediate");
});

fs.readFile(__filename, () => {
	console.log("file readed");
});

fs.writeFile(__dirname+"/"+"text.txt", "Hello dear friends", () => {
	console.log("Write File Done !!!");
});

setTimeout(() => {
	for (let i = 0; i < 100000000; i++){}
	console.log("Done");
	Promise.resolve().then(() => console.log("microtask inside timer"));
	process.nextTick(() => console.log("macrotask inside timer"));
}, 1500);

Promise.resolve().then(() => console.log("microtask #1"));
process.nextTick(() => console.log("macrotask #1"));

console.log("exit");

// process.nextTick(() => console.log("macrotask #2"));
// process.nextTick(() => console.log("macrotask #3"));
// process.nextTick(() => console.log("macrotask #4"));
// process.nextTick(() => console.log("macrotask #5"));
// process.nextTick(() => console.log("macrotask #6"));


/*
	ցանկացած macroTask ավելի արագ է աշխատում քան ցանկացած microTaks

	microTask => Promise (then, catch, finnaly, await)
	macroTask => nextTick()

*/