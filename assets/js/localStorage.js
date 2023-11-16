var drinkInputEl = document.querySelector('#drinkInput');
var drinkInputButtonEl = document.querySelector('#drinkInputButton');
var drinkInputFormEl = document.querySelector('.search-2');
var datalist = document.getElementById('drinkSearchHistoryAttribute');


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
   var drinkHistory = JSON.parse(localStorage.getItem('drinkSearchHistory'));
    var drinkInput = drinkInputEl.value
    console.log(drinkInput)
    if(drinkHistory==null){
        var drinkHistory = []; // Replace this with your actual search history array
        drinkHistory.push(drinkInput)
    }  
    else{
        drinkHistory = JSON.parse(localStorage.getItem('drinkSearchHistory'))
        drinkHistory.push(drinkInput)
        localStorage.setItem('drinkSearchHistory', JSON.stringify(drinkHistory));

    }
    retrieveLocalStorageDrinks()

}


retrieveLocalStorageDrinks()
//drinkInputEl.addEventListener("click",retrieveLocalStorageDrinks)
drinkInputButtonEl.addEventListener("click",addLocalStorageDrinks)
