const text = "It is also clear that the Biden administration’s effort to prevent an escalation is not working. US strikes against Iranian-backed militia throughout the region, which followed more than 160 attacks on American military facilities, did not deter Sunday’s drone strike. And missile and drone attacks against commercial shipping in the Red Sea haven’t stopped despite rolling US airstrikes against their launch sites and infrastructure in Yemen. So Biden has now arrived at the unenviable position that presidents often face when all potential options before them are bad and the very task of seeking to slow a deepening crisis may end up exacerbating it."


// const text = "It is also clear that the Biden administration’s effort to prevent an escalation is not working. US strikes against."
const textLength = text.length

let sentencesNum = 0
let wordsNum = 1
let wordsDownFiveNum = 0
let wordsUpFiveNum = 0
let wordsEqualFiveNum = 0
let wordswordsAEIOUNum = 0
let letterCount = 0

const getWord = (index, wordLength) => {
    switch(text[index - wordLength]) {
        case "a":
        case "A":
        case "e":
        case "E":
        case "i":
        case "I":
        case "o":
        case "O":
        case "u":
        case "U":
            wordswordsAEIOUNum++
            break
        default:
            wordswordsAEIOUNum = wordswordsAEIOUNum
    }
        if(wordLength === 5){
        wordsEqualFiveNum++
    } else if(wordLength < 5) {
        wordsDownFiveNum++
    } else if(wordLength > 5) {
        wordsUpFiveNum++ }

}
for(i = 0; i < textLength; i++) {
    letterCount++
    if(text[i] === " ") {
        getWord(i, letterCount - 1)
        wordsNum++ 
        letterCount = 0
    }
    if(text[i] === ".") {
        getWord(i, letterCount - 1)
        sentencesNum++ 
        letterCount = 0
    }
}
wordsDownFiveNum = (wordsDownFiveNum - sentencesNum) + 1

console.log("Numbers of caracters: ", textLength)
console.log("sentencesNum ", sentencesNum)
console.log("wordsNum ",wordsNum)
console.log("wordsDownFiveNum ", wordsDownFiveNum)
console.log("wordsUpFiveNum ", wordsUpFiveNum)
console.log("wordsEqualFiveNum ", wordsEqualFiveNum)
console.log("wordswordsAEIOUNum ", wordswordsAEIOUNum)
