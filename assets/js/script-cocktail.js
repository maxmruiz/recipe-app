var drinkNameEl = document.querySelector('#drinkInput');
var submitDrinkEl = document.querySelector('#drinkInputButton');
var ingredientsEl = document.querySelector('.ingredients');


//If a valid cocktail name, change all the history buttons, call "getDrinkRecipe"
var drinkSubmitHandler = function (event) {
    event.preventDefault();
    console.log("TEST")
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
          displayCocktailInformation(ObjectDrink)
          })
        }
        
       
        else {
            alert('Error: ' + response.statusText);
        }

    })
};


var displayCocktailInformation = function (ObjectDrink) {
    // if (repos.length === 0) {
    //   repoContainerEl.textContent = 'No repositories found.';
    //   return;
    // }
  
   // repoSearchTerm.textContent = searchTerm;
  
    for (var i = 0; i < ObjectDrink.ingredients.length; i++) {
      //var repoName = repos[i].owner.login + '/' + repos[i].name;
  
      var cocktailListEl = document.createElement('p');
      //repoEl.classList = 'list-item flex-row justify-space-between align-center';
      //cocktailListEl.setAttribute('text', './single-repo.html?repo=' + repoName);
      cocktailListEl.textContent = ObjectDrink.ingredients[i]
  
      //var titleEl = document.createElement('span');
      //titleEl.textContent = repoName;
    console.log(cocktailListEl.textContent)
      cocktailListEl.appendChild(ingredientsEl);
  
      //var statusEl = document.createElement('span');
      //statusEl.classList = 'flex-row align-center';
  
    //   if (repos[i].open_issues_count > 0) {
    //     statusEl.innerHTML =
    //       "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
    //   } else {
    //     statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
    //   }
  
     // repoEl.appendChild(statusEl);
  
      //repoContainerEl.appendChild(repoEl);
    }
  };


  //Event Listeners
  submitDrinkEl.addEventListener('click', drinkSubmitHandler);
  