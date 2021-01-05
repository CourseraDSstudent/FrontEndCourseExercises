const sumAll = function(num1, num2) {
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    let total = 0;
    if (min > 0 && (typeof min === 'number') && (typeof max === 'number')) {
    for(let i = min; i <= max; i++) {
        total += i;
    }
        return total;
    }
    else
        return 'ERROR';
}

module.exports = sumAll
