import { readFl } from "../utils/util_functions";

enum Direction {
  LEFT,
  RIGHT,
  UP,
  DOWN
}

class Position {
  x: number;
  y: number;

  constructor(xcord: number, ycord: number) {
    this.x = xcord;
    this.y = ycord;
  }

  correctdistance(other: Position): boolean {
    // if (((other.x === this.x - 1) && (other.y === this.y || other.y === this.y - 1 || other.y === this.y + 1)) ||
    //   ((other.x === this.x + 1) && (other.y === this.y || other.y === this.y - 1 || other.y === this.y + 1)) ||
    //   ((other.x === this.x) && (other.y === this.y || other.y === this.y - 1 || other.y === this.y + 1)))
    if(Math.abs(this.x - other.x) >= 2|| (Math.abs(this.y - other.y)  >= 2)) {
      return true;
    }
    return false;
  }

}

function processLines(lines: string[]): Set<Position> {
  let posSet: Set<Position> = new Set<Position>;
  let headPosition: Position = new Position(4, 0);
  let tailPosition: Position = new Position(4, 0);
  let newPos;

  lines.forEach(x => {
    console.log('TAILPO ' + tailPosition.x + ' ' + tailPosition.y);
    const elements = x.split(' ');
    let positions: { headPos: Position, tailPos: Position } = { headPos: headPosition, tailPos: tailPosition };
    switch (elements[0]) {
      case 'L':

        positions = processCommand(Direction.LEFT, Number.parseInt(elements[1]), headPosition, tailPosition, posSet);
        headPosition = positions.headPos;
        tailPosition = positions.tailPos;

        break;
      case 'R':
        positions = processCommand(Direction.RIGHT, Number.parseInt(elements[1]), headPosition, tailPosition, posSet);
        headPosition = positions.headPos;
        tailPosition = positions.tailPos;

        break;
      case 'U':
        positions = processCommand(Direction.UP, Number.parseInt(elements[1]), headPosition, tailPosition, posSet);
        headPosition = positions.headPos;
        tailPosition = positions.tailPos;

        break;
      case 'D':
        positions = processCommand(Direction.DOWN, Number.parseInt(elements[1]), headPosition, tailPosition, posSet);
        headPosition = positions.headPos;
        tailPosition = positions.tailPos;

        break;
    }
  })
  return posSet;
}

function processCommand(direction: Direction, steps: number, headPosition: Position, tailPosition: Position, tailset: Set<Position>): { headPos: Position, tailPos: Position } {
  switch (direction) {
    case Direction.LEFT:
      for (let i = 0; i < steps; i++) {
        headPosition.y--;
        if (headPosition.correctdistance(tailPosition)) {
          tailPosition = moveTail(headPosition, Direction.LEFT)
          tailset.add(tailPosition);
          process.stdout.write('true')
        }
        console.log('head {' + headPosition.x + ' ' + headPosition.y + '} ');
        console.log('tail {' + tailPosition.x + ' ' + tailPosition.y + '} ');
      }
      break;
    case Direction.RIGHT:
      for (let i = 0; i < steps; i++) {
        headPosition.y++;
        if (headPosition.correctdistance(tailPosition)) {
          tailPosition = moveTail(headPosition, Direction.RIGHT)  
          tailset.add(tailPosition);  
          process.stdout.write('true')
        }
        console.log('head {' + headPosition.x + ' ' + headPosition.y + '} ');
        console.log('tail {' + tailPosition.x + ' ' + tailPosition.y + '} ');
      }
      break;
    case Direction.UP:
      for (let i = 0; i < steps; i++) {
        headPosition.x--;
        if (headPosition.correctdistance(tailPosition)) {
          tailPosition = moveTail(headPosition, Direction.UP)
          tailset.add(tailPosition);
          process.stdout.write('true')
        }
        console.log('head {' + headPosition.x + ' ' + headPosition.y + '} ');
        console.log('tail {' + tailPosition.x + ' ' + tailPosition.y + '} ');
      }
      break;
    case Direction.DOWN:
      for (let i = 0; i < steps; i++) {
        headPosition.x++;
        if (headPosition.correctdistance(tailPosition)) {
          tailPosition = moveTail(headPosition, Direction.DOWN)
          tailset.add(tailPosition);
          process.stdout.write('true')
        }
        console.log('head {' + headPosition.x + ' ' + headPosition.y + '} ');
        console.log('tail {' + tailPosition.x + ' ' + tailPosition.y + '} ');
      }
      break;
  }
  return { headPos: headPosition, tailPos: tailPosition }
}

function moveTail(headPosition: Position, direction: Direction): Position {
  let result: Position = new Position(0, 0);
  console.log(direction.toLocaleString());
  
  switch (direction) {
    case Direction.LEFT:
      result.x = headPosition.x;
      result.y = headPosition.y + 1;
      return result;      
    case Direction.RIGHT:
      result.x = headPosition.x;      
      result.y = headPosition.y - 1;
      return result;
    case Direction.UP:
      result.x = headPosition.x + 1;
      result.y = headPosition.y;
      return result;
    case Direction.DOWN:
      result.x = headPosition.x - 1;
      result.y = headPosition.y;
      return result;
  }
  return result;
}

function part1() {
  const lines = readFl('input.txt', '\n');
  let counter = 0;
  processLines(lines).forEach(x => {
    counter++;
  })
  console.log(counter);
}

part1()