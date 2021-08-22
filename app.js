//declaring variables 
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var cityname = document.querySelector('.cityname')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

//adding eventListener to button 
button.addEventListener('click', function() {
    //using openweathermap third party api service to fetch data of particular inputted city 
    //here, change the appid api key to your own api key of openweathermap
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +inputValue.value+'&appid=7f74de863c72fe06bcb5e3ab530849f8')
    .then(response => response.json())
    .then(data => {
        //fetching name of city
        var nameValue = data['name'];
        //fetching temperature in kelvin 
        var tempValue = data['main']['temp'];
        //fetching description of weather 
        var descValue = data['weather'][0]['description'];

        //displaying name of city 
        cityname.innerHTML = nameValue;
        //displaying temperature of city 
        temp.innerHTML = tempValue;
        //displaying description of inputted city weather
        desc.innerHTML = descValue;
    })

//statement to handle errors if any
.catch(err => alert("Wrong city name!"))
})
