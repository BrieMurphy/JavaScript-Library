// Booleans are true or false

// These are boolean variables:
var tired = true;
var hungry = true;

// Booleans from integers:

var isTrue = 1 === 1; // Single equal sign is the assignment operator; assigns info into a variable
					  // Double equal sign means "is equal to?".
					  // Triple equal sign equals value and type of variable/data type
	console.log(isTrue)

var isNotTrue = 1 === "1";
	console.log(isNotTrue)

var num = 1 == "1";    // This prints to true because the double equals ONLY evaluates 
					  // if the values are the same, not their data type.
	console.log(num)

/*			operator		Meaning
			   ==			Equality
			   ===			Strict Equality
			   !=			Inequality
			   !==			Strict Inequality
			   >			Greater than
			   >=			Greater than or equal to
			   <			Less than
			   >=			Less than or equal to   */
// The ! sign is called the Bang sign. ! = not
var num1 = 35
var num2 = 34
	console.log(num1 != num2)

var foo = true
	console.log(!foo) // This equates to false because the ! makes it untrue.

// Boolean Logic: If/Else




/*CHALLENGE: Bronze
Create 5 boolean variables that would be used in everyday programming
Using the boolean variables created above, integrate logical and comparison 
operators to return true and false statements in the console.
*/

var userOnline = true
var helpful = false
var ready = true
var isSignedUp = false
var userLoggedOff = true

	console.log(userOnline)
	console.log(!helpful)

/*CHALLENGE: Silver
Write your own conditional that deals with Boolean Operators and Boolean Logic. 
Get as complicated as you want, just make sure it runs. Sign up for an account 
on Repl.it. Add the code there and send it to James, Paul, and Kenn. You can 
do that on Slack by using the @ symbol for all of us.*/

var height = 4
var message1 = "You are tall enough to ride!"
var message2 = "Sorry, you cannot ride."

if (height >= 4) {
	console.log(message1)
} else {
	console.log(message2)
}

/*CHALLENGE: Gold 
I want to order some Colts gear online(Jona, go ahead with the Bengals(boo)), and I'm not sure 
which courier service to use yet. I want to know which one to use
for Next Day Air, 2 day air, 3 day ground, and whenever. Can you write
an if/else statement that helps me pick the best one? It's just your opinion here.*/

