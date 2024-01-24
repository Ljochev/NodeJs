// 3. Модул за управување со корисници
//     - Креирај модул userManagement.js со функции за додавање, бришење и пребарување на корисници.
//     - Овде треба да се искористат методите кои ги нудат низите т.е push за додавање, filter за бришење и find за пребарување.
//     - Функциите треба да ги повикаш и тестираш во index.js фајлот

const {addPerson,
    delatePerson,
    findPerson,

} = require("./userManagement.js")

let users = [
    {
        name : "Kostadin",
        age : 34,
        gender : "male",
        city : "Strumica",
    },
    {
        name : "Miki",
        age : 28,
        gender : "male",
        city : "Stip",
    },  
    {
        name : "Trajche",
        age : 39,
        gender : "male",
        city : "Skopje",
    },  
    {
        name : "Monika",
        age : 27,
        gender : "female",
        city : "Ohrid",
    },  
    {
        name : "Sara",
        age : 19,
        gender : "female",
        city : "Bitola",
    },  
    {
        name : "Kostadin",
        age : 34,
        gender : "male",
        city : "Strumica",
    },
]

const metodij = {name : "Metodij", age : 32, gender : "male", city : "Gostivar"}
    addPerson(users, metodij)

    users = delatePerson(users, "Sara")
    console.log(users)

    console.log(findPerson(users,"Kostadin"))