//EXAMINE THE DOCUMENT OBJECT //
// console.dir(document)
// console.log(    document.domain)
// console.log(document.URL)
// document.title= 'uday';
// console.log(document.title);
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// document.all[10].textContent='Hello'
// console.log(document.forms[0])
// console.log(document.links)
// console.log(document.getElementById('header-title'))
// var headerTitle=document.getElementById('header-title')
// console.log(headerTitle)
// headerTitle.textContent = 'Hello';
// headerTitle.innerText= 'Goodbye';
// var items= document.getElementsByClassName('list-group-item');
// console.log(items)
// console.log(items[2]);
// items[2].textContent = 'hello'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow';
// for(var i = 0 ; i < items.length ; i++){
//     items[i].style.backgroundColor = "#f4f4f4"
// }

// console.log(document.getElementsByTagName('li'))
// console.log(document.getElementsByClassName('list-group-item'))
var header = document.querySelector('#main-header');
header.style.borderBottom= 'solid 4px #ccc'
var input = document.querySelector('input')
input.value = "hellow World"

var submit = document.querySelector('input[type="submit"]');
submit.value = 'Send'

var secondchild = document.querySelector('.list-group-item:nth-child(2)');

secondchild.style.backgroundColor = 'green'
var thradchild = document.querySelector(".list-group-item:nth-child(3)");
thradchild.style.display = "none"