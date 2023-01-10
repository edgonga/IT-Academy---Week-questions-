const capitalizer = (stringToCapitalize) => {
    if (typeof(stringToCapitalize) !== "string") {
        return "Deberías introducir un string"}
                                    

    const vowels = 'AaEeIiOoUu'
    const arrayToCapitalize = Array.from(stringToCapitalize)
    const reducer = arrayToCapitalize.reduce((accumulator, currentValue) => {
        if (vowels.includes(currentValue)) {
            const capitalizeCurrentValue = currentValue.toUpperCase(currentValue)
            accumulator + capitalizeCurrentValue
            
        } else accumulator + currentValue
        
    
    })   
    return reducer
}

module.exports = capitalizer




