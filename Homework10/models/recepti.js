const fs = require("fs")

const read = async (fileName, i = null) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) return reject(err)
      data = JSON.parse(data)
    if(i !== null) return resolve(data[i])
      return resolve(data)
    })
  })
}

const write = async (fileName, data) => {
  data = JSON.stringify(data)
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) return reject(err)
      return resolve()
    })
  })
}

const add = async (data) => {
  // console.log(data, "<<====")
  const objectData = {}
  objectData.ime = data.ime
  objectData.sostojki = []
for(const d in data){
  if(d.includes("sostojka"))
  objectData.sostojki.push(data[d])
}
objectData.time = data.time
objectData.making = []
for(const d in data){
  if(d.includes("step"))
  objectData.making.push(data[d])
}
  let file = await read("recepti.json")
      file.push(objectData)
  await write("recepti.json", file)
}

const update = async (data, index) => {
  // console.log(data,index)
  const objectData = {}
  objectData.ime = data.ime
  objectData.sostojki = []
for(const d in data){
  if(d.includes("sostojka"))
  objectData.sostojki.push(data[d])
}
objectData.time = data.time
objectData.making = []
for(const d in data){
  if(d.includes("step"))
  objectData.making.push(data[d])
}
  let file = await read("recepti.json")
    file = file.map((recept, i) => {
      if(i === index){
        return {
          ...recept,
          ...objectData,
        }
      }
      return recept
    })
  await write("recepti.json", file)
}


const remove = async (index) => {
  let file = await read("recepti.json")

  file = file.filter((ob, i) => index !== i) 
  // console.log(typeof index)
  await write("recepti.json", file)
  
}

const list = async () => {
  return await read("recepti.json")
}

module.exports = {
  read,
  write,
  add,
  remove,
  list,
  update,
}
