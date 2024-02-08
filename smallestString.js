function smallestString(arr){
    const len = arr.length;
    let container = arr[0];

    for(let repeat=0; repeat<len; repeat++){
        if(arr[repeat].length < container.length){
            container = arr[repeat]
        }
    }

    return container;
}

console.log(smallestString(['rahim', 'robin', 'rafi', 'ron', 'rashed']));