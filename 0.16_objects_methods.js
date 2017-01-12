// OBJECT LITERALS WITH METHODS //
// Methods are functions within the object //

// The 'this' keyword refers to the 'owner' of the function you are calling.
// Below is the default. Each time a 'player' is created, it refers back to 
// the default. If no info is provided (name in this case), the player adds
// their own. You can create a default for each of these, so then you would 
// replace 'this.name' with 'player.name'.
var player = {
	//Properties
	name		: "",
	life		: 100,
	damage		: 20, // Going from properties to methods, you need the comma here.
	hasSword	: true,

	//Methods
	challenge	: function(){
		console.log(this.name + ": 'Would anyone care to fight??'");
	},
	response	: function(){
		console.log(this.name + ": 'Yes, I would like to fight!'");
	},
	firstAttack	: function(){
		console.log(this.name + " takes the first swing at and does " + this.damage + " HP damage.")
	},
	drawSword	: function(){
		console.log(this.name + " draws his sword.")
	}
}

var melkor = Object.create(player); // This is called sub-classing
melkor.name = "Melkor";

var caramon = Object.create(player);
caramon.name = "Caramon";

console.log(melkor.name);
console.log(caramon.name);

console.log(caramon.life); // This will print 100 because life has been pre-set at 100.

// Access Methods:

melkor.challenge();
caramon.response();
caramon.firstAttack();
melkor.drawSword();


