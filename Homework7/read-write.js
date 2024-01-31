const fs = require("fs");

const read = async (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) return reject(err);
      data = JSON.parse(data);
    //   console.log("data from read", data)
      return resolve(data);
    });
  });
};

const write = async (fileName, data) => {
    // console.log("Data to be written before stringify",data)
  data = JSON.stringify(data);
//   console.log("Data to be written",data)
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) return reject(err);
      
      return resolve();
    });
  });
};

module.exports = {
  read,
  write,
};
