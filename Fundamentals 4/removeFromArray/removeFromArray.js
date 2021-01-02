x = arrayArgs(1, 2, 3, 4);
const removeFromArray = function arrayArgs() {
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

module.exports = removeFromArray
