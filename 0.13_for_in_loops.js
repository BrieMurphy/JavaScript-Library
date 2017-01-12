var team = "Hyenas";
// for (i = 0; i <team.length; i++)
// 'Char' stands for character. In this case, it is the lcv
for (var char in team) {
	console.log(team[char]);
}

// Create a for in loop that prints each letter of your fav show.
var favShow = "Criminal Minds";

for (var char in favShow) {
	console.log(favShow[char]);
}

// Create a for in loop for your favorite food
// Then count each vowel.
// 1. Use a for in loop
// 2. Use a conditional to check if the letter is a vowel
// 3. ? == "a" || "e" || "i" || "o" || "u"
// 4. vowelCount = 0


var favFood = "potato soup";
var vowelCount = 0;

console.log(favFood.length);
for (var char in favFood) {
	if (favFood[char].toLowerCase() == "a" || favFood[char].toLowerCase() == "e" || favFood[char].toLowerCase() == "i" || favFood[char].toLowerCase() == "o" || favFood[char].toLowerCase() == "u") {
		vowelCount++
	}
}
	console.log("There are " + vowelCount + " vowels in the words " + favFood + " and " + favFood.length + " letters total.");

