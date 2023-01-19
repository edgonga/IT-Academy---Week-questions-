const { isArray } = require("util");

const maxSubArray = (arrayToMax, lengthToMax) => {

    // console.log(typeof(arrayToMax));
    // console.log(typeof(lengthToMax));
    
    if ((typeof arrayToMax === 'array' || arrayToMax instanceof Array) && !(isNaN(lengthToMax))) {
        
        if (lengthToMax >= arrayToMax.length) {
            console.log("El tamaño del array es más pequeño o igual que la longitud indicada");
            return lengthToMax
        } else {

        finalResult = [-Infinity, 0]
        for (let index = 0; index <= arrayToMax.length - lengthToMax; index++) {
            
            let tempResult = arrayToMax.slice(index, index + lengthToMax).reduce((accumlator, currentValue) => accumlator + currentValue, 0)
            if (tempResult > finalResult[0]) {
                finalResult[0] = tempResult; finalResult[1] = index

            }}
            return arrayToMax.slice(finalResult[1], finalResult[1] + lengthToMax)


        }
    } else {return "El primer parámetro debe ser un array y el segundo un number"}  

}


module.exports = maxSubArray


// Here I have to admit that core logic of the function was highly inspired by the code of Oriol (Github: @oriolsastre)
// On my onw, I also arrive to the point that to arrive to the proper solution, a combination between slice and reduce was needed
// However, the logic to store each iteration result into a variable (tempResult) and compare it every loop against a result outside the for loop (finalResult),
// was smooth and clever and not my idea
