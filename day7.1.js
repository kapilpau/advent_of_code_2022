const fs = require('fs');

let input;

try {
    input = fs.readFileSync("./inputs/input7.txt", "utf8").split("\n");
} catch (e) {
    console.error("Error reading in file")
    console.error(e);
    process.exit(1);
}

class Directory {
    constructor(name, parent) {
        this.name = name;
        this.parent = parent;
        this.contents = {};
    }

    getType() {
        return "dir";
    }

    getSize() {
        let size = 0;

        Object.keys(this.contents).forEach(name => size += this.contents[name].getSize())

        return size;
    }

    getName() {
        return this.name
    }

    getContents() {
        return this.contents;
    }

    getContentByName(name) {
        return this.contents[name];
    }

    addContent(obj) {
        this.contents[obj.getName()] = obj;
    }

    getParent() {
        return this.parent;
    }
}

class File {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }

    getType() {
        return "file";
    }

    getSize() {
        return this.size;
    }

    getName() {
        return this.name;
    }
}

const root = new Directory("/", null);

let cwd = root;

for (let i = 0; i<input.length; i++) {
    const line = input[i];
    if (line.startsWith("$")) {
        let cmd = line.substring(2);

        if (cmd === "ls") {
            while ((i < input.length - 1) && !input[i+1].startsWith("$")) {
                i++;
                const [val, name] = input[i].split(" ");
                if (val === "dir") cwd.addContent(new Directory(name, cwd))
                else cwd.addContent(new File(name, parseInt(val)))
            }
        } else if (cmd.startsWith("cd")) {
            const dest = cmd.split(" ")[1];

            if (dest === "..") {
                cwd = cwd.getParent();
            } else if (dest === "/") {
                cwd = root
            } else {
                cwd = cwd.getContentByName(dest);
            }
        }
    }

}


let total = 0;


function getTotalSize(dir) {
    let size = 0;

    const contents = dir.getContents();
    Object.keys(contents).forEach(name => {
        const obj = dir.getContentByName(name);
        size += obj.getSize();
        if (obj.getType() === "dir") getTotalSize(obj)
    })



    if (size <= 100000) total += size;
}


getTotalSize(root)

console.log(total)