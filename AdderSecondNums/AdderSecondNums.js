const adder = (num) => {
    if (isNaN(num)) {
        return "Deberías introducir un dato de tipo Number"}

        
        numString = num.toString()
        let counter = parseInt(numString[1])
        for (let index = 1; index < numString.length; index++) {
            if (numString[index] % 2 == 0) {
                counter += parseInt(numString[index])
                console.log(parseInt(numString[index]));
                console.log("Index " + index); // find out how index is evolving
            }
        } 
        console.log(counter)
        

    }
    

adder(49564)

module.exports = adder