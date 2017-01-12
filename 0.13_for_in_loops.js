var footballTeam = "Packers"
for (var letter in footballTeam) {
	console.log(footballTeam[letter])
}

var vowelCount = 0
var food = "Chicken"
for (letter in food) {
	if (food[letter] === "a" || food[letter] === "e" || food[letter] === "i" || food[letter] === "o" || food[letter] === "u") {
		vowelCount++
	}
}
console.log(vowelCount)