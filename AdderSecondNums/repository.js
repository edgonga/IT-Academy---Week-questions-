// const num = 3456788
// numString = num.toString()
// console.log(numString);
// console.log(typeof(numString));
// result = parseInt(numString[1]) + parseInt(numString[3])

// console.log(result);

function sumEveryOther(nombre,index=1){
    if(isNaN(nombre)){throw new Error("L'input ha de ser un número")}
    let suma = 0;
    for(i=0;i<nombre.toString().length;i++){
        if(nombre.toString().charAt(i)!='.'){
            if(index%2===0){suma+=parseInt(nombre.toString().charAt(i));}
            index++
        }
    }
    console.log(suma);
}

sumEveryOther(264232)

// This code is maded by Oriol Sastre (Github: @oriolsastre) who try to attempt
// the same challenge, but slightly different
// I want to compare both solutions (not copy, I promise) and the differences were
// that he didn't create a string variable outside the loop ("numString") 
// As well, he has created a nested conditional to exclude decimal numbers
// And lastly, every time that he accesses to the new digit, he is using the string method
// charAt() which takes the last character of a string, but I think is not necessary,
// as long as the loop is iterating through the numString variable's last element
// Indeed, is working fine without this method