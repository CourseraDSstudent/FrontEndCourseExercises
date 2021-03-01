function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	
	return x - y;
}

function sum (arr) {
	let sum = 0;
	for (let n of arr)
	sum += n;
	return sum;
}

function multiply (arr) {
	let prod = 1;
	for (let n of arr)
	prod *= n;
	return prod;
}

function power(x, y) {
	return Math.pow(x, y);
	
}

function factorial(num) {
	var result = 1;
	for (var i = 1; i <= num; i++) {
	result *= i;	
	}	
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}