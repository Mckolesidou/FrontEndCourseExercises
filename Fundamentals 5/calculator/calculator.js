function add (num1,num2) {
	return num1+num2;
}

function subtract (num1,num2) {
	return num1-num2;
}

function sum (arr) {
	sum=0;
	for (let i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	return sum;
}

function multiply (arr) {
	product = arr[0];
	for (let i = 1; i < arr.length; i++) {
		product = product * arr[i];
	}
	return product;
}

function power(num, power) {
	return num**power;
}

function factorial(num) {
	fact = 1;
	for (let i = 1; i <= num; i++) {
		fact = fact * i;
	}
	return fact;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}