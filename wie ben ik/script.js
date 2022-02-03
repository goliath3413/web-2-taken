"use strict";
console.log("George's thing works ;))))");
let h1Element = document.querySelector(".h1");
console.log(h1Element);
h1Element.style.backgroundColor = "red";
// var names = ["Achraf", "Adrien"];(big help from Maxim)
var element = document.getElementById("George");
element.style.textDecoration ="underline";

var element2 = document.querySelectorAll(".vijfde-rij");

for (var i = 0; i < element2.length; i++) {
  element2[i].style.backgroundColor = "red";
}

// class names
// let cash1 = document.getElementsByClassName(cash2);
//for(let cash1 of cash2) {element}
// cash1.style.backgroundcolor = 'red;
