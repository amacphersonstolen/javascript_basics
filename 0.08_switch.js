var marginOfColtSuperBowlWins = 17
var result

switch(marginOfColtSuperBowlWins){
	case 3:
		result = "Cool";
		break;
	case 12:
		result = "Better";
		break;
	case 17:
		result = "Awesome";
		break;
	default:
		result = "Who cares";
}
console.log("Switch result: " + result)