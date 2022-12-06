const fs = require('fs');

let input;

try {
    input = fs.readFileSync("./inputs/input3.txt", "utf8").split("\n");
} catch (e) {
    console.error("Error reading in file")
    console.error(e);
    process.exit(1);
}

let totalScore = 0;

for (let i = 0; i<input.length; i += 3) {
    const elf1 = input[i];
    const elf2 = input[i+1];
    const elf3 = input[i+2];

    const common = elf1.split("").filter(x => elf2.includes(x) && elf3.includes(x))[0]
    const charCode = common.charCodeAt(0)

    let score = (common.toUpperCase() === common) ? charCode + 26 - 64 : charCode - 96;
    totalScore += score;
}


console.log(totalScore)