let API_KEY = "f9a69320b8097c78c1ad95f900c0d875";
food = "cereal";
let foodInput = document.getElementById("foodInput");
let button = document.querySelector(".searchBtn1");

button.addEventListener("click", (e) => {
  e.preventDefault()
  fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${foodInput.value}&app_id=9cbc2130&app_key=${API_KEY}`
  )
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
    });
});
