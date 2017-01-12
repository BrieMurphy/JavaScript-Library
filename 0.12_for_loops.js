//lcv = loop control variable

for (lcv = 0; lcv < 10; lcv++) {
	console.log("Julian Lovell");
}

var name = "Henry";
console.log(name.length);
console.log(name[0]);

for (lcv = 0; lcv <= 4; lcv++) {
	console.log(name.length);
}

var name = "Henry Lovell";
console.log(name.length);
for (lcv = 0; lcv < 6; lcv++) {
	console.log(name[lcv]); //console.log(name[0]) and then [this number is increased by 1 each loop]
}

var name = "Henry Lovell";
console.log(name.length);
for (lcv = 0; lcv < name.length; lcv++) { // By doing this, you can change name to any length and it will always print.
	console.log(name[lcv]);
}

// create an animal variable and use a for loop to console.log each letter of your fav animal
var animal = "Hyena";
for (i = 0; i < animal.length; i++) {
	console.log(animal[i]);
}

