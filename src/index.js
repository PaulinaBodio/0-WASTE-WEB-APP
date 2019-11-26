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
    let urlSearch = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=6&ranking=1&ignorePantry=true&ingredients=';
    let typedIngred = searchBar.value;
    // typedIngred = typedIngred.replace(/\s/g, '');
    // typedIngred = typedIngred.replace(/,/g, '%252C'); //usuwam spacje i dodaje 252C
    // let typedIngredTab = typedIngred.split("%252C"); // tworze tablice ze skladnikami
    
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
            details.innerHTML = data.instructions;
            document.querySelector(`.recipe-information.id-${id}`).appendChild(details);


        })
}

// wyszukiwanie za pomocą przycisku enter
searchBar.addEventListener("keyup", function(event) {
    // wcisniecie entera na klawiaturze
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


// const printInfo = (ids) =>
// {
// ids.forEach(elem =>{
// let div1 = document.querySelector(`.recipe-ingredients .${elem}`);


// })

//}