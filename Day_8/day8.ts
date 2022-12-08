import { print2DArray, readFl } from "../utils/util_functions";

function read2DArray(lines: string[]): number[][] {
  const rowCount = lines.length;
  const columnCount = lines[0].length;

  let array: number[][] = new Array<Array<number>>;

  for (let i = 0; i < rowCount; i++) {
    array[i] = []
    for (let j = 0; j < columnCount; j++) {
      //   if (i == 0 || i == rowCount+1) {
      //     array[i][j] = -1;
      //   } else {
      //     if (j == 0 || j == columnCount+1) {
      //       array[i][j] = -1;
      //     } else {
      array[i][j] = Number(lines[i].charAt(j))
      // }
      // }
    }
  }
  print2DArray(array)
  return array;
}

function processArray(array: number[][]): number {
  const rowCount = array.length;
  const columnCount = array[0].length;
  let counter = (rowCount-1) * (columnCount-1);

  for (let i = 1; i < rowCount-1; i++) {
    for (let j = 1; j < columnCount-1; j++) {
      let flag1: boolean = false;
      let flag2: boolean = false;
      let flag3: boolean = false;
      let flag4: boolean = false;
      let left: number[] = [];
      let right: number[] = [];
      let top: number[] = [];
      let down: number[] = [];

      array[i].slice(0, j).forEach(x => {
        left = array[i].slice(0, j);
        if (x >= array[i][j]) {
          flag1 = true;
        }
      })
      array[i].slice(j + 1, columnCount).forEach(x => {
        right = array[i].slice(j + 1, columnCount + 2)
        if (x >= array[i][j]) {
          flag2 = true;
        }
      })

      // for(let a = 0; a < i; a++){
      //   //left.push(array[i][k1])

      //   if(array[i][a] > array[i] [j]){
      //     flag1 = true
      //   }
      // }

      // for(let b = i+1; 2 <= columnCount + 1 ; b++){
      //   //right.push(array[i][k2])

      //   if(array[i][b] > array[i] [j]){
      //     flag2 = true
      //   }
      // }

      for (let h1 = 0; h1 < i; h1++) {
        top.push(array[h1][j])
        if (array[h1][j] >= array[i][j]) {
          flag3 = true
        }
      }

      for (let h2 = i + 1; h2 < rowCount; h2++) {
        down.push(array[h2][j])
        if (array[h2][j] >= array[i][j]) {
          flag4 = true
        }
      }

      if (
        !(flag1 && flag2 && flag3 && flag4)
      ) {
        console.log(String(array[i][j]) + ' ' + flag1 + ' ' + flag2 + ' ' + flag3 + ' ' + flag4)
        console.log('elem: ' + array[i][j] + ' bal: ' + left + ' jobb: ' + right + ' top: ' + top + ' down: ' + down)
        counter++;
      }
    }
  }
  console.log(counter);
  return counter;
  
  
}




function part1() {
  const lines = readFl('input.txt', '\n')
  
  processArray(read2DArray(lines))
  
}

part1()

