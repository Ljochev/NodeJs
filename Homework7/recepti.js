const {read, write} = require("./read-write")
const fs = require("fs");


// GET

const getAllRecipes = async (req, res) => {
    const recipes = await read("recipes.json")
    
    res.status(200).send(recipes)
}
//POST
const addRecipes = async (req, res) => {
    const recipes = await read("recipes.json")
   console.log(req)
    // console.log(req.body)
    recipes.push(req.body)
    await write("recipes.json", recipes)
    res.status(201).send("Recipe created")
}


const editRecipe = async (resipeIndex, recipeData) => {
  let recipes = await read("recipes.json")
recipes = recipes.map((recipe, index) => {
    if(resipeIndex === index) {
        return {
            ...recipe,...recipeData,
        }
    }
return recipe
})
await write("recipes.json", recipes)
}

module.exports = {
    getAllRecipes,
    addRecipes,
    editRecipe
}



// [{
//     "name": "Sage Sausage Stuffing",
//  "ingredients": {
// "sausage": "pork 1 package",
// "celery": "chopped 1/2 cup",
// "onion": "chopped 1 large",
// "garlic": "3 cloves"
// },
// "directions": {
//     "preheat": "325F",
//     "cook": "8 min",
//     "add": "chichen, black pepper",
//     "bake": "1h 160F"
// }
// }]

