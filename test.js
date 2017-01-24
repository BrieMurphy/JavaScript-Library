$(document).ready(function(){
	$.ajax({
		dataType: "json"
		url: "http:/swapi.com/api/people/",
		success: function(data){
			console.log(data.results.forEach(function(element){
				console.log(element.name)
			}))
		}
	});
	// Print out a few more objects with attributes
		dataType: "json"
		url: "http:/swapi.com/api/people/",
		success: function(data){
			console.log(data.results.forEach(function(people) {
				console.log(people.name)
			}))
		}
});
