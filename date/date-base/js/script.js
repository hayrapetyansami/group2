"use strict";

// DATE API
const date = new Date();
console.log(date.getFullYear()); // թվականն ենք ստանում - 2022
console.log(date.getMonth()); // ամիս -1
console.log(date.getDay()); // ստանում ենք շաբաթվա օրը, կիրակի = 0
console.log(date.getDate()); // ստանում ենք էս օրը, 23։59։59։999ից առաջ

// TIME API
const time = new Date();
console.log(time.getHours()); // ժամ
console.log(time.getMinutes()); // րոպե
console.log(time.getSeconds()); // վայրկյան
console.log(time.getMilliseconds());// միլիվայրկյան
console.log(time.getTime()); // միլիվայրկյան տվյալ պահից
console.log(time.getTimezoneOffset()); // ժամային գոտի -240 րոպե

// STANDART DATE & TIME API
const dnt = new Date();
console.log(dnt.toDateString()); // Wed Aug 31 2022
console.log(dnt.toTimeString()); // 16:46:23 GMT+0400 (Armenia Standard Time)

// LOCAL DATE & TIME API
const localDNT = new Date();
console.log(localDNT.toLocaleTimeString());
console.log(localDNT.toLocaleDateString());
console.log(localDNT.toLocaleString());

// TIME ZONE - ASIA/YEREVAN
console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);

// SET
const DSet = new Date();
DSet.setFullYear(1254);
DSet.setMonth(11);
DSet.setDate(10);
DSet.setHours(11);
DSet.setMinutes(54);
DSet.setMilliseconds(999);

// ստուգում ենք մեր կոդի <Performance>-ը
let start = new Date();

let res = 0;

for (let i = 0; i < 500000; i++) {
	res = i ** 3;
}
console.log(res + " : Response");

let end = new Date();

console.log(`Loop performance time: ${end - start} miliseconds`);