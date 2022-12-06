import { isItClearArray, readFl } from "../utils/util_functions";

function examineLine(line: string, howManyChar: number): number {
  let counter = howManyChar;
  let examInterval: string[] = Array.from(line.slice(0, howManyChar));
  Array.from(line).splice(howManyChar).forEach((x) => {
    if (isItClearArray(examInterval)) {
      return counter
    } else {
      counter++;
      examInterval = updateArray(examInterval, howManyChar, x);
    }
  })
  return counter;
}

function updateArray(arr: string[], n: number, newElement: string): string[] {
  for (let i = 0; i <= n - 2; i++)
    arr[i] = arr[i + 1];

  arr[n - 1] = newElement;

  return arr;
}


function part1() {
  const lines = readFl('input.txt', '\n');
  console.log(examineLine(lines[0], 4));
}

function part2() {
  const lines = readFl('input.txt', '\n');
  console.log(examineLine(lines[0], 14));
}

part2()