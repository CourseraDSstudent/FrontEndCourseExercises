const palindromes = function(stringToExamine) {
    var reverseString = /[^A-Za-z0-9]/g;
    stringToExamine = stringToExamine.toLowerCase().replace(reverseString, '');
    var len = stringToExamine.length;
    for (var i = 0; i < len/2; i++) {
        if (stringToExamine[i] !== stringToExamine[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

module.exports = palindromes
