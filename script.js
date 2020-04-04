var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');

var cityName = document.querySelector('.cityName');

var desc = document.querySelector('.desc');

var temp = document.querySelector('.temp');
var feelsLike = document.querySelector('.feelsLike');



button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value +
            '&appid=b6b56eed9f46a16b4db9e2c3ec998738')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var feelsLikeValue = data['main']['feels_like'];
            var descValue = data['weather'][0]['description'];
            var location = data['sys']['country'];


            cityName.innerHTML = "Location: " + nameValue + "," + location;
            temp.innerHTML = "Temperature: " + Math.round(tempValue - 273) +
                " C";
            feelsLike.innerHTML = "Feels Like : " + Math.round(feelsLikeValue - 273) + "C";
            desc.innerHTML = "Condition: " + descValue;

        })

        .catch(err => alert("Sorry no data available for this city!!"))
})