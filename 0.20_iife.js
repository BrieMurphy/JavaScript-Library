/* Immediately Invoked Functional Expression
	pronounced 'iffy'

Create a greeting function w/ name parameter
Should print "Hello" + name */


/*This is called a functional expression:
var greeting = function(name) {
	console.log("Hello" + " " + name);
}

greeting("Brian")
*/

//This is an immidately invoked functional expression:
/*var greeting = function(name) {
	console.log("Hello" + " " + name);
}("Brian"); */ //If there is nothing in the parenthesis, it prints "Hello undefined".

//Anonymous function:

/*var greeting = function(name) {
	console.log("Hello" + " " + name);
}("Brian");

(function(value){
	console.log(value)
})(15)*/

/*var myIIFE = (function(){
	var privateVar = "secrets";

	return {
		reveal: function() {
			console.log(privateVar);
		}
	}
})();
	console.log(myIIFE.privateVar);
	myIIFE.reveal()
*/