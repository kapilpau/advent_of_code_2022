const fs = require('fs');

let input;

try {
    input = fs.readFileSync("./inputs/input5.txt", "utf8").split("\n");
} catch (e) {
    console.error("Error reading in file")
    console.error(e);
    process.exit(1);
}

let stacks = {};

let line_pointer = 0;
while (!input[line_pointer].startsWith(" 1 ")) {
    const line = input[line_pointer];
    
    for (let i = 0; i<line.length; i++) {
        const section = line.substring(4*i, (4*i + 3)).trim();
        if (section !== "") {
            if (!stacks.hasOwnProperty(i+1)) stacks[i+1] = [];

            const crate = section.charAt(1);
            stacks[i+1] = [crate, ...stacks[i+1]]
        }
    }
    line_pointer++;
}
line_pointer += 2;

for (true; line_pointer<input.length; line_pointer++) {
    const line = input[line_pointer];
    const [, count, , start, , end] = line.split(" ");
    let tmpArray = [];
    for (let i = 0; i<parseInt(count); i++) {
        tmpArray.push(stacks[start].pop())
    }
    for (let i = 0; i<parseInt(count); i++) {
        stacks[end].push(tmpArray.pop())
    }
}

console.log(Object.keys(stacks).map(i => stacks[i][stacks[i].length-1]).join(""))