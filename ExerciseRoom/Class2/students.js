// 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
// 4. Градови подредени по групна висина на просек.
// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.

function endsWithA(students) {
    return students.filter(stud => stud.grad === "Skopje" && stud.ime.endsWith("a") && stud.prosek >7)
    .sort((a,b) => a.ime < b.ime ? -1 : a.ime > b.ime ? 1 : 0)
}

function nineSkopje(students){
    return students.filter(el => el.prosek > 9 && el.grad !== "Skopje").sort((a,b) => b.prosek-a.prosek)
}
function fiveChar(students) {
    // return students.filter(stud => (stud.ime.length === 5)).slice(0,3).sort((a,b) => b.prosek - a.prosek)
    // The top 3 students with five letters 
    return students.filter(stud => (stud.ime.length === 5)).sort((a,b) => b.prosek - a.prosek).slice(0,3)
}


function averageGrade(students){

    let averageCities = []
    let cities =[]
// Calculating function for the average grade of the given city
    function calculateAverageByCity(city, student){
        let averageCity = student.filter(stud => stud.grad === city)
        let numOfCities = averageCity.length
        averageCity = averageCity.map(el => el.prosek).reduce((acc,curr) => acc + curr)/numOfCities
        return averageCity
    }
// Making array of cities without repeating 
    students.forEach(element => {
        if(!cities.includes(element.grad)){
            cities.push(element.grad)
        }
    })
    console.log(cities)
// Making array of objects who includes the city and the average grade of the students from that city
cities.forEach(element => {
    averageCities.push({average:calculateAverageByCity(element, students),grad :element})
})
// Sotring and printing the cities by average grade
    averageCities = averageCities.sort((a,b) => b.average - a.average)
    .forEach(el => console.log(el.grad," ",el.average))
   
}

function averageCompare(students){
    let compared = []
    let averageEndsA = students.filter(el => el.grad.endsWith("a"))
    let arrayLenght = averageEndsA.length
    let myNumber = averageEndsA.map(el => el.prosek).reduce((acc,curr) => acc + curr)/arrayLenght
compared.push({ average :myNumber, description :`Cities ends with "a" average: `})
    let averageRest = students.filter(el => !(el.grad.endsWith('a')))
     arrayLenght = averageRest.length
     myNumber = averageRest.map(el => el.prosek).reduce((acc,curr) => acc + curr)/arrayLenght
compared.push({ average :myNumber, description :`Cities not ending with "a" average: `})
    compared.forEach(el => console.log(el.description, el.average))

}
module.exports = {
    endsWithA,
    nineSkopje,
    fiveChar,
    averageGrade,
    averageCompare
}