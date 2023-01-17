// Given a string, make every consonant after a vowel uppercase
// For instance, if we receive "hello world", we should throw back "heLlo WoRld"
// We will have to manage with the spaces and other difficulties

const capitalizer = (stringToCapitalize) => {
    if (typeof(stringToCapitalize) !== "string") {
        return "Deberías introducir un string"}
                                    
        let result = stringToCapitalize[0];
        Array.from(stringToCapitalize).reduce((previous, current) => {
            if (/[aeiouAEIOU]/.test(previous) && !/[aeiouAEIOU]/.test(current)) {
                result += current.toUpperCase()
            } else result += current
        
        if (!/[a-zA-Z]/.test(current)) {
            return previous
        } else return current
        
        })
    
        return result
}

module.exports = capitalizer




