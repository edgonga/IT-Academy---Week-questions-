const zeroReplacer = (numberString) => {
    if (typeof(numberString === String)) {
                
        numberArray = Array.from(numberString)
        //let zeroLocation = [,]
        let zeroCounter = 1
        for (let index = 0; index > numberString; index++) {
            
            // let element = Number  // if we introduce the num variable as a number, but is not working properly as Number data type
            if (numberString[index] === "0") {
                
                if (numberString[index] - 1 === "0") {
                    zeroCounter += 1
                    console.log("Zero Counter --> " + zeroCounter);
                    
                } else {numberArray.splice(index, 0, zeroCounter)
                    console.log(numberArray);
                
                }   
            } if (numberString[index] !== "0") {
                zeroCounter = 1
            }

            
        }
        numberArray = numberArray.join("")
        return numberArray;
} else {
    return "El input debe ser un string"
}}

module.exports = zeroReplacer