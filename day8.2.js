const fs = require('fs');

let input;

try {
    input = fs.readFileSync("./inputs/input8.txt", "utf8").split("\n");
} catch (e) {
    console.error("Error reading in file")
    console.error(e);
    process.exit(1);
}

const trees = input.map(line => line.split("").map(tree => parseInt(tree)));

function getScenicScore(x, y) {

    const height = trees[y][x];
    let upCount = 0;
    let downCount = 0;
    let leftCount = 0;
    let rightCount = 0;

    for (let iY = y-1; iY >= 0; iY--) {
        upCount++;
        if (height <= trees[iY][x]) {
            break;
        }
    }

    for (let iY = y + 1; iY < trees.length; iY++) {
        downCount++;
        if (height <= trees[iY][x]) {
            break;
        }
    }

    for (let iX = x-1; iX >= 0; iX--) {
        leftCount++;
        if (height <= trees[y][iX]) {
            break;
        }
    }

    for (let iX = x + 1; iX < trees[y].length; iX++) {
        rightCount++;
        if (height <= trees[y][iX]) {
            break;
        }
    }

    return leftCount * rightCount * upCount * downCount;

}

let highestScore = 0;
let coords = []

for (let y = 0; y < trees.length; y++) {
    for (let x = 0; x < trees[y].length; x++) {
        const score = getScenicScore(x, y);
        if (score > highestScore) {
            highestScore = score;
            coords = [x, y]
        }
    }
}

console.log(highestScore);
console.log(coords.join(", "))