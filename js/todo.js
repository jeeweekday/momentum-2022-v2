const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const todoArr = [];

function onSubmitTodo(event) {
    event.preventDefault();
    const whatToDo = todoInput.value;
    const list = document.createElement("li");
    todoList.appendChild(list);
    const span1 = document.createElement("span");
    list.appendChild(span1);
    span1.innerText = whatToDo;
    const span2 = document.createElement("span");
    list.appendChild(span2);
    span2.innerText = "V"
    
    todoArr.push(whatToDo);
    localStorage.setItem("todo",JSON.stringify(todoArr));
}

savedTodo = localStorage.getItem("todo");
if(savedTodo != null) {
    const newTodo = JSON.parse(savedTodo);
    console.log(newTodo);
    //forEach()사용해야함.
}

todoForm.addEventListener("submit",onSubmitTodo);