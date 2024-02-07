const express = require("express")
const {
    getFormStudents,
    redirectStudents,
    getStudentsData,
    delateStudent
} = require("./handlers/formData")

const app = express()

// app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.set("view engine", "ejs")



              app.get("/form", getFormStudents)
              app.post("/form", redirectStudents)
              app.get("/studenti", getStudentsData)
              app.get("/brishi", delateStudent)


              app.listen(3000, () => console.log("Server started at port 3000"))