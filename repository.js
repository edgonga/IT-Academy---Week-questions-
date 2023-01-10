// // Lógica para que el flujo de ejecución entre si la última letra es vocal

const string = 'hello world'
const vowels = 'AaEeIiOoUu'

const array = Array.from(string)

// // const upperArray = array.toUpperCase();
// // console.log(upperArray);

// // if (vowels.includes(array[array.length - 1])) {
// //     console.log("Correcto");
// // }


const reducer = array.reduce((accumulator, currentValue) => {
    if (vowels.includes(accumulator[accumulator.length -1])) {       
        console.log('previous --> ' + accumulator[accumulator.length -1]);
        console.log('current --> ' + currentValue);
        console.log('acumulador --> ' + accumulator);
        const capitalizePreviousValue = accumulator.toUpperCase(currentValue)
        
        return capitalizePreviousValue + currentValue
    } 
    console.log('previous --> ' + accumulator[accumulator.length -1]);
    console.log('current --> ' + currentValue);
    console.log('acumulador --> ' + accumulator);
    return accumulator + currentValue
    
})

console.log(reducer);


// const capitalizer = (stringToCapitalize) => {
//     if (typeof(stringToCapitalize) !== "string") {
//         return "Deberías introducir un string"}
                                    

//     const vowels = 'AaEeIiOoUu'
//     const arrayToCapitalize = Array.from(stringToCapitalize)
//     const reducer = arrayToCapitalize.reduce((accumulator, currentValue) => {
//         if (vowels.includes(currentValue)) {
//             const capitalizeCurrentValue = currentValue.toUpperCase(currentValue)
//             accumulator + capitalizeCurrentValue
            
            
//         } else accumulator + currentValue
        
    
//     })   
//     return console.log(reducer)
        
       


    
    

   


