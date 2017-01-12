//The variables are local; specific to this funtion:

function addTwoNumbers() {
	var x = 1;
	var y = 1;
	var z = x + y;
	return z;
}



function hello(){
	return "Hello World"
}

hello();
//making a function with greeting 
function greeting(name){
	var period = "."
	return "Good'ay " + name + period;
}

 var addGreeting = greeting("Paul") + " How are you doing today";

 console.log(addGreeting);



// adding number to functions 
function printNumber(){
	console.log(1);
}

printNumber();

function sumNum(num1, num2){
	return num2 + num1;
}

function divNum(num1, num2){
	return num2 / num1;
}
console.log("****************************")
console.log(divNum(10,10))

function mulNum(num1, num2){
	return num2 * num1;
}
function subNum(num1, num2){
	return num2 - num1;
}

sumNum(1,4);

function calculatePriceIndiana(quantity, price){
	var tax = 0.07; 
	var totaltax = quantity * price * tax; 
	var totalPrice = totaltax + quantity * price;

	return totalPrice;
}

console.log(calculatePriceIndiana(17, 5))

// Function with parameters:
// They will not print.

function subtractTwoNumbers(firstNumber, secondNumber) {
	var difference = firstNumber - secondNumber;
	return difference;
}
subtractTwoNumbers(4, 2)


function mulNum(num1, num2) {
	return num2 * num1;
}
mulNum(5, 5)

// built in functions example
var today = Date();
console.log(today);

var today = new Date();
console.log(today.toDateString());


// Most of the time, you will be working with multiple code blocks at once:

function checkOdd(num) {
	if (num % 2 === 0) {
		return num + " is an even number."
	} else {
		return num + " is an odd number."
	}
}
console.log(checkOdd(12))


function checkThree(num) {
	if (num % 3 === 0) {
		return "This is divisible by three."
	} else {
		return "This is not divisible by three."
	}
}
console.log(checkThree(48))

// Mini-Challenge: Refactor (improve on) the greeting function above //

function greeting(name){
	if (name = "Julian") {
		return "Good evening."
	} else if (name = "Jon") {
		return "What's up?"
	} else {
		return "You are not a known user."
	}
}
console.log(greeting("Brie"))


/*Write a function with two strings as parameters.
		The function should concatenate the string.*/

function multi(name1, name2) {
	return name1 + " and " + name2 + " are not brothers.";
}

multi("Alex", "Marcus")

/*Write a function that will help me easily calculate monthly bills.*/

function bills(rent, water, food) {
	var billsTotal = rent + water + food;
	return billsTotal
}
	console.log(bills(550, 50, 100))

/*Write a function that takes quantity, price, tax and an item
The function should take the quantity, price, tax and the item name and return
a response similar to this.
--150 hotdogs will cost you $145 (your math may not be perfect and may
 potentially return 145.457.  If that is the case, don’t sweat it.*/

function response(quantity, price){
	var itemName = "toys"
	var tax = 0.07; 
	var totalTax = price * 0.07;
	var totalPrice = totalTax + price * quantity

	return quantity + " " + itemName + " will cost you " + totalPrice + ".";
}

console.log(response(17, 2.5))


// console.log("hello world")
// console.log("hello word")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")