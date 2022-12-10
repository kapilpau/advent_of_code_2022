const fs = require('fs');

let input;

try {
    input = fs.readFileSync("./inputs/input6.txt", "utf8").split("\n")[0];
} catch (e) {
    console.error("Error reading in file")
    console.error(e);
    process.exit(1);
}

let markers = "";
let markerPosition = -1;

const letters = input.split("");

for (let index = 0; index<letters.length; index++) {
    const letter = letters[index]
    if (markers === "") {
         markers = letter;
         markerPosition = index;
         continue;
    }

    const firstIndex = markers.indexOf(letter);
    if (firstIndex > -1) {
        if (firstIndex === markers.length-1) {
            markers = letter;
            markerPosition = index;
        } else {
            markers = markers.substring(firstIndex+1) + letter;
            markerPosition += firstIndex + 1;
        }
    } else {
        markers += letter;
    }

    if (markers.length === 14) {
        break;
    }
    
}

console.log(markerPosition+markers.length);