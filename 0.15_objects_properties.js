// In JavaScript, an object is a standalone entity, with properties and type. (Mozilla)

// Empty Object:
var emptyObject = {};

// Object w/ properties:
var facebookFriend = {
	name				: "",
	age					: 0,
	vocation			: "",
	inRelationShip		: true 
};

// The '.' operator is an accessor:
facebookFriend.name = "Jon";
	console.log(facebookFriend.name);

facebookFriend.age = 19;
	console.log(facebookFriend.age);

facebookFriend.inRelationship = true;

if (facebookFriend.inRelationship) {
	console.log(facebookFriend.name + " is in a relationship.");
}

facebookFriend.name = "Julian";
	console.log(facebookFriend.name);

//Object Literal:
facebookFriend.age = 19 + 1;
	console.log( "Your Facebook friend " + facebookFriend.name + " just turned " + facebookFriend.age + ".");


// 
var books = {
	title			: "",
	genre			: "",
	pages			: 0,
	author			: "" 
};

books.title = "Salem's Lot";
books.author = "Stephen King";
	console.log("I have a book called " + books.title + " by " + books.author + ".")
books.pages = 439;
books.genre = "horror";
	console.log("It is a " + books.genre + " novel with " + books.pages + " pages.")

// Console is an object


