const fs = require('fs');

let input;

try {
    input = fs.readFileSync("./inputs/input1.txt", "utf8").split("\n");
} catch (e) {
    console.error("Error reading in file")
    console.error(e);
    process.exit(1);
}

let elves = []

for (let i = 0; i<input.length; i++) {
    let currentElf = 0;
    
    while (i<input.length && input[i] !== "") {
        currentElf += parseInt(input[i]);
        i++;
    }

    elves.push(currentElf)

}

elves.sort((a,b) => b-a);

console.log(elves[0] + elves[1] + elves[2])