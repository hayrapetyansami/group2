"use strict";

const date = new Date();

// GET DATE
// DATE API
console.log(date.getFullYear()); // թվական օրինակ 2022
console.log(date.getMonth()); // ամիս - 1
console.log(date.getDay()); // շաբաթվա օր, օրինակ կիրակի = 0, շաբաթ = 6
console.log(date.getDate()); // էս օրվա օրը, 23։59։59։999ից առաջ
console.log(date.toLocaleTimeString()); // 8:18:05 PM
console.log(date.toLocaleString()); // Տարի, Ամիս, Օր, Ժամ, Րոպե, Վայրկյան
console.log(date.toDateString()); // Mon Aug 29 2022

// TIME API
console.log(date.getHours()); // ժամ
console.log(date.getMinutes()); // րոպե
console.log(date.getSeconds()); // վայրկյան
console.log(date.getMilliseconds()); // միլիվայրկյան

console.log(Intl.DateTimeFormat().resolvedOptions().timeZone); // Asia/Yerevan


const dateSetVariant = new Date();
dateSetVariant.setFullYear(2011);
dateSetVariant.setMonth(9);
dateSetVariant.setDate(6);
dateSetVariant.setHours(21);
dateSetVariant.setMinutes(36);
dateSetVariant.setSeconds(41);
console.log(dateSetVariant);

// ստուգում ենք մեր կոդի <Performance>-ը
let start = new Date();

let res = 0;

for (let i = 0; i < 500000; i++) {
	res = i ** 3;
}
console.log(res + " : Response");

let end = new Date();

console.log(`Loop performance time: ${end - start} miliseconds`);

// const elem = document.createElement("div");
// document.body.append(elem)

// Practice
// setInterval(() => {
// 	const date = new Date();
// 	elem.innerHTML = `
// 		<span>${date.getHours()}</span> :
// 		<span>${date.getMinutes()}</span> :
// 		<span>${date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds()}</span> : 
// 		<span>${date.getMilliseconds()}</span>
// 	`;
// }, 0)