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

function isVisible(x, y) {

    const height = trees[y][x];

    let visible = true;

    for (let iY = 0; iY < y; iY++) {
        if (height <= trees[iY][x]) {
            visible = false;
            break;
        }
    }

    if (visible) return true;

    visible = true;

    for (let iY = y + 1; iY < trees.length; iY++) {
        if (height <= trees[iY][x]) {
            visible = false;
            break;
        }
    }

    if (visible) return true;

    visible = true;

    for (let iX = 0; iX < x; iX++) {
        if (height <= trees[y][iX]) {
            visible = false;
            break;
        }
    }

    if (visible) return true;

    visible = true;

    for (let iX = x + 1; iX < trees[y].length; iX++) {
        if (height <= trees[y][iX]) {
            visible = false;
            break;
        }
    }

    if (visible) return true;

    return false

}

let visibleCount = 2 * ((trees.length - 1) + (trees[0].length - 1));

for (let y = 1; y < trees.length - 1; y++) {
    for (let x = 1; x < trees[y].length - 1; x++) {
        if (isVisible(x, y)) visibleCount++;
    }
}

console.log(visibleCount);