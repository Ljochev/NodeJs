function convertMilesToKm(param) {
    return param * 1.609
}

function convertCelsuisToFahrenheit(param) {
    return (param *(9/5) + 32)
}
function convertPoundsToKilogram(param) {
return param * 0.45459237
}

function convertFeetToMetres(param) {
return param * 0.3048
}

function returnModule(param, num){
    return param % num
}



module.exports = {
    convertMilesToKm,
    convertCelsuisToFahrenheit,
    convertPoundsToKilogram,
    convertFeetToMetres,
    returnModule
}