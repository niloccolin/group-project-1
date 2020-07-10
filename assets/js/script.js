//STOCK API START
var searchBtn = document.querySelector("#searchBtn");
var stockInput = document.querySelector("#stockInput");
var stockDate = document.querySelector("#stockData");
var stockName = document.querySelector(".stockName");
var stockOpen = document.querySelector(".stockOpen");
var stockHigh = document.querySelector(".stockHigh");
var stockLow = document.querySelector(".stockLow");
var stockClose = document.querySelector(".stockClose");

var formInput = function(event) {
    event.preventDefault();

    var stockVal = stockInput.value.trim();

    if (stockVal) {
        stockData(stockVal);
        stockInput.value = "";
    }

    else {
        alert("Please Enter Symbol");
    }
};


var stockData = function(stock) {
    var apiUrl = ("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" +
        stock +
        "&outputsize=compact&apikey=D2S54E6DPH2K0C5M&datatype=json");

    fetch(apiUrl)
        .then (function(response) {
            return response.json(response);
        })
        .then (function(data) {
            console.log(data);
            var nameValue = ["data"]["Meta Data"]["Symbol"];



            stockName.innerHTML = nameValue;

        })


};





searchBtn.addEventListener("click", formInput);
//STOCK API END
