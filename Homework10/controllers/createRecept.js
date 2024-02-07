const fs = require("fs")
const recepti = require("../models/recepti")

const getRecept = async (req, res) => {
    try {
        let output = await parseTemplate("createRecepie")
        res.status(200).send(output)
    } catch (err) {
        res.status(500).send("Invalid server error")
    }
}

const postForm = async (req, res) => {
 await recepti.add(req.body)
 res.redirect("/recepti")

}
const parseTemplate = async (template) => {
    return new Promise((resolve, reject) => {
        fs.readFile(
            `${__dirname}/../views/${template}.html`, "utf-8",
            (err, content) => {
                if(err) reject(err)
                return resolve(content)
            }
        )
    })
    }

    const getRecepti = async (req, res) => {
        let data = await recepti.list()
        res.render("showRecepie", { data })
    }

    const deleteRecepti = async (req, res) => {
        await recepti.remove(Number(req.query.index))
        res.redirect("/recepti")
    }

    const getEditRecept = async (req, res) => {
let data = await recepti.read("recepti.json", Number(req.query.index))
data.index = Number(req.query.index)
// console.log("podatoci koi treba da se renderirat",data)
res.render("editRecepie", { data })
    }

    const editRecept = async (req, res) => {
// console.log(req.body, Number(req.query.index))
         await recepti.update(req.body, Number(req.query.index))
            res.redirect("/recepti")

    }

module.exports = {
    getRecept,
    postForm,
    getRecepti,
    deleteRecepti,
    editRecept,
    getEditRecept,
}