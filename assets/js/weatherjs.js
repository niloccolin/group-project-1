var searchV = document.querySelector('#search-value')
var name = document.querySelector('#name') 
var wind = document.querySelector('#wind') 
var humidity = document.querySelector('#humidity')
var temp = document.querySelector('#temp') 
var uv = document.querySelector('#uv')
var desc = document.querySelector('#desc')
var day = document.querySelector('#day')
var lat;
var lng;
var x;

day = moment().format('L');

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };


function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    lat = crd.latitude;
    lng = crd.longitude;
    console.log("lat is " + lat);

    searchcities(lat, lng)

    return (lat, lng)
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

navigator.geolocation.getCurrentPosition(success, error, options);    

 // Previous code from: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition //

function searchcities(lat, lng){
       console.log("we are in searchcities");
       let queryurl = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid=8b58730b831d9dfe90f82c5fd73e1a99&units=imperial"  
       var name = document.getElementById('name') 
       var humidity = document.getElementById('humidity')
       var temp = document.getElementById('temp')
       var wind = document.getElementById('wind')
       var uv = document.getElementById('uv')
       var day = document.getElementById('day') 
       var desc = document.querySelector('#desc')
        
       fetch(queryurl).then(function(response){
       return response.json()
       console.log(response);
       }).then(function(response){
       console.log(response);
       name.innerHTML = response.name 
      
       // need to add name to the cities list 
       console.log(response.name)                   // undefined?!
       day.innerHTML = moment().format('L');
       weather = response.weather[0].icon
       desc.src = "http://openweathermap.org/img/w/" + weather + ".png";
     
       //Get current temperature
       temp.innerHTML = "Temperature is " + response.main.temp + " F" 
       console.log(response.main.temp)
       
       //Humidity
       humidity.innerHTML = "Humidity is " + response.main.humidity + "%"
       console.log(response.main.humidity)
      

       //Wind 
       wind.innerHTML = "Wind speed is " + response.wind.speed + " MPH"
       console.log(response.wind.speed)
     
        // UV variable
        uvfunct(response.coord.lat, response.coord.lon)

        })  .catch(function(err) {
            console.log('error')
     })
    
     }

// UV function & 5-day forecast using One Call API
var uvfunct = function(lat,lon) {
   var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid=8b58730b831d9dfe90f82c5fd73e1a99&units=imperial"
   day = moment().format('L');
   fetch(apiUrl).then(function(result) {
        console.log(result)
        console.log('here')
        return result.json();
    }).then(function(result) {
        console.log(result)
        uv.innerHTML = "UV index is " + result.current.uvi;
        

    })
   }

