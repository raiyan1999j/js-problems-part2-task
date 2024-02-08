function lowestNumber(array){
    let arrayLen = array.length;
    let result = array[0];

    for(let repeat=0; repeat<arrayLen; repeat++){
        if(array[repeat] < result){
            result = array[repeat]
        }
    }

    return result;
}

console.log(lowestNumber([167, 190, 120, 165, 137]));