// if/else

var elevatorUp = true;
var elevatorDown = true;
var elevatorOpen = true;
var elevatorBroken = true;
var elevatorStuckWithPassengers = true;
var elevatorStuckAndWeAreWorkingOnIt = true;
var elevatorNumber = 13;


if (elevatorUp === true) {
	console.log("Going Up");
	console.log("Thanks for riding.");
} else {
	console.log("Going Down");
}

if (elevatorBroken) {
	console.log("Sorry, this elevator is out of service.")
} else {
	console.log("Thank you for riding.")
}

if (elevatorStuckWithPassengers) {
	console.log("Oh. Too bad. Looks like you're stuck.")
} else {
	console.log("Thank you for riding.")
}



/*CHALLENGE: Bronze
WRITE YOUR OWN CONDITIONAL USING BOOLEANS AND LOGICAL OPERATORS.
Come up with a simple example*/

var raining = true;
var cloudy = true;
var sunny = false;

if (raining = !sunny) {
	console.log("It is raining out.");
}

/*Challenge: Silver
Create a simple login console message.
create 2 variables, 1 for your users firstName, 2 for the boolean condition
If login is true then print "You're Logged In!"
Else if login is false then print "Please Sign In"*/

var firstName = "Brie"
var isLoggedIn = true

if (isLoggedIn) {
	console.log("You're logged in! Welcome, " + firstName + "!");
} else {
	console.log("Please sign in.");
}

/*Challenge: Gold
Set up a var with bankAccount and a var with debt.
Also set up a difference var.
Do some logic to show whether or not you will pay 
off your debt or prints out a message if you have extra money.*/

var bankAccount = 3000
var debt = 1500
var difference = 1500

if(bankAccount <= debt) {
	console.log("You can't pay off your debt.");
} else {
	console.log("You have extra money.");
}

