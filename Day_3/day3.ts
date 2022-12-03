import { clear } from "console";
import { readFileSync, promises as fsPromises } from "fs";

function alphabetPositionRev(text: string) {
  let result: number = 0;
  let codeUppercase: number;
  if (
    (codeUppercase = text.toUpperCase().charCodeAt(0)) === text.charCodeAt(0)
  ) {
    result += 26;
  }

  if (codeUppercase > 64 && codeUppercase < 91) result += codeUppercase - 64;

  return result;
}

function arraySum(intArray: number[]): number {
  return intArray.reduce((partialSum, a) => partialSum + a, 0);
}

function readFl(): string[] {
  const fs = require("fs");
  var raw = readFileSync("input.txt", "utf-8");

  return raw.split("\n");
}

function exploreWords(line: string): string[] {
  const input = splitWords(line);
  var clearWords: string[] = [];
  input.forEach((x) => {
    clearWords.push(clearWord(x));
  });
  return clearWords;
}

function clearWord(line: string): string {
  var instances: string = '';
  for (let j = 0; j < line.length; j++) {
    if (!instances.includes(line.charAt(j))) {
      instances += (line.charAt(j))
    }
  }
  return instances;
}

function splitWords(line: string): string[] {

  var middle = Math.floor(line.length / 2);

  var s1 = line.substring(0, middle);
  var s2 = line.substring(middle);

  return [s1, s2];
}

function findIntersection(clearedWords: string[]): string {
  var filteredArray: string = clearedWords[0];
  for (var i = 1; i < clearedWords.length; i++) {
    filteredArray = clearWord(filteredArray);
    //console.log(filteredArray + " test " + clearedWords[i]);
    filteredArray = Array.from(filteredArray).filter(value => clearedWords[i].includes(value)).join("").toString();
  }
  console.log('shit' + filteredArray[0]);
  return filteredArray[0];
}

function part1() {
  const lines = readFl();
  const thin = lines.map(x => {
    return alphabetPositionRev(findIntersection(exploreWords(x)));
  }
  )
  console.log(arraySum(thin));
}

function part2() {
  var lines = readFl();
  var activeLines: string[] = [];
  var sum = 0;

  while (lines.length >= 3) {
    activeLines = lines.splice(0, 3);
    console.log(findIntersection(activeLines));
    sum += alphabetPositionRev(findIntersection(activeLines));
  }
  console.log(sum);

}

part2();
