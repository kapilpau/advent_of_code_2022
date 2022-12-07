const fs = require('fs');

let input;

try {
    input = fs.readFileSync("./inputs/input4.txt", "utf8").split("\n");
} catch (e) {
    console.error("Error reading in file")
    console.error(e);
    process.exit(1);
}

let count = 0;


input.forEach(pair => {
    const [elf1, elf2] = pair.split(",")
    const [elf1Start, elf1End] = elf1.split("-").map(x => parseInt(x))
    const [elf2Start, elf2End] = elf2.split("-").map(x => parseInt(x))

    if ((elf2End >= elf1Start && elf2End <= elf1End) || (elf2Start >= elf1Start && elf2Start <= elf1End) || (elf1End >= elf2Start && elf1End <= elf2End) || (elf1Start >= elf2Start && elf1Start <= elf2End))
        count++;
})


console.log(count)