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
    "R": 1,
    "P": 2,
    "S": 3
}

const outcomePoints = {
    X: 0,
    Y: 3,
    Z: 6
}

const calculateScore = (opp, res) => {
    let score = outcomePoints[res];
    
    if (opp === "A") { 
        if (res === "X") {
            score += shapeValues.S;
        } else if (res === "Y") {
            score += shapeValues.R;
        } else if (res === "Z") {
            score += shapeValues.P;
        }
    } else if (opp === "B") {
        if (res === "X") {
            score += shapeValues.R;
        } else if (res === "Y") {
            score += shapeValues.P;
        } else if (res === "Z") {
            score += shapeValues.S;
        }
    } else if (opp === "C") {
        if (res === "X") {
            score += shapeValues.P;
        } else if (res === "Y") {
            score += shapeValues.S;
        } else if (res === "Z") {
            score += shapeValues.R;
        }
    }
    
    return score;
}

let score = 0;

for (const shapes of input) { const [opp, res] = shapes.split(" "); score += calculateScore(opp, res) }

console.log(score)