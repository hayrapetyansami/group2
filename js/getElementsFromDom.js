"use strict";
// DOM => Document Object Model // document
// BOM => Browser Object Model // window
// HTMLCollection => ՉԻ ՏԱԼԻՍ foreach ու նմանատիպ բաներ
// NodeList => Տալիս է forEach-ի հնարավորություն

// old methods 
const limeID = document.getElementById("lime");
const buttons = document.getElementsByTagName("button");
const box = document.getElementsByClassName("box");
const _p = document.getElementsByName("paragraph")[0];

// new methods
const lime1 = document.querySelector("#lime");
const lime2 = document.querySelector(".lime");
const p = document.querySelector("p");
const chgitem = document.querySelector("[data-chgitem]");

const flags = document.querySelectorAll(".flag");
const boxes = document.querySelector(".wrapper > .box");


// console.log(lime1);
// console.log(lime2);
// console.log(p);
