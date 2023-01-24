// string = "112346567"
// let position = 2

// if (string[3] === "3") {

//     arrayString = Array.from(string)
//     arrayString.splice(position, 0, 0)
//     arrayString = arrayString.join("")
//     console.log(arrayString);
//}

const zeroReplacer = (numberString) => {
    if (typeof(numberString === String)) {
        
        numberArray = Array.from(numberString)
        //let zeroLocation = [,]
        let zeroCounter = 1
        let previousIsAZero = false // Try it with this variable
                                    // Added inside the conditionals
                                    // And reset it to true when the current
                                    // number is 0, like this, in the next loop
                                    // will represent the previous one
                                    
        for (let index = 0; index <= numberString.length; index++) {
            
            // let element = Number  // if we introduce the num variable as a number, but is not working properly as Number data type


    
                
                if (numberString[index] !== "0" && numberString[index -1] === "0") {
                    numberArray.splice(index, zeroCounter, zeroCounter.toString())
                    console.log("Loop ----> " + index);
                    console.log("previous " + numberString[index -1]);
                    console.log("current " + numberString[index]);
                    console.log("ZeroCounter " + zeroCounter);
                    console.log("SSSSSSSSSSSSSSSS");
                }   
                
                if (numberString[index] !== "0" && numberString[index -1] !== "0") {
                    zeroCounter = 1
                    console.log("Loop ----> " + index);
                    console.log("previous " + numberString[index -1]);
                    console.log("current " + numberString[index]);
                    console.log("ZeroCounter " + zeroCounter);
                    console.log("QQQQQQQQQQQQQQQQQ");
                }

                if (numberString[index] === "0" && numberString[index -1] === "0") {
                    zeroCounter += 1
                    console.log("Loop ----> " + index);
                    console.log("previous " + numberString[index -1]);
                    console.log("current " + numberString[index]);
                    console.log("ZeroCounter " + zeroCounter);
                    console.log("HHHHHHHHHHHHHHHH");

                }

            }
        numberArray = numberArray.join("")
        return numberArray;
    } else {
    return "El input debe ser un string"
}}

zeroReplacer("1234500362000440")

