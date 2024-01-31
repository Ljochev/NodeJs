
const fs = require("fs")

const read = async (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, "utf-8", (err, data) => {
            if(err) return reject(err)
            data = JSON.parse(data)
        return resolve(data)
        })
    })
}

const write = async (filename, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, (err) => {
            if(err) return reject(err)
            return resolve()
        })
    })
}

module.exports = {
    read,
    write
}