//JSON is an acronym for JavaScript Object Notation
// Regular array
//var names = ["Matthew", "Marcus", "Alice", "Alex"];
//console.log(names[0])

// Nested array
var names = [["Matthew", "Macrus", "Alice", "Alex"], ["Jack", "Jeff", "Natalie", "Sally"]];
//console.log(names[0][3])

// json
// A Meta-tag describes the web pages' content, much like a tag on a blog.
var items = [
	{
		"id": 1, 
		"name": "Black Door",
		"price": 20,
		"tags": ["travel", "black", "vinyl"]
	},
	{
		"id": 2,
		"name": "Black Box",
		"price": 50,
		"tags": ["pet", "black", "wood"]
	},
	{
		"id": 3,
		"name": "Easter Egg",
		"price": 8,
		"tags": ["storage", "gold", "wood"]
	},
	{
		"id": 4,
		"name": "Obsidian Knife",
		"price": 20,
		"tags": ["weapon", "black", "obsidian"]
	}

];
//	console.log(items)
//	console.log(items[0])
//	console.log(items[0].id)
	console.log(items[0].tags[1]);

// Create a for loop that will tell the name of each item:

for (i = 0; i <items.length; i++) {
	console.log(items[i].name);
}
