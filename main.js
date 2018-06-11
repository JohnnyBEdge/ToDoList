

var getList = document.getElementById('items');


//adds item to list
function addItem(e){
    e.preventDefault();

//gets input value
var getFormValue  = document.getElementById('item').value;

//creates new list item
 var newItem = document.createElement('li');
 newItem.className = "list-item";
 newItem.appendChild(document.createTextNode(getFormValue));

 //create delete button
 var deleteBtn = document.createElement('button');
 deleteBtn.className = "btn btn-danger btn-sm delete";
 deleteBtn.appendChild(document.createTextNode('X'));
 console.log("hi")

 //add delete btn to li
 newItem.appendChild(deleteBtn);
//add li to ul
getList.appendChild(newItem);
};

//form submit event
var form = document.getElementById('addForm');
form.addEventListener('submit', addItem);