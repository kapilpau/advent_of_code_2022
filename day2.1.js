const fs = require('fs');

let input;

try {
    input = fs.readFileSync("./inputs/input2.txt", "utf8").split("\n");
} catch (e) {
    console.error("Error reading in file")
    console.error(e);
    process.exit(1);
}

const shapeValues = {
    "X": 1,
    "Y": 2,
    "Z": 3
}

const [WIN, DRAW, LOSE] = [6, 3, 0];

const calculateScore = (opp, you) => {
    let score = shapeValues[you];
    
    if (opp === "A") {
        if (you === "X") {
            score += DRAW;
        } else if (you === "Y") {
            score += WIN;
        } else if (you === "Z") {
            score += LOSE
        }
    } else if (opp === "B") {
        if (you === "X") {
            score += LOSE;
        } else if (you === "Y") {
            score += DRAW;
        } else if (you === "Z") {
            score += WIN
        }
    } else if (opp === "C") {
        if (you === "X") {
            score += WIN;
        } else if (you === "Y") {
            score += LOSE;
        } else if (you === "Z") {
            score += DRAW
        }
    }
    
    return score;
}

let score = 0;

for (const shapes of input) { const [opp, you] = shapes.split(" "); score += calculateScore(opp, you) }

console.log(score)