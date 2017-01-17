var names = ["josh", "noah", "genie", "loser", "sam"]
console.log(names[3])

for (name in names) {
	console.log(names[name])
}
names.push("Lois");
console.log(names)
names.pop()
console.log(names)

console.log(names.slice(0,4))