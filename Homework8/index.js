const express = require("express")
const app = express()

const { getText, postText } = require("./handlers/analiza")

app.use(express.urlencoded({extended: true}))
app.get("/analiza", getText)
app.post("/analiza", postText)


app.listen(3000, () => console.log("Server is started at port 3000"))