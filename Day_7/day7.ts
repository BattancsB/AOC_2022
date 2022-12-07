import { arraySum, readFl } from "../utils/util_functions";

class Dir {
    key: string;
    parent: Dir | null;
    elements: File[];
    subDirectories: Dir[];
    size: number;

    constructor(key: string, parent: Dir | null) {
        this.key = key;
        this.parent = parent;
        this.elements = new Array<File>;
        this.subDirectories = [];
        this.size = 0;
    }

    updateSize(value: number): number {
        if (this.parent !== null) {
            this.parent.updateSize(value)
        }
        return this.size += value;
    }

    calcFileSize(): number {
        let sum = 0;
        if (this.elements.length > 0) {
            this.elements.forEach((x: File) => {

                sum += x.size;
            }
            )
        }
        return sum;
    }

    addSubDir(subDir: Dir) {
        if (!this.subDirectories.find((x: Dir) => x.key === subDir.key)) {
            this.subDirectories.push(subDir)
        }
    }

    addFile(file: File) {
        if (!this.elements.find((x: File) => x.key === file.key)) {
            this.elements.push(file);
            this.updateSize(file.size);
        }
    }

    searchSubDir(key: string): Dir {
        let temp = this.subDirectories.find(x => key === x.key)
        if (temp !== undefined) {
            return temp;
        }
        return this;
    }
}

class File {
    size: number;
    key: string;
    folder: Dir;

    constructor(size: number, name: string, folder: Dir) {
        this.size = size;
        this.key = name;
        this.folder = folder;
    }
}

class FLSystem {
    root: Dir;

    constructor(root: Dir) {
        this.root = root;
    }
}


function processCommands(commands: string[], rootDir: Dir): FLSystem {
    let pwd: Dir | null = rootDir;
    let fileSystem = new FLSystem(rootDir)
    commands.forEach((x) => {
        if (pwd !== null) {
            pwd = processLine(fileSystem, x, pwd)
        }
    })
    return fileSystem;
}

function processLine(fileSystem: FLSystem, line: string, pwd: Dir): Dir | null {
    const splittedLine = line.split(' ')
    if (splittedLine[0] === '$') {
        if (splittedLine[1] === 'cd') {
            if (splittedLine[2] === '..') {
                if (pwd !== null) {
                    return pwd.parent as Dir;
                }
                return null;
            } else {
                let temp: Dir = pwd.searchSubDir(splittedLine[2]);
                return temp;
            }
        } else {
            return pwd;
        }
    } else if (splittedLine[0] === 'dir') {
        let temp: Dir = new Dir(splittedLine[1], pwd)
        pwd.addSubDir(temp)
        return pwd;
    } else {
        pwd.addFile(new File(Number(splittedLine[0]), splittedLine[1], pwd));
        return pwd;
    }
    return null;
}



function part1() {
    const lines = readFl('input_test.txt', '\r\n');
    const fileSys = processCommands(lines, new Dir('root', null))
    let st: number[] = [];

    function smth(div: Dir, limit: number) {
        if (div !== undefined) {
            console.log((div.size < limit) ? div.size : 0);
            st.push((div.size < limit) ? div.size : 0)
            div.subDirectories.forEach(x => smth(x, limit))
        }
    }

    console.log(smth(fileSys.root, 100000))
    console.log(fileSys.root);

}

function part2() {
    const lines = readFl('input.txt', '\n');
    const fileSys = processCommands(lines, new Dir('root', null))
    const neededSpace = Math.abs(70000000 - fileSys.root.size - 30000000)

    console.log(neededSpace);

    let closeness: number = 70000000000;
    let result: Dir | undefined;

    function smth2(div: Dir) {
        if (div !== undefined) {
            if (div.size - neededSpace < closeness && div.size - neededSpace > 0) {
                closeness = div.size - neededSpace;
                result = div
            }
            div.subDirectories.forEach(x => smth2(x))
        }
    }

    smth2(fileSys.root);
    console.log(result?.size);
}


part1()