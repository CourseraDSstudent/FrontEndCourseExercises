const removeFromArray = function arrayArgs(arr,...rest) {
    for (let i = 0; i < arr.length; i++){
        itemToRemove = rest;
        // debugger;
        // if ( arr[i] === 3) {
        // arr.splice(i, 1);
        // }
        /* else */ if (arr[i] = typeof(String)) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

module.exports = removeFromArray
