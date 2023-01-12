let minTemp=document.getElementById("minTemp");
let maxTemp=document.getElementById("maxTemp");

getWeatherData()
function getWeatherData(){
    let country="Hungary";
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+country+"&APPID=e11c9212afde49c6a9abe57107451f91&units=metric").then(res =>res.json().then(data =>{
        showWeatherData(data);
    }))
}

function showWeatherData(data){
    minTemp.innerHTML=Math.round(data.main.temp_min)+"°";
    maxTemp.innerHTML=Math.round(data.main.temp_max)+"°";
    document.querySelector(".icon").src="https://openweathermap.org/img/w/"+data.weather[0].icon+".png";
}