const clockHours = document.querySelector("#clock span:first-child");
const clockMinutes = document.querySelector("#clock span:nth-child(2)");
const clockSeconds = document.querySelector("#clock span:last-child");
//CSS를 좀더 활용하기 위해 span을 세개 만듬.
function getTime(){
    let currentTime = new Date();
    //const가 아닌 let으로 선언하는것이 올바른가?
    const cHours = currentTime.getHours().toString().padStart(2,"0");
    clockHours.innerHTML = cHours;
    const cMinutes = ":"+currentTime.getMinutes().toString().padStart(2,"0");
    clockMinutes.innerHTML = cMinutes;
    const cSeconds = ":"+currentTime.getSeconds().toString().padStart(2,"0");
    clockSeconds.innerHTML = cSeconds;
}

getTime();
setInterval(getTime,1000);