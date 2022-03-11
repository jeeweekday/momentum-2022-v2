const API_KEY = "344bb4e692267f93448a58c4b2ba40b6";

function getGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    // console.log("You live in", lat, lng);
    const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(weatherUrl).then((response) => response.json()).then((data) => {
        const weatherCity = document.querySelector("#weather-box span:first-child");
        const weatherCondition = document.querySelector("#weather-box span:last-child");
        weatherCity.innerText = data.name;
        weatherCondition.innerText = data.weather[0].main;
    }) //API, API사용법 및 fetch에 대하여.
}
function getGeoError() {
    alert("Can't find your loaction. No weather for you")
}
navigator.geolocation.getCurrentPosition(getGeoOk,getGeoError);