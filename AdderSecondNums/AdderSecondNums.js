const adder = (num) => {
    if (isNaN(num)) {
        return "Deberías introducir un dato de tipo Number"}

        
        numString = num.toString()
        let counter = 0
        for (let index = 0; index < numString.length; index++) {
            //console.log("Index " + index);
            //console.log("Counter " + counter)
            
            console.log(parseInt(numString[index]));
            if (index % 2 !== 0) {
                counter += parseInt(numString[index])
                //console.log("Digit to sum" + parseInt(numString[index]));
                //console.log("----In loop----");
                
            }
        } 
        return counter
        

    }
    

adder(548915381)

module.exports = adder