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
console.log(document.getElementById('header-title'))
var headerTitle=document.getElementById('header-title')
console.log(headerTitle)
headerTitle.textContent = 'Hello';
headerTitle.innerText= 'Goodbye';