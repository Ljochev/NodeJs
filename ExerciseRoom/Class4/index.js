const fs = require("fs");
const http = require("http")

// const writeFile = () => {
//   return new Promise((success, fail) => {
//     fs.writeFile("data.txt", "Hello Semos!", (err) => {
//       if (err) {
//         return fail(err);
//       }
//       return success();
//     });
//   });
// };

// writeFile();

// const readFile = () => {
//     return new Promise((success, fail) => {
//       fs.readFile("data.txt", "utf-8", (err, data) => {
//         if (err) {
//           return fail(err);
//         }
//         return success(data);
//       });
//     });
//   };
//   readFile()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(console.log("I read a file."));

const server = http.createServer((req, res) => {

if(req.url === "/convert" && req.method === "GET") {
    res.end("I'm home")
}
if(req.url === "/convert" && req.method === "POST"){
    fs.writeFile("data.txt", "Kostadin" )
    res.end("POST BARANJE")
} else {
    res.end("Zdravo")
}


})

server.listen(8080)