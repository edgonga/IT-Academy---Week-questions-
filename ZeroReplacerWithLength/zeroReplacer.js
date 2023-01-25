const zeroReplacer = (numberString) => {
    if (typeof(numberString === String)) {
                
        numberArray = Array.from(numberString)
        //let zeroLocation = [,]
        let zeroCounter = 1
        for (let index = 0; index <= numberString.length; index++) {

            if (numberString[index] === "0" && numberString[index -1] === "0") {
                zeroCounter += 1
            }

            if (numberString[index] !== "0" && numberString[index -1] === "0") {
                numberArray.splice(index, zeroCounter, zeroCounter.toString())
                zeroCounter = 1
            }

            if (numberString[index] !== "0" && numberString[index -1] !== "0") {
                zeroCounter = 1
            }

            if (numberString[index] === "0" && numberString[index -1] !== "0") {
                zeroCounter += 1
            }
                        
        }
        numberArray = numberArray.join("")
        return numberArray;
    } else {
    return "El input debe ser un string"
}}

module.exports = zeroReplacer