var isOn = true;
var isHot = false;

if(isOn === true) {
	console.log("This light is on. It's too bright, dude.");
}

// Because isOn is set to true...

if(isOn) {
	console.log("Dude, turn that music off.")
}

// If it was set to false, it would print nothing.

// Boolean Operators
//    && = and


// This does not meet the conditions, so it prints nothing.
if(isOn && isHot) {
	console.log("Dude, that music is hot.");
}

// | is called a pipe. || = or

if(isOn || isHot) {
	console.log("Dude, that music is on, it's loud, and it is NOT hot.");
}

// ! = not
if(!isHot) {
	console.log("It is not hot.");
}

