var input = prompt("Enter a word or Sentence :")

var check = "";

for (var i = 0; i < input.length; i++) {

    if (check.indexOf(input[i]) !== -1) {
        continue;
    }

    var count = 0;

    for (var j = 0; j < input.length; j++) {
        if (input[i] === input[j]) {
            count++;
        }
    }

    if (count > 1) {
        console.log(input[i] + " appears " + count + " times");
    }

    check += input[i];
}    
