const fs = require("fs")

const {
    read,
    write
} = require("./read-write")

const getFormStudents = async (req,res) => {
    try {
        let output = await parseTemplate("student-form")
        res.status(200).send(output)
    } catch(err) {
        res.status(500).send("Invalid server error")
    }
}




const redirectStudents = async (req, res) => {
    const {name, lastName, averageGrade} = req.body
    const regexAZ = /^[a-zA-Z]*$/
    const regex09 = /^\d+\.\d{2,2}$/
    if(!regexAZ.test(name) || !regexAZ.test(lastName) || !regex09.test(averageGrade)){
        return res.status(400).send("Bad request")
    }
try{ 
let fileData = await read(`${__dirname}/../studenti.json`)

fileData.push(req.body)
await write(`${__dirname}/../studenti.json`, JSON.stringify(fileData))
// fileData = await read(`${__dirname}/../studenti.json`)
    res.redirect("/studenti")
}
catch(err) {
    res.status(500).send("Invalid server error")
}
}

const getStudentsData = async (req, res) => {
    try{
    const fileData = await read(`${__dirname}/../studenti.json`)
    res.render("index", { fileData })
} catch(err) {
    res.status(500).send("Invalid server error")
}
}

const delateStudent = async (req, res) => {
    const j = req.query.i
    console.log(j, "Dali raboti")
    try{
    let fileData = await read(`${__dirname}/../studenti.json`)
    fileData.splice(Number(j), 1)
    console.log(typeof j)
    console.log(fileData, j)
    await write(`${__dirname}/../studenti.json`, JSON.stringify(fileData))
    
        res.redirect("/studenti")
    } catch (err) {
        res.status(500).send("Invalid server error!")
    }

}




const parseTemplate = async (template, data = null) => {
  
    return new Promise((resolve, reject) => {
        fs.readFile(`${__dirname}/../views/${template}.html`, "utf-8", (err, content) => {
            if(err) {
                return reject(err)
            } 
            return resolve(content)
            
        })
    })
}

module.exports = {
    getFormStudents,
    redirectStudents,
    getStudentsData,
    delateStudent
}