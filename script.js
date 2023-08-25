//example for creating dom element
/*const element = document.createElement("div")
element.innerHTML="<p>this is dynamic div</p>"
document.body.append(element);
*/
//session task
/*const element2 = document.createElement("div")
element2.innerHTML="<span>this is dynamic span</span>"
document.body.append(element2)
*/
//creating two elements and appending dynamically
/*const element = document.createElement("div")
const element1 = document.createElement("div")
const element2 = document.createElement("span")
element2.innerHTML="this is span"
element1.append(element2);
element.append(element1);
document.body.append(element)
*/
//session task 2
/*
//element creation part
const div = document.createElement("div")
const header = document.createElement("header");
const section = document.createElement("section");
const article = document.createElement("article");
const span = document.createElement("span");
const p = document.createElement("p");
const header1 = document.createElement("header");
const section1 = document.createElement("section");
const article1 = document.createElement("article");
const span1 = document.createElement("span");
const p1 = document.createElement("p");

//innerhtml part
span.innerHTML="this is span"
p.innerHTML="this is paragraph"
span1.innerHTML="this is span 1"
p1.innerHTML="this is paragarph1"

//append part
section.appendChild(span)
article.appendChild(p)
header.append(section,article)
section1.appendChild(span1)
article1.appendChild(p1)
header1.append(section1,article1)
div.append(header,header1)
document.body.append(div)
*/
//innerHTML vs innerText
/*const ex = document.createElement("div")
ex.innerText="<span>this is span</span>"
document.body.append(ex)
const ex1 = document.createElement("div")
ex1.innerHTML="<span>this is span</span>"
document.body.append(ex1)
*/
/*const att = document.createElement("div")
att.setAttribute("class","container")
att.setAttribute("id","container")
att.innerHTML="this is attribute example"
document.body.append(att)
*/
//session task steps
//1. create elements
//2. create attributes
//3.content
//4.append
//5.styles using css

