import { readFileSync, promises as fsPromises } from 'fs';

const fs = require('fs');

var raw = readFileSync('input.txt', 'utf-8');

var splittedForLines = raw.split('\n')

function calcScore(predLine: string): number {
  let score: number = 0;
  var stuff: string[] = predLine.split(' ');

  console.log(predLine);


  const firstValue: number = decideValue(stuff[0]);
  const secondValue: number = decideValue(stuff[1]);

  score += secondValue;



  if (firstValue == secondValue) {
    score += 3
  } else if ((stuff[0] + stuff[1]) == 'AY' || (stuff[0] + stuff[1]) == 'BZ' || (stuff[0] + stuff[1]) == 'CX') {
    score += 6
  }

  console.log('first: ' + stuff[0] + firstValue + ' second: ' + stuff[1] + secondValue);

  console.log(score);

  return score;
}

function arraySum(intArray: number[]): number {
  return intArray.reduce((partialSum, a) => partialSum + a, 0)
}

function decideValue(option: string): number {
  switch (option) {
    case 'X':
      return 1;
      break;
    case 'A':
      return 1;
      break;
    case 'Y':
      return 2;
      break;
    case 'B':
      return 2;
      break;
    case 'Z':
      return 3;
      break;
    case 'C':
      return 3;
      break;
    default:
      return 0;
  }
  return 0;
}

function smth(predLine: string): number {
  let score: number = 0;
  var stuff: string[] = predLine.split(' ');

  console.log(predLine);


  const firstValue: number = decideValue(stuff[0]);
  const secondValue: number = decideValue(stuff[1]);


  switch (stuff[1]) {
    case 'Y':
      score += decideValue(stuff[0]);
      score += 3;
      break;
    case 'X':
      switch (stuff[0]) {
        case 'A':
          score += decideValue('C')
          break;
        case 'B':
          score += decideValue('A')
          break;
        case 'C':
          score += decideValue('B')
          break;
      }
      break;

    case 'Z':
      switch (stuff[0]) {
        case 'A':
          score += decideValue('B')
          break;
        case 'B':
          score += decideValue('C')
          break;
        case 'C':
          score += decideValue('A')
          break;
      }
      score += 6;
      break;
  }

  console.log('first: ' + stuff[0] + firstValue + ' second: ' + stuff[1] + secondValue);

  console.log(score);

  return score;
}



function part1() {
  console.log(splittedForLines[0]);

  let scores = splittedForLines.map(x =>
    calcScore(x)
  );

  console.log(arraySum(scores));
  console.log(splittedForLines.length);
  console.log(arraySum(scores) / scores.length);
}

function part2() {
  let scores = splittedForLines.map(x =>
    smth(x)
  );
  console.log(arraySum(scores));
}

part2()
