var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    console.log("The number is " + i);
}

console.log("A loop which will skip the step where i = 3.")