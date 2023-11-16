var foodInputEl = document.querySelector('#foodInput');
var foodInputButtonEl = document.querySelector('#foodInputBtn');
var foodInputFormEl = document.querySelector('.search-1');
var foodDatalist = document.getElementById('foodSearchHistoryAttribute');

//Gets the food array from local storage and creates a dropdown menu with these array items so a user can click on a food they searched before. 
var retrieveLocalStorageFood = function(){
    var arrayFoodHistory = JSON.parse(localStorage.getItem('foodSearchHistory'));
    if(arrayFoodHistory==null){
        return
    }
    console.log(arrayFoodHistory)
    // Clear existing options
    foodDatalist.innerHTML = '';
    // Add options to the foodDatalist
    arrayFoodHistory.forEach(item => {
    const option = document.createElement('option');
    option.value = item;
    foodDatalist.appendChild(option);
    });
}

//Gets the user input, adds to the array in local storage, and runs     retrieveLocalStorageFood()
var addLocalStorageFoods = function(event){
    event.preventDefault(); 
   var foodHistory = JSON.parse(localStorage.getItem('foodSearchHistory'));
    var foodInput = foodInputEl.value
    console.log(foodInput)
    if(foodHistory==null){
        var foodHistory = []; 
        foodHistory.push(foodInput)
        localStorage.setItem('foodSearchHistory', JSON.stringify(foodHistory));
    }  
    else{
        foodHistory = JSON.parse(localStorage.getItem('foodSearchHistory'))
        foodHistory.push(foodInput)
        localStorage.setItem('foodSearchHistory', JSON.stringify(foodHistory));

    }
    retrieveLocalStorageFood()

}


retrieveLocalStorageFood()
//drinkInputEl.addEventListener("click",retrieveLocalStorageFoods)
foodInputButtonEl.addEventListener("click",addLocalStorageFoods)
