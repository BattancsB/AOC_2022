import { print2DArray, readFl } from "../utils/util_functions";

function read2DArray(lines: string[]) {
  const rowCount = lines.length;
  const columnCount = lines[0].length;

  let array: number[][] = new Array<Array<number>>;

  for (let i = 0; i <= rowCount+1; i++) {
    array[i] = []
    for (let j = 0; j <= columnCount+1; j++) {
      if (i == 0 || i == rowCount+1) {
        array[i][j] = -1;
      } else {
        if (j == 0 || j == columnCount+1) {
          array[i][j] = -1;
        } else {
          array[i][j] = Number(lines[i-1].charAt(j-1))
        }
      }
    }
  }

  let counter = 0;


  for (let i = 1; i <= rowCount; i++) {
    for (let j = 1; j <= columnCount; j++) {
      let flag1: boolean = false;
      let flag2: boolean = false;
      let flag3: boolean = false;
      let flag4: boolean = false;
      array[i].slice(0, j).forEach(x => {
        if(x > array[i][j]){
          flag1 = true;
        }
      })
      array[i].slice(j+1, columnCount+1).forEach(x => {
        if(x > array[i][j]){
          flag2 = true;
        }
      })
      for(let k = 0; k < i; k++){
        if(array[k][j] > array[i] [j]){
          if(i == 3 || j == 3){
            
          }
          flag3 = true
        }
      }

      for(let h = i + 1; h <= rowCount+1; h++){
        if(array[h][j] > array[i] [j]){
          flag4 = true
        }
      }

      if (
      !(flag1 && flag2 && flag3 && flag4)  
      ){
        console.log(array[i] [j])
        counter ++;
      }
    }
  }
print2DArray(array)
  console.log(counter);
}




function part1() {
  const lines = readFl('input_test.txt', '\r\n')
  console.log(lines);
  read2DArray(lines)
}

part1()

