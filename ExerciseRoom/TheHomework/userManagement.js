// 3. Модул за управување со корисници
//     - Креирај модул userManagement.js со функции за додавање, бришење и пребарување на корисници.
//     - Овде треба да се искористат методите кои ги нудат низите т.е push за додавање, filter за бришење и find за пребарување.
//     - Функциите треба да ги повикаш и тестираш во index.js фајлот


const addPerson = (obj, newPerson) => {
    obj.push(newPerson)
    }

const delatePerson = (obj, delPerson) => {
    const newObj = obj.filter((el) => el.name !== delPerson)
    return newObj
}

const findPerson = (obj, person) => {
    return obj.find((el) => el.name === person)
}


module.exports = {
    addPerson,
    delatePerson,
    findPerson,

}