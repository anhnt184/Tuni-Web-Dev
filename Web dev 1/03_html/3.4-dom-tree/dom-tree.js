//1.
var ele1 = document.getElementsByClassName('navi')[0];
ele1.classList.add("list");

//2.
let naLi = document.createElement('li')
ele1.appendChild(naLi).innerHTML ='<a href="http://localhost:3000/">Localhost</a>';

//3.
const li = document.createElement('li');
li.appendChild(document.createTextNode("Item 0"));

//4.
const ele2 = document.getElementById("todo");
ele2.classList.remove("navi");
document.getElementById('ordered').append(li);

//5.
const ul = document.querySelector('#todo');
ul.childNodes[3].remove();


