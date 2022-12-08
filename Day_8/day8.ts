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
  let counter = 2 * (rowCount) + 2 * (columnCount - 2);

  for (let i = 1; i < rowCount - 1; i++) {
    for (let j = 1; j < columnCount - 1; j++) {
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
        right = array[i].slice(j + 1, columnCount)
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

function processArray2(array: number[][]): number[] {
  let result: number[] = [];
  const rowCount = array.length;
  const columnCount = array[0].length;
  let counter = 2 * (rowCount) + 2 * (columnCount - 2);

  for (let i = 1; i < rowCount - 1; i++) {
    for (let j = 1; j < columnCount - 1; j++) {
      let flag1: boolean = false;
      let flag2: boolean = false;
      let flag3: boolean = false;
      let flag4: boolean = false;
      let left: number[] = [];
      let right: number[] = [];
      let top: number[] = [];
      let down: number[] = [];

      let counter1: number = 0;
      let counter2: number = 0;
      let counter3: number = 0;
      let counter4: number = 0;

      array[i].slice(0, j).reverse().forEach(x => {
        if (!flag1)
          counter1++;

        if (x >= array[i][j]) {
          flag1 = true;
        }
      })
      array[i].slice(j + 1, columnCount).forEach(x => {
        if (!flag2) {
          counter2++;
          if (x >= array[i][j]) {
            flag2 = true;
          }
        }
      })

      for (let h1 = i - 1; h1 >= 0; h1--) {
        if (!flag3) {
          counter3++;
        }
        if (array[h1][j] >= array[i][j]) {
          flag3 = true
        }
      }

      for (let h2 = i + 1; h2 < rowCount; h2++) {
        if (!flag4) {
          counter4++;
        }
        if (array[h2][j] >= array[i][j]) {
          flag4 = true
        }
      }
      result.push(counter1 * counter2 * counter3 * counter4);
      console.log('elem: ' + array[i][j] + ' bal: ' + counter1 + ' jobb: ' + counter2 + ' top: ' + counter3 + ' down: ' + counter4)
    }
  }
  return result;
}




function part1() {
  const lines = readFl('input.txt', '\n')

  processArray(read2DArray(lines))

}

function part2() {
  const lines = readFl('input.txt', '\n')

  const res = processArray2(read2DArray(lines));
  res.sort((n1, n2) => n1 - n2)
  res.reverse();
  console.log('pisa' +
    res[0]);
}

part2()

