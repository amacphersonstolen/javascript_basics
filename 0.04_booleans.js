//boolean variables
var fun = true;
var tired = false;
console.log(fun);
console.log(tired);


//Comparison operators in Javascript (=)
// = assigns information into a variable
// == evaluates values(ex. identical numbers), returning true or false
// === evaluates values and type(ex. whether a number or string) of variable

var isTrue = 1 == 1;
console.log(isTrue);

var hungry = false;
var happy = true;
var sleepy = true;
var thirsty = true;
var annoying = false;

if(!hungry) {
	console.log("I am not hungry.")
}
else{
	console.log("I am hungry.")
};




var daysTilDelivery = 2;

if(daysTilDelivery === 3) {
	console.log("Use 3 day ground.")
}else if(daysTilDelivery === 2){
	console.log("Use 2 day ground.")
}else if(daysTilDelivery <= 1){
	console.log("Use next day air.")
}else{
	console.log("Who cares?!")
};


