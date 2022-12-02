const fs = require('fs');

let input;

try {
    input = fs.readFileSync("./inputs/input1.txt", "utf8").split("\n");
} catch (e) {
    console.error("Error reading in file")
    console.error(e);
    process.exit(1);
}

let max_cals = 0;

for (let i = 0; i<input.length; i++) {
    let currentElf = 0;
    
    while (i<input.length && input[i] !== "") {
        currentElf += parseInt(input[i]);
        i++;
    }

    if (currentElf > max_cals) max_cals = currentElf;

}

console.log(max_cals)