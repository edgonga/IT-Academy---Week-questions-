const capitalizer = (stringToCapitalize) => {
    if (typeof(stringToCapitalize) == "string") {

        const stringCapitalized = ''
        const vowels = 'AaEeIiOoUu'
        const initialValue = 0
        const capitalizeItenerator = stringToCapitalize.reduce((previousLetter, currentLetter), initialValue => {  //Nos lanza el error que previousLetter is not defined
            if (previousLetter.includes(vowels)) {
                stringCapitalized + currentLetter.toUpperCase()
            } else stringCapitalized + currentLetter
            
        })

        return stringCapitalized

    } 
    else 
    return "Deberías introducir un string"
}


module.exports = capitalizer

