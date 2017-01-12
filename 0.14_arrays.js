//Instead of this:

/*var name1 = "Marcus"
var name2 = "Alex"
var name3 = "Dameon"
var name4 = "Matthew"*/

// do this:
//             0       1      2       3
var names = ["Jay", "Alex", "Tim", "Brian"];
	console.log(names[2]); // Whatever number you put in the [] is the word you print.

var nums = [7, 3, 92, 18, 6, 50];
	console.log(nums[5]);

var mixed = [18, "Tim", 0, 88, "tapes"];
	console.log(mixed[4]);

// Can we use a for in loop to iterate () and console log each name in names?

for (name in names) {
	console.log(names[name]);
}

// Create an array of your favorite candy bars.

var favCandyBars = ["MilkyWay Midnight", "Butterfingers", "Three Muskateers", "Snickers"];
	console.log(favCandyBars);

// To add a value to the end of an array:
favCandyBars.push();
	console.log(favCandyBars);

// To remove the value from the end of an array:
favCandyBars.pop("Heath Bars");
	console.log(favCandyBars);

console.log(favCandyBars.slice(0,2));

// .slice does not change the array, only the return
// .indexOf will return the index of where a value is located in the array
// .splice will allow us to remove the item from the array
console.log(favCandyBars.indexOf("Snickers"));
	favCandyBars.splice(0,1);
	console.log(favCandyBars);






/*CHALLENGE: BRONZE

Create an array called numbers(see below) and console.log the sum of indices 0, 2, 4,6 

var numbers = [8,6,7,5,3,0,9]
	Add numbers in the 0, 2, 4, 6 index.
	Should print: 27


CHALLENGE: SILVER

Compose an array of classmate names for the people on your row. 
Iterate over the names, then give a personalize message to each of them. 



CHALLENGE: GOLD

A
Write a function that accepts a parameter and then adds all the numbers together from the num array below.  (HINT! You will need to use a sum variable to keep track of your total.  You will need a loop and also the correct notation to access each index (think bronze challenge)

var num = [8,6,7,5,3,0,9];

If you finish the first one, 

Using only for loops create a tree that looks like this:

0 : 2 : 4
0 : 2 : 5
0 : 3 : 4
0 : 3 : 5
1 : 2 : 4
1 : 2 : 5
1 : 3 : 4
1 : 3 : 5
*/

