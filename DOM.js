var form = document.getElementById('addForm')
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


//form Submit event
 form.addEventListener('submit', (e) => {
    e.preventDefault();
    var newItem = document.getElementById('item').value;

    //create a new li element
    var li = document.createElement('li');
    //add class name
    li.className = 'list-group-item'
    //add textnodewith input vaue
    li.appendChild(document.createTextNode(newItem));

    //create a delelt button element
    var deletebtn = document.createElement('button');

    //add class to del button
    deletebtn.className = 'btn btn-danger btn-sm float-right delete'
    //append text node
    deletebtn.appendChild(document.createTextNode('X'))
    
    //append button to li
    li.appendChild(deletebtn)

    itemList.appendChild(li);
 });

 //delet event
 itemList.addEventListener('click',(e) => {
    if(e.target.classList.contains('delete')){
        if(confirm('are  you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
 })

 filter.addEventListener('keyup',(e)=>{
    //convert tet to lowercase 
    var text = e.target.value.toLowerCase()
    console.log(text);
 })

 filter.addEventListener('keyup', (e)=>{
   //convert text to lowercase
   var text= e.target.value.toLowerCase();
   //get lis
   var items = itemList.getElementsByTagName('li')
   //convert to an arry
   Array.from(items).forEach((item)=>{
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) !== -1){
         item.style.display = 'block';
      }else{
         item.style.display = 'none'
      }
   })

 })