const fs = require("fs")
const http = require("http")
const {read, write} = require("./read-write")
// fs.readFile("data.json", "UTF-8", (err, data) => {
//     if(err) return(err)
//     console.log(data)
//     data = JSON.parse(data)
//     console.log(data)
//     data = JSON.stringify(data)
//     console.log(data)
// })


// const server = http.createServer((req,res) => {
 
//     if(req.url === "/kosta") {
//         fs.readFile("data.json", "utf-8", (err, data) => {
//             if(err) return reject(err)
//             else {
//             data = JSON.parse(data)
//         })
//         res.writeHead(200, {"Content-type": "text/plain"})
//         res.write(data)
//         res.end()
//             }
    
// }
// })

const server = http.createServer((req,res) => {
    if(req.url === "/kosta" && req.method === "GET") {
        fs.readFile("./domasna_JS_6_3.html", "utf-8",(err, data) => {
            if(err) {
                console.log(err)
            } else {
            // data = JSON.parse(data)
            // console.log(JSON.parse(data))
            res.writeHead(200, {"Content-type": "text/html"})
            res.write(data)
            res.end()
            }
        })
    }
    
})





server.listen(3000)