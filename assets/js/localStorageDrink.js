var drinkInputEl = document.querySelector('#drinkInput');
var drinkInputButtonEl = document.querySelector('#drinkInputButton');
var drinkInputFormEl = document.querySelector('.search-2');
var datalist = document.getElementById('drinkSearchHistoryAttribute');

//Gets the drink array from local storage and creates a dropdown menu with these array items so a user can click on a drink they searched before. 
var retrieveLocalStorageDrinks = function(){
    var arrayDrinkHistory = JSON.parse(localStorage.getItem('drinkSearchHistory'));
    if(arrayDrinkHistory==null){
        return
    }
    console.log(arrayDrinkHistory)
    // Clear existing options
    datalist.innerHTML = '';
    // Add options to the datalist tag
    arrayDrinkHistory.forEach(item => {
    const option = document.createElement('option');
    option.value = item;
    datalist.appendChild(option);
    });
}

//Gets the user input, adds to the array in local storage, and runs retrieveLocalStorageDrinks
var addLocalStorageDrinks = function(event){
    event.preventDefault(); 
   var drinkHistory = JSON.parse(localStorage.getItem('drinkSearchHistory'));
    var drinkInput = drinkInputEl.value
    console.log(drinkInput)
    if(drinkHistory==null){
        var drinkHistory = [];
        drinkHistory.push(drinkInput)
        localStorage.setItem('drinkSearchHistory', JSON.stringify(drinkHistory));
    }  
    else{
        drinkHistory = JSON.parse(localStorage.getItem('drinkSearchHistory'))
        drinkHistory.push(drinkInput)
        localStorage.setItem('drinkSearchHistory', JSON.stringify(drinkHistory));

    }
    retrieveLocalStorageDrinks()

}


retrieveLocalStorageDrinks()
drinkInputButtonEl.addEventListener("click",addLocalStorageDrinks)
