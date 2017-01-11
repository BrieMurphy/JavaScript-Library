//You could do this:
var firstName = "Brie"
	console.log(firstName + ": " + 21)

//	or this:
var firstName = "Brie"
var message = firstName + ": " + 21
	console.log(message)



var firstName = "Brie"
var message = firstName + ": " + 21
	console.log(typeof message) // Type of lets you know what the variable is
var age = 21
	console.log(typeof age)

// Single quotes vs. Double quotes
var lastName = 'Murphy'
	console.log(typeof lastName)

var greetings = "Hello. How's your day?"
	console.log(greetings)

var greetings = "Brie says, 'Hello. How's your day?'"
	console.log(greetings)
// OR 
var greetings = 'Brie says, "Hello. How\s your day?"'
	console.log(greetings)


		// String methods
//console.log(greetings.length)
//console.log(greetings.toUpperCase())
//console.log(greetings.toLowerCase())
//console.log(greetings.split(" ")) = Prints [ 'Brie', 'says,', '"Hello.', 'Hows', 'your', 'day:' ]
//console.log(greetings.slice(1)) = Everything before the given number is cut out.


/*Challenge: Bronze
Write a string that has two variables.*/

var highSchool = " Rancho Bernardo High School "
var gradYear = 2013

	console.log("I graduated from" + highSchool + "in " + gradYear + ".")

/*Challenge: Silver
Create one variable that holds a string that prints out three other variables. The three other //variables should be the make, model, and year of your car.
“I drive a 1968 Chevy Impala.”*/

var year = 2003
var make = "Hyundai"
var model = "Sonata"
var message = "I drive a " + year + " " + make + " " + model + "."
	console.log(message)

/*Challenge: Gold
Create a variable called age. Give the age a value.
Use a conditional to check the age.
If the age is 18, console.log('You are an adult');
If the age is less than 18, console.log('You are a minor')*/

var age = 21

if (age >= 18) {
	console.log("You are an adult.");
} else {
	console.log ("You are a minor.");
}