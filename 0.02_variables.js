var firstName = "Brie"
var lastName = "Murphy"
	console.log(firstName)

/* This is called concatenation (combining two strings).
   Sometimes referred to as 'cat'. */
	console.log(firstName+" "+lastName)

/* A basic algorithm. This is used for such things
   as a username*/

var fullName = firstName+" "+lastName /* No need to make this a string, 
									     because it will automatically convert it to a string
									     due to the fact that firstName and lastName
									     are already defined.*/
	console.log(fullName)

/* Empty variables will print as undefined.
   It can be changed later. As shown.*/

var num

num = 2
	console.log(num)

/* Empty string. It will print an empty space.
   Like the empty variable, it can be changed later. */

var petsName = ""

petsName = "Lucien"
	console.log(petsName);

let = "Lucien" /* Variable has a global scope. Let is more secure. */
if (true) {
	let petsName = ""
}

// SnakeCase = first_name
// CamelCase = firstNameIsThis

// Short hand operators

var age = 21
console.log(age += 1) // age = age + 1
console.log(age *= 2) // age = age x 2


/*CHALLENGE: Bronze
Come up with five different variables. Think of 
real world uses for integers and create variables based on 
those things.*/

var foodBudget = 100
var post = "Why am I so bad at math?"
var pets = 2
var postsPerDay = 2
var daysPerWeek = 7

	console.log(postsPerDay *= daysPerWeek)

/*CHALLENGE: Silver
Make a var called myNumber
Set it to 0.
Use shorthand to add 10 to it.
Then use shorthand to subtract 1.
Use shorthand to multiply by 9.
Use shorthand to divide by 7.
Just for practice, print myNumber to the console between each operation.*/

var myNumber = 0
	console.log(myNumber += 10)
	console.log(myNumber -= 1)
	console.log(myNumber *= 9)
	console.log(myNumber /= 7)


console.log("---") // If you want to have something between each console.log
/*CHALLENGE: Gold
Challenge #3 - Lifetime Supply
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount of glasses of water per day (as a number).
Calculate how many glasses of water you would need for the rest of your life.
Output the result to the screen like so: "You will need 5 million glasses to last you until the ripe old age of X".*/

var age = 21
var maxAge = 90
var waterPerDay = 8
var totalNeeded = (waterPerDay * 365) * (maxAge - age);
var message = "You will need " + totalNeeded + " glasses of water to last you until the ripe old age of " + maxAge + "."
	console.log(message)