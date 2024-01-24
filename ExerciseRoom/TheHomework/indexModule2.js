// 2. Модул за конверзија на валути
//     - Напиши модул currencyConverter.js кој ќе претвора вредности од една валута во друга во согласност со тековниот валутен курс.
//     - Функциите треба да ги повикаш и тестираш во index.js фајлот

const { 
    eurToUsd,
    usdToEur,

} = require("./currencyConverter.js")

console.log(`10 EUR is ${eurToUsd(10)} USD`)
console.log(`10 USD is ${usdToEur(10)} EUR`)