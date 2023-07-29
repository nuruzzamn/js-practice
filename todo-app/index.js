
///Finding element
const container = document.querySelector(".container")
const todoForm = document.querySelector(".todo-form")
const todoInput = document.querySelector("#inputTudo")
const todoAddButton = document.querySelector("#addTudoBtn") 
const todoLists = document.querySelector("#lists") 
const messageElement = document.querySelector("#message") 

// create showTodoMessage
const showTodoMessage = (text, status) =>{
    messageElement.textContent = text;
    messageElement.classList.add(`bg-${status}`);
    setTimeout(() => {
       messageElement.textContent = "";
       messageElement.classList.remove(`bg-${status}`); 
    }, 1000);
}

// create todo
const createTodo = (todoId, todoValue) =>{
    const todoElement = document.createElement("li");
    todoElement.id = todoId;
   
    todoElement.innerHTML = `
    <span> ${todoValue} </span>
    <span> <button class = "btn" id = "deleteBtn"> <i class = "fa fa-trash"> </i> </button> </span>
    `    
    todoLists.appendChild(todoElement);

    todoElement.classList.add("li-style"); 

    /// active delete todo button
    const deleteButton = todoElement.querySelector("#deleteBtn");
    deleteButton.addEventListener("click", deleteTodo);
};

// call delete todo function
const deleteTodo = (event) =>{
    const selectedTodo = event.target.parentElement.parentElement.parentElement;

    todoLists.removeChild(selectedTodo);

     //show todo delete message
     showTodoMessage("Todo is deleted", "dranger");

     //delete from local storage and return others item
     let todos = getTodosFromLocalStorage();
    todos = todos.filter((todo)=> todo.todoId != selectedTodo.id);
    localStorage.setItem("mytodos", JSON.stringify(todos));
}

// getTodosFromLOcalStorage
const getTodosFromLocalStorage = () =>{
    return localStorage.getItem("mytodos") ? JSON.
    parse(localStorage.getItem("mytodos")) : [];
}

// add todo function
const addTodo = (event) =>{ 
    event.preventDefault();
    const todoValue = todoInput.value;

    //unique id (for create unique id we use Date.now())
    const todoId = Date.now().toString();
    createTodo(todoId, todoValue);

    //show todo created message
    showTodoMessage("Todo is created", "success");

    // add todo on local storage
    //collect existing data for check
    const todos = getTodosFromLocalStorage(); //using this function check alreday what are in local storage
    todos.push({todoId, todoValue});
    localStorage.setItem("mytodos", JSON.stringify(todos));
    todoInput.value= ""; 
}

//load todos 
const loadTodos = () => {
    const todos = getTodosFromLocalStorage();
    todos.map((todo)=> createTodo(todo.todoId, todo.todoValue));
}

///adding listeners
todoForm.addEventListener("submit", addTodo);

//load local storage todo data in window todo list with DOMContentLoaded event 
window.addEventListener("DOMContentLoaded", loadTodos);




