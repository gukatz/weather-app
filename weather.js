function getweatherforcity()
{
const writeWeatherData = (weatherData) => {
    let container = $('[data-role="weather-container"]')
    
    $.each(weatherData.main, (key, value) => {  
        if (key == "temp")  { 
        let containerfull = document.getElementById('containerfull')
        containerfull.innerHTML =""
        welcome_text = "The weather in <span class='red'>" + document.getElementById('locality-dropdown').value; + "</span>is: <br>"
        container.append('<h2>'+welcome_text+'<h2>')        
        
        container.append(`<p class="temp">Temperature: ${Math.round(value)}&#8451 </p></div>`)        
        }    
        
        if (key == "pressure")  {        
            container.append(`<br><p class="press">Pressure: ${Math.round(value)} </p></div>`)        
        }

        if (key == "humidity")  {        
           container.append(`<br><p class="hum">Humidity: ${Math.round(value)} </p></div>`)        
        }
    });

    
}
getWeather(writeWeatherData)

function getWeather(cb) {
    //1debugger
    let city = document.getElementById('locality-dropdown').value;
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?units=metric&q='+city+'&appid=cd15c284bb8714798d96aca940c8bbf3', data => {
        // 3debugger
        cb(data)
    })
    //2debugger
}
}