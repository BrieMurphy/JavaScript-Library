// Scope //

// The below is global:
var name = "Brie";



function greetings() {
	var name = "Brie";
	return name;
}
	console.log(greetings())



/* This means that everything within
this global (this file) can call on
that variable. */

/* But if we do this, the global variable
is changed, even though it's within
a function: */



function greetings() {
	var name = "Dameon";
	return name;
}
	console.log(greetings())



function greetings() {
	var name = "Dameon";
	random = "bread"; // This is also global, because var does not connect it to the function.
	return name;
}
	console.log(greetings())

console.log(name) // Taking 'name' from the global scope
console.log(random)

