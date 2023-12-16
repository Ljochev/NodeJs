const { convertMilesToKm,
    convertCelsuisToFahrenheit,
    convertPoundsToKilogram,
    convertFeetToMetres,
} = require("./conversion.js")

const distance = 10
console.log(distance, " miles is ", convertMilesToKm(10), " kilometers.")
const temp = 40
console.log(temp, " degrees C is ", convertCelsuisToFahrenheit(temp), " degrees farenheit.")
const weight = 25
console.log(weight, " pounds is ", convertPoundsToKilogram(weight), " kilograms.")
const lenght = 10
console.log(lenght, " feet is ", convertFeetToMetres(lenght), " meters.")