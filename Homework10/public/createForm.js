  const myButton = document.getElementById("myBytton")
  const myStepButton = document.getElementById("myStepButton")
const showButton = document.getElementById("showData")
const inputBlock = document.getElementById("ingrediants")
const inputStepBlock = document.getElementById("stepByStep")
let counter = 1
let stepCounter = 1
const sostojki = []
const steps = []
sostojki[0] = document.createElement("input")
sostojki[0].name = `sostojka0` 
sostojki[0].type = `text`
sostojki[0].placeholder = "Sostojka 1"
sostojki[0].required
inputBlock.appendChild(sostojki[0])

const createIngrediant = () => {
    sostojki[counter] = document.createElement("input")
    sostojki[counter].name = `sostojka${counter}` 
    sostojki[counter].type = `text`
    sostojki[counter].placeholder = `Sostojka ${counter + 1}`
    inputBlock.appendChild(sostojki[counter])
    console.log(sostojki[counter-1])
    
    counter++

}
steps[0] = document.createElement("textarea")
steps[0].name = `step0` 
steps[0].type = `text`
steps[0].placeholder = "Cekor 1"
steps[0].required
steps[0].cols="70"
steps[0].rows="2"
inputStepBlock.appendChild(steps[0])

const createStep = () => {
  steps[stepCounter] = document.createElement("textarea")
  steps[stepCounter].name = `step${stepCounter}` 
  steps[stepCounter].type = `text`
  steps[stepCounter].placeholder = `Cekor ${stepCounter + 1}`
  steps[stepCounter].cols="70"
  steps[stepCounter].rows="2"
  inputStepBlock.appendChild(steps[stepCounter])
  console.log(steps[stepCounter-1])
  
  stepCounter++
}

myButton.addEventListener("click", createIngrediant)
myStepButton.addEventListener("click", createStep)