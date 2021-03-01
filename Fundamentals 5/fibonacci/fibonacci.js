const fibonacci = function(number) {
    let n1 = 0, n2 = 1, temp;

    if (number >= 0) {
        while (number >= 0) {
            temp = n1;
            n1 = n1 + n2;
            n2 = temp;
            number--;
        }
        return n2;
        
    } else return "OOPS";
}

module.exports = fibonacci
