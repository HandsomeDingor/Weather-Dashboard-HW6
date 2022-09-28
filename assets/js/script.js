// set value
var APIkey = "462296c16e5138d210f6af2dc8b63480";
var cityname = ""



var leftContainerEl = document.getElementById("leftCon")
var historyDivEl = document.getElementById("historyDiv")
var historyEl = document.getElementById("history")
var clearEl = document.getElementById("clear")



// hide container 
var containerEl = document.getElementById("container")

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



var searchButtonEl = document.getElementById("search")
var inputCityEl = document.getElementById("inputCity")


let saveSearch = JSON.parse(localStorage.getItem("city")) || [];




function getNowCity() {
    //OpenWeather Open Api
    var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=" + APIkey;
    
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
    var weather5Url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&appid=" + APIkey;
    console.log(weather5Url)
    
    fetch(weather5Url)
        .then(function (response) {

            return response.json()

        }).then(function (forecastData) {
            var ourForecastObject = [];
            console.log(forecastData)

            // only show 5 days weather
            for (var i = 0; i < forecastData.list.length; i++) {
                // there are 40 interval so %8 to get only 5days
                if (i % 8 === 0) {
                    //push in array
                    ourForecastObject.push({
                        date: forecastData.list[i].dt_txt.split(" ")[0],
                        icon: forecastData.list[i].weather[0].icon,
                        temp: forecastData.list[i].main.temp,
                        wind: forecastData.list[i].wind.speed,
                        humidity: forecastData.list[i].main.humidity,

                    })
                }

            } console.log(ourForecastObject)

            // display each days value ------ can use for loop to less code (lazy)
            day1El.textContent = ourForecastObject[0].date
            day1ImgEl.setAttribute("src", "http://openweathermap.org/img/wn/" + ourForecastObject[0].icon + "@2x.png")
            day1TempEl.textContent = "Temp: " + ourForecastObject[0].temp + " °F"
            day1WindEL.textContent = "Wind: " + ourForecastObject[0].wind + " MPH"
            day1HumidityEl.textContent = "Humidity: " + ourForecastObject[0].humidity + " %"

            day2El.textContent = ourForecastObject[1].date
            day2ImgEl.setAttribute("src", "http://openweathermap.org/img/wn/" + ourForecastObject[1].icon + "@2x.png")
            day2TempEl.textContent = "Temp: " + ourForecastObject[1].temp + " °F"
            day2WindEL.textContent = "Wind: " + ourForecastObject[1].wind + " MPH"
            day2HumidityEl.textContent = "Humidity: " + ourForecastObject[1].humidity + " %"

            day3El.textContent = ourForecastObject[2].date
            day3ImgEl.setAttribute("src", "http://openweathermap.org/img/wn/" + ourForecastObject[2].icon + "@2x.png")
            day3TempEl.textContent = "Temp: " + ourForecastObject[2].temp + " °F"
            day3WindEL.textContent = "Wind: " + ourForecastObject[2].wind + " MPH"
            day3HumidityEl.textContent = "Humidity: " + ourForecastObject[2].humidity + " %"

            day4El.textContent = ourForecastObject[3].date
            day4ImgEl.setAttribute("src", "http://openweathermap.org/img/wn/" + ourForecastObject[3].icon + "@2x.png")
            day4TempEl.textContent = "Temp: " + ourForecastObject[3].temp + " °F"
            day4WindEL.textContent = "Wind: " + ourForecastObject[3].wind + " MPH"
            day4HumidityEl.textContent = "Humidity: " + ourForecastObject[3].humidity + " %"

            day5El.textContent = ourForecastObject[4].date
            day5ImgEl.setAttribute("src", "http://openweathermap.org/img/wn/" + ourForecastObject[4].icon + "@2x.png")
            day5TempEl.textContent = "Temp: " + ourForecastObject[4].temp + " °F"
            day5WindEL.textContent = "Wind: " + ourForecastObject[4].wind + " MPH"
            day5HumidityEl.textContent = "Humidity: " + ourForecastObject[4].humidity + " %"



        })
};






// getting input value
function searchCity() {
    // check if empty value stop it
    if (inputCityEl.value == "") {
        return;
    }
    // display the container search city current and 5 days weather
    containerEl.setAttribute("class", "col-md-8 m-3")
    historyEl.setAttribute("class", "")
    console.log("click")
    cityname = inputCityEl.value
   
   
    // creat container for history selection
    var newButton = document.createElement("button");
    newButton.setAttribute("class", "rounded col  m-2")
    newButton.setAttribute("searchCity", cityname)
    newButton.setAttribute("type","button")
    newButton.textContent = inputCityEl.value
   
    historyDivEl.appendChild(newButton);
    console.log(inputCityEl.value)
    
    
    saveSearch.push(inputCityEl.value)

    localStorage.setItem("city",JSON.stringify(saveSearch))
   
  

    


    
    getNowCity()
    get5DaysCity()

}




//load local storage and display on the left container
function LoadHistory(){
    if(saveSearch != null){
        
        for (var i=0; i<saveSearch.length; i++){
        var newButton = document.createElement("button");
        newButton.setAttribute("class", "rounded col  m-2")
        newButton.setAttribute("searchCity", saveSearch[i])
        newButton.setAttribute("type","button")
        newButton.textContent = saveSearch[i]
        historyDivEl.append(newButton);
        }
    }


}




//clear local storage 
function clearHistory(){

    localStorage.clear()
    saveSearch=[];
    historyEl.removeChild(historyDivEl)

    historyDivEl= document.createElement("div")

    historyDivEl.setAttribute("id","historyDiv")
    historyEl.append(historyDivEl)
   
    console.log("clear")
    historyEl.setAttribute("class", "hide")
    containerEl.setAttribute("class", "col-md-8 m-3 hide")

}


function pastSearchHandler(event) {

    containerEl.setAttribute("class", "col-md-8 m-3")
    var city = event.target.getAttribute("searchCity")
    console.log(city)

    // if select the GAP, stop the function
    if(city === null)  {
        return;
    } else {

    
    // call function
    cityname=city 

    getNowCity()

    get5DaysCity();

}

}




// add click event
searchButtonEl.addEventListener("click", searchCity)

clearEl.addEventListener("click", clearHistory)


historyEl.addEventListener("click", pastSearchHandler)


// load Search history first
LoadHistory()