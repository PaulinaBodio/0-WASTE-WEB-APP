import './css/style.css'
import img from './img/bg.jpg';
const fetch = require('node-fetch');
import jsonFile from '../variables.json'

const APIHOST = "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com";
const APIKEY = jsonFile.API_KEY;

const urlInfo = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information";
const element = document.querySelector('.recipes-banner');
const searchBar = document.querySelector('.search-bar');
const searchButton = document.getElementById("search");

document.getElementById('search').addEventListener('click', recipes);

function recipes() {
    let urlSearch = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=6&ranking=1&ignorePantry=false&ingredients=';
    let typedIngred = searchBar.value;   
    urlSearch += typedIngred;
    console.log(urlSearch)
    fetch(urlSearch, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": APIHOST,
                "x-rapidapi-key": APIKEY
            }
        })
        .then(response => {
            return response.json();
        }).then(data => {
            let output = '';
            let ids = [];
            data.forEach(rec => {
                output +=
                    `   
                <div class="recipe ${rec.id}">
                    <h3>${rec.title}</h3> <br>
                    <img src="${rec.image}" alt="">
                    <div class="recipe-ingredients id-${rec.id}"> 
                    <ul> Ingredients
             `;
                rec.usedIngredients.forEach(elem => {
                    output +=
                        `
                <li>${elem.original}</li>
                    `;
                });
                rec.missedIngredients.forEach(item => {
                    output +=
                        `
                <li>${item.original}</li>
                `;
                });
                output +=
                    `
             </ul>
             </div>
             <p class="show-more id-${rec.id}">Show more...</p>
                 <div class="recipe-information id-${rec.id}"> </div>
                </div>
            `;

                ids.push(`${rec.id}`)
            })
            element.innerHTML = output;
            return ids;

        }).then(tab => {
            tab.forEach(id => {
                document.querySelector(`.show-more.id-${id}`).addEventListener('click', function () {
                    information(id);
                }, {once:true,} )
            });

        }).catch(err => {
            console.log(err);
        });
        scrollToRecipes();
}

function information(id) {
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": APIHOST,
                "x-rapidapi-key": APIKEY
            }
        })
        .then(response => {
            return response.json();
        }).then(data => {
            const details = document.createElement('p')
            if(Boolean(data.instructions))   
            details.innerHTML = data.instructions;
            else
            details.innerHTML = "Unfortunately, there are no more details about the recipe.";

            document.querySelector(`.recipe-information.id-${id}`).appendChild(details);
            document.querySelector(`.show-more.id-${id}`).innerHTML = "Show less...";
            document.querySelector(`.show-more.id-${id}`).addEventListener('click', function () {
                hideOrShow(id);
        })
    })      
}

// function for Showing and Hiding recipe informations
function hideOrShow(id) {
    let showButton = document.querySelector(`.show-more.id-${id}`);
    let recipeInfo = document.querySelector(`.recipe-information.id-${id}`);
    if(showButton.textContent=='Show more...')
    {
        recipeInfo.style.display = "initial";
        showButton.innerHTML = "Show less..."
    }
    else
    {
        recipeInfo.style.display = "none";
        showButton.innerHTML = "Show more..."
    }
}


// searching with enter button
searchBar.addEventListener("keyup", function(event) {
    // for enter key down
    if (event.keyCode === 13) {
      event.preventDefault();
      searchButton.click();
    //   scrollToRecipes();
    }
  });

function scrollToRecipes() {
    let $container = $("html,body");
    let $scrollTo = $('.recipes-banner');
    
    $container.animate({scrollTop: $scrollTo.offset().top },1500);
}
