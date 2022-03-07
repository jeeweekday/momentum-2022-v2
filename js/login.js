const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#login-greeting");
const greetingSpan = greeting.querySelector("span:nth-child(2)");
const loginReset = document.querySelector("#login-reset");

function paintGreeting(name) {
    greetingSpan.innerHTML = name;
    greeting.classList.remove("hidden");
    loginReset.classList.remove("hidden");
}
function onSubmitLogin(event) {
    // event.preventDefault();
    const saveName = loginInput.value;
    loginForm.classList.add("hidden");
    localStorage.setItem("name",saveName);
    paintGreeting(saveName);
}
/*
    event.preventDefault를 하지않고
    localstorage에 저장한것만 이용해도 되지 않을까?
*/
const getName = localStorage.getItem("name")
if (getName != null) {
    paintGreeting(getName);
} else {
    loginForm.classList.remove("hidden");
}
loginForm.addEventListener("submit",onSubmitLogin);

// reset 기능 추가. html에 onclick으로 해보자.
function onResetLogin() {
    localStorage.removeItem("name");
}