/* Closures help protect and access data within a function
	Practically all functions are closures

/* A closure give you access to the variables set in a function
after the function has completed and returned.

Helps keep variables from getting pushed into global scope
Degree of protection. Variables can't be overwritten.

mutable = def. liable to change. */

var friend = {};

//
var setAge = function(myAge) {
	var birthday = "6/20/1995";
//we are returning an object here
	return {
		getAge : function() {
			return myAge;
		},
		getBirthday : function() {
			return birthday;
		},
		setBirthday : function(birthday){
			this.birthday = birthday;
		}
	}
}

friend.age = setAge(21);
	console.log(friend.age);
	console.log(friend.age.getAge());
	console.log(friend.age.birthday);
	console.log(friend.age.getBirthday());

var toby = {};
toby.age = setAge(24);
toby.age.setBirthday("4/28/1992");
	console.log(toby.age.getBirthday());
