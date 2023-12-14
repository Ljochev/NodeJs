// zadaca od cas
function calculate1(operation, a, b) {
   if(operation === "+") 
    return a + b
else if( operation === "-")
return a-b
else if( operation === "*")
return a*b
else if( operation === "/")
return a/b
else 
return "Invalid opration"
   
  }
  
  console.log(calculate1("+", 4, 5))

  function calculate2(operation, a, b) {
   switch(operation) {
    case "+" : 
    return a + b
    break
    case "-" : 
    return a - b
    break
    case "*" : 
    return a * b
    break
    case "/" : 
    return a / b
    break
    default : return "Invalid operation"
        
   }
    
   }
   
   console.log(calculate2("-", 4, 5))
//Homework
   // Филтрирање на дадена низа по даден параметар

const myArray = [ 3, 6, 13, 41, 8, 32, 23, 5, 67, 101, 302, 53, 14, 99, 36]
console.log(myArray)
const myFilteredArray = myArray.filter((el) => el > 20)
console.log(myFilteredArray)

// Сортирање на дадена низа по даден параметар
// Сортирање по големина (мал - голем)

const mySortedArray = myArray.sort((a,b) => a-b)

console.log(mySortedArray)

// Сумирање на параметри од дадена низа

const mySumArray = myArray.reduce((acc,curr) => acc + curr)
console.log(mySumArray)

// Пронаоѓање на член од дадена низа
// Пронаоѓање на првиот член од низата поголем од 100

const myFind = myArray.find((el) => el > 100)

console.log(myFind)