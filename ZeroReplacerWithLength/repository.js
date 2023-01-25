// My first attempt was not succesful, even if the logic that I try out was not completely bad, I didn't succed to make it work
// Instead of creating a new string variable to store every result of each loop iteration, I tried to modicate the actual string (the function parameter)
// with the splice method and capturing the four possibilities with if clauses
// I'm pretty sure that what makes not arriving to the expected result is the implementation of the splice method (will try to give a look in the future)
// Future note: try the splice method itself insulated

const zeroReplacer = (numberString) => {
    if (typeof(numberString === String)) {
        
        numberArray = Array.from(numberString)

        let zeroCounter = 1
        let previousIsAZero = false
                                    
        for (let index = 0; index <= numberString.length; index++) {
                
                
                if (numberString[index] !== "0" && numberString[index -1] === "0") {
                    numberArray.splice(index, zeroCounter, zeroCounter.toString())
                    zeroCounter = 1
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

                if (numberString[index] === "0" && numberString[index -1] !== "0") {
                    zeroCounter += 1
                    console.log("Loop ----> " + index);
                    console.log("previous " + numberString[index -1]);
                    console.log("current " + numberString[index]);
                    console.log("ZeroCounter " + zeroCounter);
                    console.log("PPPPPPPPPPPPPPP");

                }

            }
        numberArray = numberArray.join("")
        return numberArray;
    } else {
    return "El input debe ser un string"
}}

zeroReplacer("1234500362000440")

