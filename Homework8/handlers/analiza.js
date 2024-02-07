
const fs = require("fs")

const getText = async (req, res) => {
    try {
        let output = await parseTemplate("gramar_check_form")
        res.status(200).send(output)
    } catch (err) {
        res.status(500).send("Invalid server error")
    }
}

const postText = async (req, res) => {
    const {text_to_check} = req.body
    if (text_to_check.length < 20 || text_to_check.length > 5000)
    return res.status(400).send("Bad request")




const textLength = text_to_check.length

let sentencesNum = 0
let wordsNum = 1
let wordsDownFiveNum = 0
let wordsUpFiveNum = 0
let wordsEqualFiveNum = 0
let wordswordsAEIOUNum = 0
let letterCount = 0

const getWord = (index, wordLength) => {
    switch(text_to_check[index - wordLength]) {

        // ABCD 
        case "a":
        case "A":
        case "e":
        case "E":
        case "i":
        case "I":
        case "o":
        case "O":
        case "u":
        case "U":
            wordswordsAEIOUNum++
            break
        default:
            wordswordsAEIOUNum = wordswordsAEIOUNum
    }
        if(wordLength === 5){
        wordsEqualFiveNum++
    } else if(wordLength < 5) {
        wordsDownFiveNum++
    } else if(wordLength > 5) {
        wordsUpFiveNum++ }

}
for(i = 0; i < textLength; i++) {
    letterCount++
    if(text_to_check[i] === " ") {
        getWord(i, letterCount - 1)
        wordsNum++ 
        letterCount = 0
    }
    if(text_to_check[i] === "." || text_to_check[i] === "!" || text_to_check[i] === "?") {
        getWord(i, letterCount - 1)
        sentencesNum++ 
        letterCount = 0
    }
}
wordsDownFiveNum = (wordsDownFiveNum - sentencesNum) + 1



try {
    let output = await parseTemplate("gramar_check", {
        text_to_check: text_to_check,
        caracterNumbers: textLength,
        wordsDownFive: wordsDownFiveNum,
        wordsUpFive: wordsUpFiveNum,
        wordsEqualFive: wordsEqualFiveNum,
        sentences: sentencesNum,
        words: wordsNum,
        wordsAEIOU: wordswordsAEIOUNum,
    })
    res.status(200).send(output)
} catch (err) {
res.status(500).send("Invalid server error")
}
}

const parseTemplate = async (template, data = null) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${__dirname}/../views/${template}.html`, "utf-8", 
        (err, content) => {
            if(err) {return reject(err) }
            if(data) {
                for(d in data) {
                    content = content.replace(`{{${d}}}`, data[d])
                }
            }
            return resolve(content)
        }
        )
    })
}

module.exports = {
    getText,
    postText,
}