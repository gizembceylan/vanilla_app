function formatDate(timestamp) {

    let date = new Date(timestamp);

    let hours= date.getHours();
    if (hours <10){
      hours= `0${hours}`
    }

    let minutes = date.getMinutes();
    if (minutes <10){
      minutes =`0${minutes}`;
    }

    let days= ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
    let day= days[date.getDay()];


    return `${day} ${hours}:${minutes}`; 
} 
 

 
 function displayTemperature(response){

    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");


celciusTemperature = response.data.main.temp;



     temperatureElement.innerHTML = Math.round(celciusTemperature);
     cityElement.innerHTML= response.data.name;
     descriptionElement.innerHTML= response.data.weather[0].description;
     humidityElement.innerHTML = response.data.main.humidity;
     windElement.innerHTML = Math.round(response.data.wind.speed);
     dateElement.innerHTML = formatDate(response.data.dt * 1000);

    iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

    iconElement.setAttribute("alt", response.data.weather[0].description);
 }


function search(city){
let apiKey = "1969214d93e86fb47c6d955926f85399";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);

 }

 function handleSubmit(event) {
   event.preventDefault();
   let cityInputElement = document.querySelector("#city-input");
   search(cityInputElement.value);
 }

 function displayFahrenheitTemperature(event){
   event.preventDefault();
   let temperatureElement = document.querySelector("#temperature");
   //remove the active class the celcius link 
celciusLink.classList.remove("active");
fahrenheitLink.classList.add("active");
   let fahrenheitTemperature = (celciusTemperature * 9) / 5 + 32;
   temperatureElement.innerHTML = Math.round(fahrenheitTemperature); 
 }

 function displayCelciusTemperature(event){
   event.preventDefault();
celciusLink.classList.add("active");
fahrenheitLink.classList.remove("active");
   let temperatureElement = document.querySelector("#temperature");

   temperatureElement.innerHTML = Math.round(celciusTemperature);
 }

 let celciusTemperature = null;


let form = document.querySelector("#search-form");
form.addEventListener("submit",handleSubmit);



let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", displayCelciusTemperature);


 search("New York");