var APIkey = "350d6ec5fe090d500d1f7a39a9d83803";
var cityname = "new york"

var nowTempEl = document.getElementById("nowTemp")
var nowWindEl = document.getElementById("nowWind")
var nowHumidityEl = document.getElementById("nowHumidity")
var nowIndexEl = document.getElementById("nowIndex")



function getNowCity() {
    var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=" + APIkey;
    console.log(weatherUrl)
    fetch(weatherUrl)
        .then(function (response) {

            return response.json()

        }).then(function (data) {
            console.log(data)
            nowTempEl.textContent = "Temp: " + data.main.temp + " °F"
            nowWindEl.textContent = "wind: " + data.wind.speed + " MPH"
            nowHumidityEl.textContent = "Humidity: " + data.main.humidity + " %"
            nowIndexEl.textContent = "wind: " + data.wind.speed + " MPH"


        })
};

getNowCity()


function get5DaysCity() {
    var weather5Url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&units=imperial&appid=" + APIkey;
    console.log(weather5Url)
    fetch(weather5Url)
        .then(function (response) {

            return response.json()

        }).then(function (forecastData) {
            var ourForecastObject = [];
            console.log(forecastData)
            for (var i = 0; i < forecastData.list.length; i++) {
                if (i % 8 === 0) {
                    ourForecastObject.push({
                        date: forecastData.list[i].dt_txt.split(" ")[0],
                        icon: forecastData.list[i].weather[0].icon,
                        iconAlt: forecastData.list[i].weather[0].description,
                        temp: forecastData.list[i].main.temp,
                        humidity: forecastData.list[i].main.humidity,
                    })
                }

            } console.log(ourForecastObject)
            // nowTempEl.textContent = "Temp: " + data.main.temp + " °F"
            // nowWindEl.textContent = "wind: " + data.wind.speed + " MPH"
            // nowHumidityEl.textContent = "Humidity: " + data.main.humidity + " %"
            // nowIndexEl.textContent = "wind: " + data.wind.speed + " MPH"
        })
};

get5DaysCity()