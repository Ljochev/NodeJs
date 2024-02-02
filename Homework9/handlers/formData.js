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

let fileData = await read(`${__dirname}/../studenti.json`)
fileData.push(req.body)
await write(`${__dirname}/../studenti.json`, JSON.stringify(fileData))
// fileData = await read(`${__dirname}/../studenti.json`)
    try{
    res.redirect("/studenti")
} catch (err) {
    res.status(500).send("Invalid server error!")
}
}

const getStudentsData = async (req, res) => {
    const fileData = await read(`${__dirname}/../studenti.json`)
try{
    res.render("index", { fileData })
} catch(err) {
    res.status(500).send("Invalid server error")
}
}

const delateStudent = async (req, res) => {
    const j = req.query.i
    let fileData = await read(`${__dirname}/../studenti.json`)
    fileData.splice(j, 1)
    console.log(fileData, j)
    await write(`${__dirname}/../studenti.json`, JSON.stringify(fileData))
    try{
        res.redirect("/studenti")
    } catch (err) {
        res.status(500).send("Invalid server error!")
    }

}




const parseTemplate = async (template, data = null) => {
    if(data) {
    }
    return new Promise((resolve, reject) => {
        fs.readFile(`${__dirname}/../views/${template}.html`, "utf-8", (err, content) => {
            if(err) {
                return reject(err)
            } 
            if (data === null) return resolve(content)
            
        })
    })
}

module.exports = {
    getFormStudents,
    redirectStudents,
    getStudentsData,
    delateStudent
}