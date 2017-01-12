//to access index we use [] and the index number inside of them
//DRY - don't repeat yourself
//WET - write everything 

var name = "James H";
console.log(name.length);
console.log(name[0] + name[1] + name[2] + name[3] + name[4] + name[5] + name[6]);

var lcv = 0
while (lcv < 15) {
	console.log(name.toUpperCase());
	lcv += 1
}



var count = 0
while (count <= 10) {
	console.log(count);
	count ++ //++ is equal to +=1
}



var num = 10
while (num > 0) {
	console.log(num);
	num -= 1
}



var evencount = 1;
while (evencount < 20) {
	if (evencount % 2 == 0){
		console.log(evencount + " is even");
	}else{console.log(evencount + " is odd")}
	evencount++;
}



var countFive = 0;
while (countFive <= 50) {
	if (countFive % 5 == 0) {
		console.log(countFive)
	}countFive++
}




