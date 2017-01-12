function hello(){
	console.log("Hello World") 
}

hello();

// console.log("hello world") 
// console.log("hello world") 
// console.log("hello world") 
// console.log("hello world") 
// console.log("hello world") 

function greeting(name) {
	console.log("Hello to " + name)
}

greeting("Noah, Peter, and Beth");

//adding numbers to functions

function printNumber(){
	console.log(1)
}

printNumber();

function sumNumber(){
	var x = 4;
	var y = 8;
	console.log(x + y);
	console.log(x * y);
}

sumNumber();



function subtract(firstNum, secondNum) {
	var difference = firstNum - secondNum
	return difference;

}

console.log(subtract(83, 29));


function mulNum(num1, num2) {
	return num1 * num2
}

console.log(mulNum(5, 5));






var today = Date();
console.log(today);

var today = new Date();
console.log(today.toDateString);




function divThree(num){
	if (num % 3 === 0){
		return "I am divisable by three."
	}else{
		return "I am not divisable by three"
	}
}
console.log(divThree(13))


//challange
function hello(name1, name2) {
	console.log("Hello to " + name1 + " and " + name2)
}
hello("Pere", "Bill");



function subtractBills(totalMoney, bills) {
	var moneyLeft = totalMoney - bills
	return moneyLeft;

}
console.log("You have " + subtractBills(3000, 2009) + " dollars after paying the bills.");








