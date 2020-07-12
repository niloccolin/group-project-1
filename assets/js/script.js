//STOCK API START
var searchBtn = document.querySelector("#searchBtn");
var stockInput = document.querySelector("#stockInput");
var stockDate = document.querySelector("#stockData");
var stockName = document.querySelector(".stockName");
var stockOpen = document.querySelector(".stockOpen");
var stockHigh = document.querySelector(".stockHigh");
var stockLow = document.querySelector(".stockLow");
var stockClose = document.querySelector(".stockClose");
var lastRefreshed = document.querySelector(".lastRefreshed")

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
    var apiUrl = ("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
    stock +
    "&apikey=D2S54E6DPH2K0C5M&datatype=json");

    fetch(apiUrl)
        .then (function(response) {
            return response.json(response);
        })
        .then (function(data) {
            console.log(data);
            var nameValue = data["Global Quote"]["01. symbol"];
            var refreshedDate = data["Global Quote"]["07. latest trading day"];
            var openStock = data["Global Quote"]["02. open"];
            var highStock = data["Global Quote"]["03. high"];
            var lowStock = data["Global Quote"]["04. low"];
            var closeStock = data["Global Quote"]["08. previous close"];




            stockName.textContent = nameValue;
            lastRefreshed.textContent ="Last Refreshed: " + refreshedDate;
            stockOpen.textContent = "Open: " + openStock;
            stockHigh.textContent = "High: " + highStock;
            stockLow.textContent = "Low: " + lowStock;
            stockClose.textContent = "Previous Close: " + closeStock;


        })
};
searchBtn.addEventListener("click", formInput);
//STOCK API END


//PAYMENT CAL START
function computeLoan() {
    var amount = document.getElementById('amount').value;
    var interest_rate = document.getElementById('interest_rate').value;
    var months = document.getElementById('months').value;

    var interest = (amount * (interest_rate * .01)) / months;
    var payment = ((amount / months) + interest).toFixed(2);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('payment').innerHTML = "Monthly Payment = $" + payment;
};
//PAYMENT CAL CLOSE