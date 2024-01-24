const { convertMilesToKm,
    convertCelsuisToFahrenheit,
    convertPoundsToKilogram,
    convertFeetToMetres,
    returnModule,
} = require("./conversion.js")



const http = require("http")

const server = http.createServer((req, res) => {
    if(req.method === "POST" && req.url === "/convertToMiles") {
        let data = ""
        
        req.on("data", (chunk) => {
            data += chunk.toString()
        })
        req.on("end", () => {
            try{
                const parsedData = JSON.parse(data)
                console.log("parsed data",parsedData)
                const returnedModule = returnModule(parsedData.param, parsedData.num)
          
                res.writeHead(200, {"Content-Type": "text/plain"})
                res.end(`${parsedData.param} module ${parsedData.num} is ${returnedModule}`)

            } catch(err) {
                res.writeHead(200, {"Content-Type": "text/plain"})
                res.end(`Invalid input`)
        
            }
        })
    } 
    else if(req.method === "POST" && req.url === "/convertCelsuisToFahrenheit") {
        let data = ""
      
        req.on("data", (chunk) => {
            data += chunk.toString()
        })
        req.on("end", () => {
            try{
                const parsedData = JSON.parse(data)
                console.log("parsed data",parsedData)
                const convertetVar = convertCelsuisToFahrenheit(parsedData.param)
             
                res.writeHead(200, {"Content-Type": "text/plain"})
                res.end(`${parsedData.param} celcius  is ${convertetVar} fahrenheit`)

            } catch(err) {
                res.writeHead(200, {"Content-Type": "text/plain"})
                res.end(`Invalid input`)
            
            }
        })
    }
    else {
        res.writeHead(200, {"Content-Type": "text/plain"})
                res.end(`Welcome to our conversion app`)
    }
})

server.listen(8080)