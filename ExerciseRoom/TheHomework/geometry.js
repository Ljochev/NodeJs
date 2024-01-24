// - Креирај модул geometry.js што ќе содржи функции за пресметување на површината на различни геометриски фигури 
//     (круг, правоаголник, троаголник).
//     - Функциите треба да ги повикаш и тестираш во index.js фајлот

const circleArea = (radius) => {
    const PI = 3.14
    return PI * radius * radius
}

const squareArea = (sideA,sideB) => {
    return sideA * sideB
}

const triangleArea = (side, height) => {
    return (side * height)/2
}


module.exports = {
  circleArea,
  squareArea,
  triangleArea
}