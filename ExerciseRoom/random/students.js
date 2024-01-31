const {read, write} = require("./read-write")

const getAllStudents = async (req, res) => {
    const students = await read("data.json")
    
}