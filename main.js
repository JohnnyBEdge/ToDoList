
var getList = document.getElementById('items');


//adds item to list
function addItem(e){
    e.preventDefault();

//gets input value
var getFormValue  = document.getElementById('item').value;

//creates new list item
 var newItem = document.createElement('li');
 newItem.className = "list-group-item list-group-item";
 newItem.style.display  = 'block';
 
//  newItem.id = 'testing';
 newItem.appendChild(document.createTextNode(getFormValue));
//add li to ul
getList.appendChild(newItem);


 //create delete button
 var deleteBtn = document.createElement('button');
 deleteBtn.className = "btn btn-danger btn-sm delete";
 deleteBtn.appendChild(document.createTextNode('X'));
 deleteBtn.style.marginLeft = '10px';
 //add delete btn to li
 newItem.appendChild(deleteBtn);


//turns green when clicked

function turnGreen(){
  if(newItem.classList.contains('checked')){
    newItem.classList.remove('checked')
    newItem.style.backgroundColor = 'white'
    newItem.textContent = getFormValue 
    
  } else {
    newItem.classList.add('checked')
    newItem.style.backgroundColor = 'green'
    newItem.textContent = getFormValue +" Completed!";
  }
} 
newItem.addEventListener('click', turnGreen);


//delete item
newItem.addEventListener("click", removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Remove item?")){
            var li = e.target.parentElement;
            newItem.remove(li)
        }
    }
};

};

// //form submit event
var form = document.getElementById('addForm');
form.addEventListener('submit', addItem);





//clicking div highlights div green and adds checkmark
//click again removes it
