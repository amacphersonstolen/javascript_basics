//functional expression

var greeting = function(name) {
	console.log("Hello " + name)
}("Abbey");

(function( value ){
	console.log(value)
})(15);

var myIIFE = (function(){
	var privateVar = "secrets";

	return {
		reveal: function() {
			console.log(privateVar);
		}
	}
})();
myIIFE.reveal();