var name = "Julian Lovell";
	console.log(name.length);
	console.log(name[1]);

//Indexing:
//0 1 2 3 4 5 6 7 8 9 10 11 12...
//J u l i a n   L o v e  l  l

console.log(name[0] + name[1] + name[2] + name[3] + name[4] + name[5]);
console.log(name[0].toLowerCase() + name[1] + name[2] + name[3] + name[4] + name[5].toUpperCase());
console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])
console.log(name[5])


//DRY = Don't Repeat Yourself
//WET = Write Everything **Don't do this!!

/* There are 4 types of loops:
	do while
	while
	for
	for in
*/


 //   While Loops   //


var lcv /* control variable */ = 0; /* this is a loop control variable. */
while(lcv < 5) {
	console.log(name.toUpperCase());
	lcv += 1; //THIS IS CRITICAL! NO VAR LEADS TO INFINITE LOOP!!
}

// Create a while loop that starts at 0 ands ends at 10
// It should print each num of the lcv
// Make lcv var count = 0

var count = 0;
while(count < 10) {
	console.log(count);
	count ++; // ++ is = to count += 1
}

// To count backwards

var num = 10; // lcv but with the name num
while(num > 0) {
	console.log(num);
	num --;
}

// Even count:

var evenCount = 0;
while(evenCount <= 20) {
	if (evenCount % 2 === 0) {
		console.log(evenCount + " is an even number.");
	} else {
	console.log(evenCount + " is an odd number.");
}
	evenCount ++;
}

// Create a while loop that will count up to 50 by 5s
// use the lcv variable of countFive

var countFive = 0;
while(countFive <= 50) {
	console.log(countFive);
	countFive += 5;
}

