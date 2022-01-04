function formatDate(timestamp){
    //calculate the date
    let date = new Date(timestamp);
    let hours= date.getHours();
    let minutes = date.getMinutes();
    let days= ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"]
    let day= days[date.getDay()];

    return '${day} ${hours}';
} 
 
 
 function displayTemperature(response){
     console.log(response.data.main.temp);
     let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
     let humidityElement = document.querySelector("#humidity");
     let windElement = document.querySelector("#wind");
    
     temperatureElement.innerHTML = Math.round(response.data.main.temp);
     cityElement.innerHTML= response.data.name;
     descriptionElement.innerHTML= response.data.weather[0].description;
     humidityElement.innerHTML = response.data.main.humidity;
     windElement.innerHTML = formatDate(response.data.wind.speed);
     
     dateElement = document.querySelector("#date");
     dateElement.innerHTML = Math.round(response.data.dt*1000)
    
 }
 
let apiKey = "1969214d93e86fb47c6d955926f85399";
let city = "Bodrum";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);