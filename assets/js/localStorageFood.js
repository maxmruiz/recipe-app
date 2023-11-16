var foodInputEl = document.querySelector('#foodInput');
var foodInputButtonEl = document.querySelector('#foodInputBtn');
var foodInputFormEl = document.querySelector('.search-1');
var datalist = document.getElementById('foodSearchHistoryAttribute');


var retrieveLocalStorageFood = function(){
    var arrayFoodHistory = JSON.parse(localStorage.getItem('foodSearchHistory'));
    if(arrayFoodHistory==null){
        return
    }
    console.log(arrayFoodHistory)
    // Clear existing options
    datalist.innerHTML = '';
    // Add options to the datalist
    arrayFoodHistory.forEach(item => {
    const option = document.createElement('option');
    option.value = item;
    datalist.appendChild(option);
    });
}


var addLocalStorageFoods = function(event){
    event.preventDefault(); 
   var foodHistory = JSON.parse(localStorage.getItem('foodSearchHistory'));
    var foodInput = foodInputEl.value
    console.log(foodInput)
    if(drinkHistory==null){
        var foodHistory = []; // Replace this with your actual search history array
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
