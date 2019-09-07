var getData = GetData();
var data = JSON.parse(getData);

(function() {

	console.log("All skills sorted alphabetically:");
	var skills =
	_(data)                                             
	.map('skills')                                      
	.flatten()
	.sortBy()                                            
	.uniq()    
	.value();    
	console.log(skills);

	console.log("Names in dependency on friends amount:");
	var names =
	_(data)
	.sortBy(['friends.length', 'name'])    
	.map( function (i) { return i.name + ' : ' + i.friends.length + ' friend(s)'; } )
	.value();
	console.log(names);

	console.log("All users' friends");
	var friends =
	_(data)
	.map('friends') 
	.flatten()      
	.map('name')    
	.uniq()
	.value();
	console.log(friends);

}());

