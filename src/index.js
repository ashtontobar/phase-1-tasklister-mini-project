document.addEventListener("DOMContentLoaded", () => {
  const taskListForm = document.querySelector("#create-task-form");
  // const newTaskText = document.getElementById("new-task-description");
  // const submitButton = document.querySelector("#submit_button");
  const taskList = document.querySelector("#tasks");

  //------------------------------------------------------------
  // Create Elements Function
  const makeEl = (el) => document.createElement(el);

  function renderToDoList(e) {
    // console.log(e.target[0].value)
    e.preventDefault();

    //Create Items for List
    const todoItem = makeEl("li");
    todoItem.classList.add("todo_items");
    const xButton = makeEl("button");
    xButton.classList.add("xButton");

    // Set attributes for items in list
    todoItem.textContent = `${e.target[0].value} `;
    xButton.textContent = " X ";

    // append items
    todoItem.append(xButton);
    taskList.append(todoItem);
    //--------------------------------------------------------------
    // Remove xButtons when Clicked
    function handleDelete(e) {
      // removes the parentNode(<li>) & button
      e.target.parentNode.remove();
    }

    function addEventListenerToButtons() {
      let deleteButtons = document.getElementsByClassName("xButton");
      // console.log(deleteButtons)
      // iterates through the list and deletes each one when clicked
      for (let button of deleteButtons) {
        button.addEventListener("click", handleDelete);
      }
    }
    addEventListenerToButtons();
  }

  taskListForm.addEventListener("submit", renderToDoList);

  //-------------------------------------------------------------
  //Remove xButton - 
  //*NOTES: Had to move this inside of the renderToDoList function
  // function handleDelete(e) {
  //   // e.preventDefault();
  //   e.target.parentNode.remove()
  // }

  // function addEventListenerToButtons() {
  //   let deleteButtons = document.getElementsByClassName("xButton");
  //   console.log(deleteButtons)
  //   for(let button in deleteButtons) {
  //     button.addEventListener("click", handleDelete)
  //   }
  // }
  // addEventListenerToButtons()
  //-------------------------------------------------------------
  // function to stop refreshing the page 
  //*NOTES - Needed to set up event (e) as a parameter inside of the renderToDoList
  //* function and move the preventDefault() inside of the function

  // function stopRefresh(e) {
  //   e.preventDefault();
  //   console.log(e.log)
  // }
  // taskListForm.addEventListener("submit", stopRefresh);

  // resest form (clear out text box) ***NOT WORKING***
  // taskListForm.reset();
});
