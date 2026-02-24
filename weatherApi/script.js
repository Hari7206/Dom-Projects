let searchCityInput = document.getElementById('city')
let searchCityBtn = document.querySelector('.search i')
let locationName = document.getElementById('loca-name')
let currentDate = document.getElementById('current-date')
let weatherIcon = document.getElementById('weatherIcon')
let temprature = document.getElementById('temp')
let tempDiscription = document.getElementById('weatherDescription')
let humidityPercent = document.getElementById('humidity')
let windSpeedPercent = document.getElementById('windSpeed')
let futureDates = document.querySelectorAll('.futureDate');
let futureIcons = document.querySelectorAll('.futureIcon');
let futureTemps = document.querySelectorAll('.futureTemp');
let main = document.querySelector('.main');
let defaultVal = document.querySelector('.default')
let show = document.querySelector('.show')

const weatherMap = {
    Clouds: "☁️",
    Clear: "☀️",
    Rain: "🌧️",
    Snow: "❄️",
    Thunderstorm: "⛈️",
    Drizzle: "🌦️",
    Mist: "🌫️"
};

const weatherBg = {
    Clouds: "https://i.pinimg.com/originals/a8/05/c2/a805c2779be7f60479308793234538dc.gif",
    Clear: "https://i.pinimg.com/originals/3a/2a/8f/3a2a8f79d9d4a7d36a258fb129ba36f9.gif",
    Rain: "https://i.pinimg.com/originals/9c/86/11/9c8611ac7e559e9b46d9f87a99c2a534.gif",
    Snow: "https://i.pinimg.com/originals/56/73/6e/56736e99269e9e1fe8eed4b8b911644e.gif",
    Thunderstorm: "https://i.pinimg.com/originals/2b/76/7c/2b767c6f5b3956d7994af1100ac428f7.gif",
    Drizzle: "https://i.pinimg.com/originals/16/97/a8/1697a8123799e637bd45de7cd57eca1e.gif",
    Mist: "https://i.pinimg.com/originals/03/53/cd/0353cdf9b3b43ea8e16506cde3ec94ef.gif"
}

const d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
currentDate.innerHTML = `${days[d.getDay()]} ,  ${d.getDate()} ${months[d.getMonth()]} `



















const apiKey = "key here";


async function checkWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

        if (!response.ok) {
            throw new Error("Something went wrong ! maybe wrong city name");
        }
          if (response.status === 404) {
        show.style.display = 'none';
        defaultVal.style.display = 'block';
        alert("City not found");
        return;
    }
        let data = await response.json()
        // console.log(data);
        const condition = data.weather[0].main;
        const bgUrl = weatherBg[condition];
        if (bgUrl) {
  main.style.backgroundImage = `url(${bgUrl})`;
}
        weatherIcon.innerHTML = weatherMap[condition] || "🌍";

        locationName.innerHTML = data.name;
        temprature.innerHTML = Math.round(data.main.temp) + "°C";
        tempDiscription.innerHTML = data.weather[0].description;
        humidityPercent.innerHTML = data.main.humidity + "%"
        windSpeedPercent.innerHTML = data.wind.speed + "M/s"

    }
    catch (error) {
        console.log(error);
        console.error("Error:", error);
    }
}


searchCityInput.addEventListener('keypress', (e) => {

    if (e.key === 'Enter') {
        searchWeather();
    }
});

searchCityBtn.addEventListener('click', () => {
    searchWeather();
});
function searchWeather() {
    const city = searchCityInput.value.trim();

    if (city === "") return; 

    checkWeather(city);
    getForecast(city);

    show.style.display = 'block';
    defaultVal.style.display = 'none';
}

async function getForecast(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
         if (response.status === 404) {
        show.style.display = 'none';
        defaultVal.style.display = 'block';
        alert("City not found");
        return;
    }
    const data = await response.json();
    const forecastIndices = [8, 16, 24];


    forecastIndices.forEach((dataIndex, index) => {
        const forecast = data.list[dataIndex];
        const condition = forecast.weather[0].main
        const dateObj = new Date(forecast.dt_txt);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        futureDates[index].innerHTML = `${dateObj.getDate()}  ${monthNames[dateObj.getMonth()]}`
        futureIcons[index].innerHTML = weatherMap[condition] || '🌍';
        futureTemps[index].innerHTML = Math.round(forecast.main.temp) + '°C';
        console.log(data);
    })
}








