import { readFileSync, promises as fsPromises } from "fs";

export function arraySum(intArray: number[]): number {
  return intArray.reduce((partialSum, a) => partialSum + a, 0);
}

export function readFl(fileName:string, separator: string): string[] {
  const fs = require("fs");
  var raw = readFileSync(fileName, "utf-8");

  return raw.split(separator);
}

export function clearWord(word: string): string {
  let clearWord: string = '';
  Array.from(word).forEach((x, i) => {
    if (!clearWord.includes(x)) {
      clearWord += (x)
    }
  });
  return clearWord;
}

export function isItClearArray(charArray: string[]): boolean {
  let clearArray: string[] = [];
  let flag = true;
  charArray.forEach(x => {
    if (!clearArray.includes(x)) {
      clearArray.push(x);
    }else{     
      flag = false;
    }
  });
  return flag;
}

export function isItClear(word: string): boolean {
  let clearWord: string = '';
  Array.from(word).forEach(x => {
    if (!clearWord.includes(x)) {
      clearWord += (x);
    }else{
      return false;
    }
  });
  return true;
}

export function findIntersection(words: string[]): string {
  var filteredArray: string = words[0];
  words.slice(1).forEach((x, i) => {
    filteredArray = clearWord(filteredArray);
    filteredArray = Array.from(filteredArray).filter(value => words[i].includes(value)).join("").toString();
  });
  return filteredArray[0];
}