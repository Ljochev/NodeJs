// 1. Модул за пресметување на површина на геометриска фигура
//     - Креирај модул geometry.js што ќе содржи функции за пресметување на површината на различни геометриски фигури 
//     (круг, правоаголник, троаголник).
//     - Функциите треба да ги повикаш и тестираш во index.js фајлот

const { circleArea,
    squareArea,
    triangleArea,
} = require("./geometry.js")


// circle radius 5

console.log(circleArea(5))

// square sideA 4  sideB 8

console.log(squareArea(4,8))

// triangle height 5 side 16

console.log(triangleArea(5,16))