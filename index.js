var input = prompt("Enter a word");

for (var i = 0; i < input.length; i++) {
    var count = "";

    for (var j = 0; j < input.length; j++) {
        if (input[i] === input[j]) {
            count++;
        }
    }

    if (count > 1) {
        console.log(input[i] + " appears " + count + " times");
    }
}
