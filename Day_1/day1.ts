import { readFileSync, promises as fsPromises } from 'fs';

const fs = require('fs');

var raw = readFileSync('input.txt', 'utf-8');

var splitted = raw.split('\n\n')




//var array[array] = splitted.split('\').map(Number)

function arraySum(intArray: number[]): number {
  return intArray.reduce((partialSum, a) => partialSum + a, 0)
}
function part1() {
  var max: number = 0;
  var temp: number = 0;

  splitted.forEach((stringArray: string, i: number) => {
    if ((temp = (arraySum((stringArray.split('\n').map(Number))))) > max)
      max = temp;
  });

  console.log(max);

}

function part2() {
  var sums: number[] = new Array<number>;
  console.log(splitted.length);
  
  splitted.forEach((stringArray: string, i: number) => {
    sums.push(arraySum((stringArray.split('\n').map(Number))));
  });

    sums.sort((n1,n2) => n1 - n2);
    sums.reverse()

    
  console.log(sums[0] + sums[1] + sums[2]);
  
}

part1()



//console.log(arrays[0]);
//console.log(arraySum(arrays[0]));