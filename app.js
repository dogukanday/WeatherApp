let apiKey = "9cbd170336fb07672cc9f23e7d24fbcb";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=   ";
let city = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let temp = document.querySelector(".temp");
let wind = document.querySelector(".wind");
let search = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");

async function getWeather(city) {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    wind.innerHTML = (data.wind.speed).toFixed(1) + " km/h";

    }

searchBtn.addEventListener("click",() => {
    getWeather(search.value);
});


