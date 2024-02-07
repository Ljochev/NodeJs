const express = require("express");
const {
  getRecept,
  postForm,
  getRecepti,
  deleteRecepti,
  editRecept,
  getEditRecept,
} = require("./controllers/createRecept");

const app = express();

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))

app.get("/form", getRecept)

app.post("/form", postForm)

app.get("/recepti", getRecepti)

app.get("/brishi", deleteRecepti);

app.get("/edit", getEditRecept)

app.post("/edit", editRecept)




app.listen(3000, () => console.log("Server started at port 3000!"));
