require('dotenv').config();

var APIHOST = process.env.HOST;
var APIKEY = process.env.KEY;
console.log(APIHOST);
var element = document.querySelector('.recipes-banner');
document.getElementById('search').addEventListener('click', recipes);


function recipes() {
    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=apples%252Cflour%252Csugar", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host":`${APIHOST}`,
                "x-rapidapi-key":`${APIKEY}`
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
                <div class="recipe">
                    <h3>${rec.title}</h3> <br>
                    <img src="${rec.image}" alt="">
                    <div class="recipe-ingredients ingr-${rec.id}"> 
                    <ul> Ingredients
             `;
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
                    <div class="recipe-information ${rec.id}"> </div>
                </div>
            `;

            ids.push(`${rec.id}`)
            })
            
            element.innerHTML = output;
            console.log(ids);
            // printInfo(ids);
        }).catch(err => {
            console.log(err);
        });
}
// const printInfo = (ids) =>
// {
// ids.forEach(elem =>{
// let div1 = document.querySelector(`.recipe-ingredients .${elem}`);


// })

//}