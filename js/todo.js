const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const todoArr = [];

function onSubmitTodo(event) {
    event.preventDefault();
    const whatToDo = todoInput.value;
    todoInput.value = "";
    paintTodo(whatToDo);
}
function paintTodo(todo) {
    const list = document.createElement("li");
    todoList.appendChild(list);
    const span1 = document.createElement("span");
    list.appendChild(span1);
    span1.innerText = todo;
    const span2 = document.createElement("span");
    list.appendChild(span2);
    span2.innerText = "V"
    // span2.addEventListener("click",deleteTodo);
    span2.onclick = deleteTodo; //이렇게 해도 상관 없을까?
    
    todoArr.push(todo);
    localStorage.setItem("todo",JSON.stringify(todoArr));
}
function deleteTodo(event) {
    event.target.parentElement.remove(); //this 사용 가능
}

const savedTodo = localStorage.getItem("todo");
if(savedTodo != null) {
    const newTodo = JSON.parse(savedTodo);
    //forEach()사용해야함.
    newTodo.forEach(paintTodo);
}
todoForm.addEventListener("submit",onSubmitTodo);