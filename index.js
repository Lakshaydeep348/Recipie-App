// const apiKey="30cdca5635644c82a2fcaa1233aa49c3";
const url='https://api.spoonacular.com/recipes/random?number=10&apiKey=30cdca5635644c82a2fcaa1233aa49c3'
const recipieListEl=document.getElementById("recipieList");
function displayRecipes(recipes)
{
      recipieListEl.innerHTML="";
      recipes.forEach((recipe) => {
        const recipeItemEl=document.createElement("li");
        recipeItemEl.classList.add("recipieItem");
        recipieListEl.appendChild(recipeItemEl);
       const  recipeImageEl=document.createElement("img");
       recipeImageEl.src=recipe.image;
       recipeImageEl.alt="recipie image";
       recipeItemEl.appendChild(recipeImageEl);
       const recipeHeadEl=document.createElement("h2");
       recipeHeadEl.innerText=recipe.title;
       recipeItemEl.appendChild(recipeHeadEl);
       const recipeIngredientsEl=document.createElement("p");
       recipeIngredientsEl.innerHTML=`<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient)=>ingredient.original)}`
       recipeItemEl.appendChild(recipeIngredientsEl);
        
       recipeLinkEl=document.createElement("a");
       recipeLinkEl.href=recipe.sourceUrl;
       recipeLinkEl.target="_blank";
       recipeLinkEl.innerText="View More";
       recipeItemEl.appendChild(recipeLinkEl);

      });
}




async function getRecipes()
{
    const response= await fetch(url)
    console.log(response);
    const data= await response.json();
    return data.recipes;
}

async function init()
{
    const recipes=await getRecipes();
    displayRecipes(recipes);
}

init();



