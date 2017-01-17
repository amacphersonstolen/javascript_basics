var emptyObject = {};

var facebookFriend = {
	name : "",
	age : 0,
	vocation : "",
	inRelationship : true
};

facebookFriend.name = "Jona";
console.log(facebookFriend.name);
facebookFriend.age = 40;
console.log(facebookFriend.age)

console.log(facebookFriend.name + " just turned " + facebookFriend.age);

var object = {
	name : "",
	color : "",
	size : "",
};

object.name = "computer";
object.color = "grey";
object.size = "medium";

console.log("I have a " + object.size +"," + object.color +" "+ object.name)