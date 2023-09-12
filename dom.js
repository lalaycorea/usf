document.getElement
document.querySelector("#container")

document.querySelectorAll(".second")
document.querySelector("ol .third");
let foundDiv = document.querySelector("#container");

foundDiv.innerText = "Hello!";
let footer = document.querySelector(".footer");
footer.classList.add("main");

OR

footer.className += "main";

let newLi = document.createElement("li");

newLi.innerText = "four"
let list = document.querySelector("ul");
list.appendChild(newLi);
let liInsideOl = document.querySelectorAll("ol li");

for(let i = 0; i < liInsideOl.length; i++){
    liInsideOl[i].style.backgroundColor = "green!";
    let footer = document.querySelector(".footer");
footer.remove();}