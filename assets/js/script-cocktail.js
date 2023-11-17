var drinkNameEl = document.querySelector('#drinkInput');
var submitDrinkEl = document.querySelector('#drinkInputButton');
//var ingredientsEl = document.querySelector('#ingredients-list');
//var descriptionEl = document.querySelector('#cocktail-description');
//var imageEl = document.querySelector('.cocktail-image');
const drinkCards = document.querySelector(".drink-cards");


//If a valid cocktail name, change all the history buttons, call "getDrinkRecipe"
var drinkSubmitHandler = function (event) {
    drinkCards.style.overflow = "scroll";
    drinkCards.innerHTML = "";
    event.preventDefault();
    var drinkName = drinkNameEl.value;
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


  //Function that calls the Cocktail DB API to get cocktail recipe information.  
  var getDrinkRecipe = function (drinkName) {
    var apiDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+drinkName

    fetch(apiDrink).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
          console.log("FULL OBJECT")
          console.log(data)
          //Loop through all drinks that API sends back 
          for (j=0;j<data.drinks.length;j++){
                //Loop through max of 15 ingredients for each drink and put in array. Put all needed information in an object, where the object attributes are either one value or an array. 
                for(i=1;i<15;i++){
                        console.log(i)
                        if(i===1){
                            var ObjectDrink = {
                                name: data.drinks[j][`strDrink`],
                                ingredients: [data.drinks[j][`strIngredient${i}`]],
                                amounts: [data.drinks[j][`strMeasure${i}`]],
                                description:data.drinks[j][`strInstructions`],
                                image: data.drinks[j][`strDrinkThumb`],
                            };
                        }
                        else{
                            ObjectDrink.ingredients.push(data.drinks[j][`strIngredient${i}`])
                            ObjectDrink.amounts.push(data.drinks[j][`strMeasure${i}`])
                        }
                }
                //Display cocktail information below the input area. 
                displayCocktailInformation(ObjectDrink)
            }
          })
        }
        else {
            alert('Error: ' + response.statusText);
        }

    })
};

//Display cocktail information below the input area. 
var displayCocktailInformation = function (ObjectDrink) {
    const div = document.createElement("div");
    const drinkTitle = document.createElement("h1");
    const drinkCardDiv = document.createElement("div");
    const drinkImage = document.createElement("img");
    const recipeDiv = document.createElement("div");
    const recipeList = document.createElement("ul");

    div.classList.add("food-card-container");
    drinkTitle.classList.add("food-title");
    drinkCardDiv.classList.add("food-card");
    drinkImage.classList.add("food-image");
    recipeDiv.classList.add("recipe");

    div.appendChild(drinkTitle);

    drinkTitle.innerText = ObjectDrink.name;

    drinkCardDiv.appendChild(drinkImage);
    drinkImage.src = ObjectDrink.image;

    ObjectDrink.ingredients.forEach((recipe) => {
        if(recipe==null){
            return
        }
        const recipeListItem = document.createElement("li");
        recipeListItem.innerText = recipe;
        recipeList.appendChild(recipeListItem);
        recipeDiv.appendChild(recipeList);
    });

    drinkCardDiv.appendChild(recipeDiv);
    div.appendChild(drinkCardDiv);
    drinkCards.appendChild(div);
    drinkInput.value = ''
  };


  //Event Listeners
  submitDrinkEl.addEventListener('click', drinkSubmitHandler);
  