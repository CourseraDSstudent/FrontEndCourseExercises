const reverseString = function(str) {
    let splittedString = str.split("");
    let reversedArray = splittedString.reverse();
    let joinedArray = reversedArray.join("");
    return joinedArray;
}

module.exports = reverseString
