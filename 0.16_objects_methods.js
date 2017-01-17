var player = {
	name : "",
	life : 100,
	damage : 0,

	challenge : function(){
		console.log(this.name + " says: Would anyone care to fight?");
	},
	response : function(){
		console.log(this.name + " says: Yes!");
	},
	attack : function(target){
		console.log(this.name + " throws the fist at " + target.name + ".")
	}
}

var abbey = Object.create(player);
abbey.name = "Abbey";

var cody = Object.create(player);
cody.name = "Cody"

abbey.challenge()
cody.response()

abbey.attack(cody)

