var drinkInputEl = document.querySelector('#drinkInput');
var drinkInputButtonEl = document.querySelector('#drinkInputButton');
var drinkInputFormEl = document.querySelector('.search-2');
var datalist = document.getElementById('drinkSearchHistoryAttribute');


//console.log("HEYYYY1")


//drinkInputFormEl.addEventListener("click",addLocalStorageDrinks)

var drinkHistory = []; // Replace this with your actual search history array
var retrieveLocalStorageDrinks = function(){
    var arrayDrinkHistory = JSON.parse(localStorage.getItem('drinkSearchHistory'));
    if(arrayDrinkHistory==null){
        return
    }
    console.log(arrayDrinkHistory)
    // Clear existing options
    datalist.innerHTML = '';
    // Add options to the datalist
    arrayDrinkHistory.forEach(item => {
    const option = document.createElement('option');
    option.value = item;
    datalist.appendChild(option);
    });
}


var addLocalStorageDrinks = function(event){
    event.preventDefault(); 
    console.log("HEYYYY")
    var drinkInput = drinkInputEl.value
    console.log("LLL//")
    console.log(drinkInput)
    drinkHistory.push(drinkInput)
    localStorage.setItem('drinkSearchHistory', JSON.stringify(drinkHistory));
    //retrieveLocalStorageDrinks()





}


//retrieveLocalStorageDrinks()
//drinkInputEl.addEventListener("click",retrieveLocalStorageDrinks)
drinkInputButtonEl.addEventListener("click",addLocalStorageDrinks)
