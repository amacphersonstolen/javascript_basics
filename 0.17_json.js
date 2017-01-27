//JSON is an acronym for Javascript Object Notation
//
var names = [["James","Paul","Cameron","Chris"],["Morgan","Julie","Abbey","Brie"]]
//console.log(names[1][2])
var items = [
	{
		"id": 1,
		"name": "Green Door",
		"price": 12.50,
		"tags": ["home","green","vinyl"]

	},

	{
		"id": 2,
		"name": "Yellow Door",
		"price": 80.75,
		"tags": ["home","yellow","plastic"]
	}
];
//console.log(items[1])
// console.log(items[1].name)
// console.log(items[1].tags[2])

for (var i = 0; i < items.length; i++) {
	console.log(items[i].name);
}