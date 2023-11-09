var submitDrinkEl = document.querySelector('#drinkInputButton');



var drinkName = 'margarita'

//If a valid city name, change all the history buttons, call "getCityData"
var drinkSubmitHandler = function (event) {
    event.preventDefault();
    console.log("TEST")
    //var drinkName = nameInputEl.value;
    var apiDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+drinkName
    fetch(apiDrink).then(function (response) {
    if (response.ok){
        getDrinkRecipe(drinkName);
    } 
    else {
      alert('Please enter a valid drink name');
    }
})
  };


  //Function that calls the open weather API to get lat/lon of city, then calls Open Weather API again to get weather conditions for that lat/lon. Runs two functions to display current and forecast weather data: displayCurrentCityData and displayForecastCityData. 
  var getDrinkRecipe = function (drinkName) {
    //city = 'Atlanta, GA'
    var apiDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+drinkName
   // listIngredientsDrink = []

    fetch(apiDrink).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
          console.log(data.drinks[0])
          for(i=1;i<15;i++){
                console.log(i)
                if(i===1){
                    var ObjectDrink = {
                        name: drinkName,
                        ingredients: [data.drinks[0][`strIngredient${i}`]],
                        amounts: [data.drinks[0][`strMeasure${i}`]]
                    };
                    console.log(ObjectDrink.ingredients)
                }
                else{
                    ObjectDrink.ingredients.push(data.drinks[0][`strIngredient${i}`])
                    ObjectDrink.amounts.push(data.drinks[0][`strMeasure${i}`])
                }
            //listIngredientsDrink.push(data.drinks[0][`strIngredient${i}`]);
        }
        //listIngredientsDrink = listIngredientsDrink.filter(ingredient => ingredient !== null);
          console.log(ObjectDrink)
          })
        }
        
       
        else {
            alert('Error: ' + response.statusText);
        }

    })
};


  //Event Listeners
  submitDrinkEl.addEventListener('click', drinkSubmitHandler);
  