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
// var header = document.querySelector('#main-header');
// header.style.borderBottom= 'solid 4px #ccc'
// var input = document.querySelector('input')
// input.value = "hellow World"

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send'

// var secondchild = document.querySelector('.list-group-item:nth-child(2)');

// secondchild.style.backgroundColor = 'green'
// var thradchild = document.querySelector(".list-group-item:nth-child(3)");
// thradchild.style.display = "none"

// var itemList = document.querySelector("#items");
// // //parentnode
// // console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor = '#f4f4f4';
// // console.log(itemList.parentNode.parentNode.parentNode)
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement)

// //childNodes
// // console.log(itemList.childNodes)
// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor='yellow';

// //FristChid
// console.log(itemList.firstChild)

// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hellow world'

// //LastChid
// console.log(itemList.firstChild)

// //LastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hellow '

// //nextSibling
// console.log(itemList.nextSibling)
// //nextElementSibling
// console.log(itemList.nextElementSibling)

// //prevesSibling
// console.log(itemList.previousSibling)
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = 'green'

//creat a div
var newDiv = document.createElement('div')
newDiv.className = 'hellow'
newDiv.id='hello1'
newDiv.setAttribute('title','hellowDiv');
var newDivText = document.createTextNode('hello world');
//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1)
console.log(newDiv)
newDiv.style.fontSize='30px'