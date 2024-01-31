const express = require("express")
const { getAllRecipes, addRecipes, editRecipe } = require("./recepti")

const app = express()
app.use(express.json())
app.get("/recepti", getAllRecipes)
app.post("/recepti", addRecipes)
app.put("/recepti", editRecipe)
app.listen(3000, () => console.log("Server started"))