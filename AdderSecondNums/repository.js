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
    return suma;
}

sumEveryOther(264232)