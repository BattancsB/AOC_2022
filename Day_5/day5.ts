import { readFl } from "../utils/util_functions";


function readStacks(stacks: string): string[][] {
    const singleStackString = stacks.split('\r');
    let stackArray = singleStackString.slice(0, -1).map((x, i) => {
        const elements = x.split(' ');
        const tempArrays = elements.slice(1).map(x => {
            return x;
        }
        )

        return tempArrays;
    });
    return stackArray;
}

function readIntructions(stacks: string[][], instruction: string) {
    const instructionElements = instruction.split(' ')
    for (let i = 0; i < Number(instructionElements[1]); i++) {
        let tempString: string | undefined;
        if ((tempString = stacks[Number(instructionElements[3])-1].pop()) !== undefined) {
            stacks[Number(instructionElements[5])-1].push(tempString)
        }
    }
}

function readIntructionsADV(stacks: string[][], instruction: string) {
    const instructionElements = instruction.split(' ')
    let temp:string[] = [];
    for (let i = 0; i < Number(instructionElements[1]); i++) {
        let tempString: string | undefined;
        if ((tempString = stacks[Number(instructionElements[3])-1].pop()) !== undefined) {
            temp.push(tempString)
        }
    }
    temp.reverse().forEach(x => stacks[Number(instructionElements[5])-1].push(x))   
}


function part1() {
    const parts = readFl('input.txt', '+-+\r\n');
    let stacks: string[][] = readStacks(parts[0])
    console.log(parts[1]);
    
    parts[1].split('\r\n').forEach(x =>
        readIntructions(stacks, x)
    )

    const final = stacks.map(x =>{
        if(x.length > 0){ return x.pop()}
    }
    )
    console.log(stacks);
    console.log('final' + final);
}

function part2() {
    const parts = readFl('input.txt', '+-+\r\n');
    let stacks: string[][] = readStacks(parts[0])
    console.log(parts[1]);
    
    parts[1].split('\r\n').forEach(x =>
        readIntructionsADV(stacks, x)
    )

    const final = stacks.map(x =>{
        if(x.length > 0){ return x.pop()}
    }
    )
    console.log(stacks);
    console.log('final' + final);
}

part2()