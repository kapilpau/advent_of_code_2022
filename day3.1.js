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

input.forEach(r => {
    const [c1, c2] = split(r)
    const common = c1.split("").filter(x => c2.includes(x))[0]
    const charCode = common.charCodeAt(0)
    let score = (common.toUpperCase() === common) ? charCode + 26 - 64 : charCode - 96;
    totalScore += score

})


console.log(totalScore)


function split(input) {
    let mid = input.length/2

    return [input.substring(0, mid), input.substring(mid)]
}