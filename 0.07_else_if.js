var age = 21;

/*if (age >= 21) {
	console.log("You can drink.");
} if (age <= 18) {
	console.log("You can not drink.");
} if (age >= 25) {
	console.log("You can rent a car.");
} else {
	console.log("You cannot drink.");
}*/

// Better way:

if (age >= 21) {
	console.log("You can drink.");
} if (age < 18) {
	console.log("You can not drink.");
} if (age >= 25) {
	console.log("You can rent a car.");
}

/*CHALLENGE: BRONZE
expand upon our a simple login.
create 2 variables 1 for your users username, 2 for the 
boolean condition then another to check if the user is an admin
If login is true then print "You're Logged In!"
If login is true and the user is a admin, print "This is 
the dashboard for your employee records you have master control"
If Login is true and the user is a manager, print "This 
is the dashboard for your employee records, you can only read but 
not create users" If login is true and the user is a employee, print 
"clock in and clockout please" Else if login is false then print "Please Sign In"*/

var firstName = "Brie"
var isLoggedIn = true
var isAdmin = true
var isManager = false
var isEmployee = false

if (isLoggedIn) {
	console.log("You're logged in! Welcome, " + firstName + "!");
	if (isLoggedIn + admin) {
	console.log("This is the dashboard for your employee records. You have master control.");
} else if (isLoggedIn + manager) {
	console.log("This is the dashboard for your employee records, you can only read but not create users");
} else if (isLoggedIn + employee) {
	console.log("Clock-in and clock-out please.");
} else {
	console.log("Please sign in.");
}

/*CHALLENGE: SILVER
Create an if statement that has several conditions.
Pretend that we will play four total games next year against the patriots.
Deal with the Patriots record versus our record In other words, if our record was better, 
talk some smack. If not, you should still talk some smack, but in 
a different way. If the records were the same, talk some smack.*/
 
var patriotsRecord = 10
var ourRecord = 2

if (ourRecord > patriotsRecord) {
	console.log("You guys suck!");
} else if (ourRecord < patriotsRecord) {
	console.log("We're still better.");
} else if (ourRecord == patriotsRecord) {
	console.log("We're going to win.");
} else {
	console.log ("We can't lose!");
}


/*CHALLENGE: GOLD

1. Write a program that prompts your users in the browser to enter a
number from 1 to 5 about how optimistic they are about the Colts next year.
2. Have a different response for each number.

*HINT*
 you have to build this in relp.it 
Research prompt*/

/*var num = prompt("Using a number between 1 and 5, how optimistic are you about the Colts' preformance this year?")


if (num == 1) {
	alert("That's not very promising...")
} else if (num == 2) {
	alert("Are you sure you're a fan?")
} else if (num == 3) {
	alert("So about average, huh?")
} else if (num == 4) {
  alert("Are you going to watch the games?")
} else if (num == 5) {
	alert("Let's hope so!")*/