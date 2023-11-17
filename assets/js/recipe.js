const API_KEY = "f9a69320b8097c78c1ad95f900c0d875";
const foodInput = document.getElementById("foodInput");
const button = document.querySelector(".searchBtn1");
const foodCards = document.querySelector(".food-cards");
const foodCardContainer = document.querySelector(".food-card-container");
console.log(foodCardContainer);

button.addEventListener("click", (e) => {
  foodCards.style.overflow = "scroll";
  foodCards.innerHTML = "";
  e.preventDefault();
  fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${foodInput.value}&app_id=9cbc2130&app_key=${API_KEY}`
  )
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data.hits);

      data.hits.forEach((recipe) => {
        const div = document.createElement("div");
        const foodTitle = document.createElement("h1");
        const foodCardDiv = document.createElement("div");
        const foodImage = document.createElement("img");
        const recipeDiv = document.createElement("div");
        const recipeList = document.createElement("ul");

        div.classList.add("food-card-container");
        foodTitle.classList.add("food-title");
        foodCardDiv.classList.add("food-card");
        foodImage.classList.add("food-image");
        recipeDiv.classList.add("recipe");

        div.appendChild(foodTitle);

        foodTitle.innerText = recipe.recipe.label;

        foodCardDiv.appendChild(foodImage);
        foodImage.src = recipe.recipe.image;

        recipe.recipe.ingredientLines.forEach((recipe) => {
          const recipeListItem = document.createElement("li");
          recipeListItem.innerText = recipe;
          recipeList.appendChild(recipeListItem);
          recipeDiv.appendChild(recipeList);
        });

        foodCardDiv.appendChild(recipeDiv);

        div.appendChild(foodCardDiv);

        foodCards.appendChild(div);

        foodInput.value = ''
      });
    });
});
