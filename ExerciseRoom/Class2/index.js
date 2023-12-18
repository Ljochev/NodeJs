const {endsWithA, nineSkopje, fiveChar, averageGrade, averageCompare} = require("./students")

const studenti = [
    { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
    { ime: "Pero", prosek: 8.3, grad: "Bitola" },
    { ime: "Janko", prosek: 6.9, grad: "Bitola" },
    { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
    { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
    { ime: "Vancho", prosek: 10, grad: "Tetovo" },
    { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
    { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
    { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
    { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
    { ime: "John" , prosek: 8.1, grad: "Milwaukee"},
    { ime: "Myke" , prosek: 9.5, grad: "Chicago"},
    { ime: "Didi" , prosek: 8.3, grad: "Tampa"},
    { ime: "Maria" , prosek: 7.9, grad: "Orlando"},
  ];
console.log("Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).")
  console.log(endsWithA(studenti))
  console.log("Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.")
console.log(nineSkopje(studenti))
console.log("Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.")
console.log(fiveChar(studenti))
console.log("Градови подредени по групна висина на просек.")
averageGrade(studenti)
console.log("Вкупен просек на студенти чие име завршува на а наспроти сите останати.")
averageCompare(studenti)