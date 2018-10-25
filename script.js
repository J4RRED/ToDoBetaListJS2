window.onload = function () {
  var todoForm = document.getElementById('todoForm');
  var todoInput = document.getElementById('todoInput');
  var btn = document.getElementById('btn');
  var todoList = document.getElementById('todoList');
  // differeniate items from each other in the list by adding 1 as ID //
  var id = 1;
  
  //button event listener//
  btn.addEventListener('click', addToDoItem);
  
  //list event listener//
  todoList.addEventListener('click', boxChecked);
  
  //add todo item to list//
  function addToDoItem() {
    if(todoInput.value === "") {
      alter('You must enter a value!');
    } else {
      if(todoList.style.borderTop === "") {
        todoList.style.borderTop = "2px solid white";
    }
      var text = todoInput.value;
      var item = `<li id="li-${id}">${text}
          <input id="box-${id}" class="checkboxes"
          type="checkbox">
          </li>`;
      todoList.insertAdjacentHTML('beforeEnd', item);
      id++;
      todoForm.reset();
    }
    
    //add strikethrough to 'remove' item not working//
    function boxChecked(event) {
      const element = event.target;
      if(element.type === "checkbox") {
        element.parentNode.style.textDecoration = 'line-through';
      }
    }
  }
};
