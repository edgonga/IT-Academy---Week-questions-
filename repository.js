// Space where only the logic was tested
// Logic implemented using if and else clauses to control the execution flow


const reducer = (value) => {
    let result = value[0];
    Array.from(value).reduce((previous, current) => {
        if (/[aeiouAEIOU]/.test(previous) && !/[aeiouAEIOU]/.test(current)) {
            result += current.toUpperCase()
            console.log('previous --> ' + previous);
            console.log('current --> ' + current);
            console.log('accumulator --> ' + result);
        } else result += current
        console.log('previous --> ' + previous);
        console.log('current --> ' + current);
        console.log('accumulator --> ' + result);

        if (!/[a-zA-Z]/.test(current)) {
            return previous
        } else return current
        
    })

    return result
}

//reducer("hello world")



// Logic implemented using the ternary expressions (replacing the if and else clauses)
// It's a more elegant way to apply conditions and with less code lines




const ternaryReducer = (ternaryString) => {
    let result = ternaryString[0]
    Array.from(ternaryString).reduce((previous, current) => {
        result +=
            /[aeiouAEIOU]/.test(previous) && !/[aeiouAEIOU]/.test(current)
            ? current.toUpperCase()
            : current
        
        return !/[a-zA-Z]/.test(current)
        ? previous
        : current
    })

    return result
}

console.log(ternaryReducer("hello world"))


// Exercise carry on with the precious help of Marçal Chaiben (github @Chaiben)