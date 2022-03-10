const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todoArr = [];

function onSubmitTodo(event) {
    event.preventDefault();
    const whatToDo = todoInput.value;
    todoInput.value = "";
    const whatToDoObj = {"id":Date.now(),"text":whatToDo};
    todoArr.push(whatToDoObj);
    saveTodo();
    paintTodo(whatToDoObj);
}
function paintTodo(todo) {
    const list = document.createElement("li");
    todoList.appendChild(list);
    list.id = todo.id;
    const span1 = document.createElement("span");
    list.appendChild(span1);
    span1.innerText = todo.text;
    const span2 = document.createElement("span");
    list.appendChild(span2);
    span2.innerText = "V"
    // span2.addEventListener("click",deleteTodo);
    span2.onclick = deleteTodo; //이렇게 해도 상관 없을까?  
}
function saveTodo() {
    localStorage.setItem("todo",JSON.stringify(todoArr));
}
function deleteTodo(event) {
    const list = event.target.parentElement; //this 사용 가능
    list.remove();
    todoArr = todoArr.filter(todo => todo.id !== parseInt(list.id)); 
    //filter 는 new array를 되돌려줌! 돌려받는 id 타입은 문자열이기때문에 변환해야함! 중요!!
    saveTodo();
}

const savedTodo = localStorage.getItem("todo");
if(savedTodo !== null) {
    const newTodo = JSON.parse(savedTodo);
    todoArr = newTodo
    saveTodo();
    //forEach()사용해야함.
    newTodo.forEach(paintTodo);
}
todoForm.addEventListener("submit",onSubmitTodo);