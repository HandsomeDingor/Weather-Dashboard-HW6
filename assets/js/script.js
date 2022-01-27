var APIkey = "350d6ec5fe090d500d1f7a39a9d83803";
var cityname = ""


var currentCityEl = document.getElementById("currentCity")
var currentDayEl = document.getElementById("currentDay")
var currentWeatherIconEl = document.getElementById("currentWeatherIcon")
var nowTempEl = document.getElementById("nowTemp")
var nowWindEl = document.getElementById("nowWind")
var nowHumidityEl = document.getElementById("nowHumidity")
var nowIndexEl = document.getElementById("nowIndex")
var nowIndexNumberEl = document.getElementById("nowIndexNumber")

var day1El = document.getElementById("day1")
var day1ImgEl = document.getElementById("day1Img")
var day1TempEl = document.getElementById("day1Temp")
var day1WindEL = document.getElementById("day1Wind")
var day1HumidityEl = document.getElementById("day1Humidity")

var day2El = document.getElementById("day2")
var day2ImgEl = document.getElementById("day2Img")
var day2TempEl = document.getElementById("day2Temp")
var day2WindEL = document.getElementById("day2Wind")
var day2HumidityEl = document.getElementById("day2Humidity")

var day3El = document.getElementById("day3")
var day3ImgEl = document.getElementById("day3Img")
var day3TempEl = document.getElementById("day3Temp")
var day3WindEL = document.getElementById("day3Wind")
var day3HumidityEl = document.getElementById("day3Humidity")

var day4El = document.getElementById("day4")
var day4ImgEl = document.getElementById("day4Img")
var day4TempEl = document.getElementById("day4Temp")
var day4WindEL = document.getElementById("day4Wind")
var day4HumidityEl = document.getElementById("day4Humidity")

var day5El = document.getElementById("day5")
var day5ImgEl = document.getElementById("day5Img")
var day5TempEl = document.getElementById("day5Temp")
var day5WindEL = document.getElementById("day5Wind")
var day5HumidityEl = document.getElementById("day5Humidity")


function getNowCity() {
    var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=" + APIkey;
    console.log(weatherUrl)
    fetch(weatherUrl)
        .then(function (response) {

            return response.json()

        }).then(function (data) {
            console.log(data)
            currentCityEl.textContent = data.name
            currentDayEl.textContent = moment().format('YYYY-MM-D');
            currentWeatherIconEl.setAttribute("src", "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png")
            nowTempEl.textContent = "Temp: " + data.main.temp + " °F"
            nowWindEl.textContent = "wind: " + data.wind.speed + " MPH"
            nowHumidityEl.textContent = "Humidity: " + data.main.humidity + " %"


            var uvUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=" + APIkey
            fetch(uvUrl)
                .then(function (response) {

                    return response.json()

                }).then(function (data) {

                    console.log(uvUrl)

                    nowIndexNumberEl.textContent = data.current.uvi

                    console.log(nowIndexNumberEl)
                    if (data.current.uvi <= 2) {
                        nowIndexNumberEl.setAttribute("class", "favorable")
                    } else if (data.current.uvi > 2 && data.current.uvi <= 8) {
                        nowIndexNumberEl.setAttribute("class", "moderate")
                    }
                    else if (data.current.uvi > 8) {
                        nowIndexNumberEl.setAttribute("class", "severe")
                    };

                    console.log(nowIndex)

                }
                )

        })
};









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
                        temp: forecastData.list[i].main.temp,
                        wind: forecastData.list[i].wind.speed,
                        humidity: forecastData.list[i].main.humidity,

                    })
                }

            } console.log(ourForecastObject)

            day1El.textContent = ourForecastObject[0].date
            day1ImgEl.setAttribute("src", "http://openweathermap.org/img/wn/" + ourForecastObject[0].icon + "@2x.png")
            day1TempEl.textContent = "Temp: " + ourForecastObject[0].temp
            day1WindEL.textContent = "Wind: " + ourForecastObject[0].wind
            day1HumidityEl.textContent = "Humidity: " + ourForecastObject[0].humidity

            day2El.textContent = ourForecastObject[1].date
            day2ImgEl.setAttribute("src", "http://openweathermap.org/img/wn/" + ourForecastObject[1].icon + "@2x.png")
            day2TempEl.textContent = "Temp: " + ourForecastObject[1].temp
            day2WindEL.textContent = "Wind: " + ourForecastObject[1].wind
            day2HumidityEl.textContent = "Humidity: " + ourForecastObject[1].humidity

            day3El.textContent = ourForecastObject[2].date
            day3ImgEl.setAttribute("src", "http://openweathermap.org/img/wn/" + ourForecastObject[2].icon + "@2x.png")
            day3TempEl.textContent = "Temp: " + ourForecastObject[2].temp
            day3WindEL.textContent = "Wind: " + ourForecastObject[2].wind
            day3HumidityEl.textContent = "Humidity: " + ourForecastObject[2].humidity

            day4El.textContent = ourForecastObject[3].date
            day4ImgEl.setAttribute("src", "http://openweathermap.org/img/wn/" + ourForecastObject[3].icon + "@2x.png")
            day4TempEl.textContent = "Temp: " + ourForecastObject[3].temp
            day4WindEL.textContent = "Wind: " + ourForecastObject[3].wind
            day4HumidityEl.textContent = "Humidity: " + ourForecastObject[3].humidity

            day5El.textContent = ourForecastObject[4].date
            day5ImgEl.setAttribute("src", "http://openweathermap.org/img/wn/" + ourForecastObject[4].icon + "@2x.png")
            day5TempEl.textContent = "Temp: " + ourForecastObject[4].temp
            day5WindEL.textContent = "Wind: " + ourForecastObject[4].wind
            day5HumidityEl.textContent = "Humidity: " + ourForecastObject[4].humidity



        })
};





var searchButtonEl = document.getElementById("search")
var inputCityEl = document.getElementById("inputCity")

var historyEl = document.getElementById("history")

function searchCity() {
    
    // display the container search city current and 5 days weather
    containerEl.setAttribute("class","col-md-8 m-3")


    console.log("click")
    cityname = inputCityEl.value
    const newButton = document.createElement("button");
    newButton.setAttribute("class", "rounded col  m-2")
    newButton.setAttribute("searchCity",cityname)
    newButton.textContent = inputCityEl.value
    historyEl.appendChild(newButton);
    console.log(inputCityEl.value)
    getNowCity()
    get5DaysCity()

}

var pastSearchHandler = function (event) {
    var city = event.target.getAttribute("searchCity")
    if (city) {
        cityname = city
        getNowCity()
        get5DaysCity()
    }
}

// hide container 
var containerEl = document.getElementById("container")


searchButtonEl.addEventListener("click", searchCity)
historyEl.addEventListener("click",pastSearchHandler)