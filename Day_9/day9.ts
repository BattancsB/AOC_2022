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
    if ((other.x === this.x - 1) && (other.y === this.y || other.y === this.y - 1 || other.y === this.y + 1) ||
      (other.x === this.x + 1) && (other.y === this.y || other.y === this.y - 1 || other.y === this.y + 1) ||
      (other.x === this.x) && (other.y === this.y || other.y === this.y - 1 || other.y === this.y + 1)) {
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
    const elements = x.split(' ');
    let positions: { headPos: Position, tailPos: Position } = { headPos: headPosition, tailPos: tailPosition };
    switch (x[0]) {
      case 'L':
        positions = processCommand(Direction.LEFT, Number(x[1]), headPosition, tailPosition);
        headPosition = positions.headPos;
        tailPosition = positions.tailPos;

        newPos = tailPosition;
        posSet.add(tailPosition);

        break;
      case 'R':
        positions = processCommand(Direction.RIGHT, Number(x[1]), headPosition, tailPosition);
        headPosition = positions.headPos;
        tailPosition = positions.tailPos;

        newPos = tailPosition;
        posSet.add(tailPosition);

        break;
      case 'U':
        positions = processCommand(Direction.UP, Number(x[1]), headPosition, tailPosition);
        headPosition = positions.headPos;
        tailPosition = positions.tailPos;

        newPos = tailPosition;
        posSet.add(tailPosition);

        break;
      case 'D':
        positions = processCommand(Direction.DOWN, Number(x[1]), headPosition, tailPosition);
        headPosition = positions.headPos;
        tailPosition = positions.tailPos;

        newPos = tailPosition;
        posSet.add(tailPosition);

        break;
    }
  })
  return posSet;
}

function processCommand(direction: Direction, steps: number, headPosition: Position, tailPosition: Position): { headPos: Position, tailPos: Position } {
  switch (direction) {
    case Direction.LEFT:
      for (let i = 0; i <= steps; i++) {
        headPosition.y--;
      }
      if (headPosition.correctdistance(tailPosition))
        tailPosition = moveTail(headPosition, Direction.LEFT)
      break;
    case Direction.RIGHT:
      for (let i = 0; i <= steps; i++) {
        headPosition.y++;
      }
      if (headPosition.correctdistance(tailPosition))
        tailPosition = moveTail(headPosition, Direction.RIGHT)
      break;
    case Direction.UP:
      for (let i = 0; i <= steps; i++) {
        headPosition.x++;
      }
      if (headPosition.correctdistance(tailPosition))
        tailPosition = moveTail(headPosition, Direction.UP)
      break;
    case Direction.DOWN:
      for (let i = 0; i <= steps; i++) {
        headPosition.x--;
      }
      if (headPosition.correctdistance(tailPosition))
        tailPosition = moveTail(headPosition, Direction.DOWN)
      break;

  }
  return { headPos: headPosition, tailPos: tailPosition }
}

function moveTail(headPosition: Position, direction: Direction): Position {
  let result: Position = new Position(0, 0);
  switch (direction) {
    case Direction.LEFT:
      result.x = headPosition.x;
      result.y = headPosition.y + 1;
    case Direction.RIGHT:
      result.x = headPosition.x;
      result.y = headPosition.y - 1;
    case Direction.UP:
      result.x = headPosition.x - 1;
      result.y = headPosition.y;
    case Direction.DOWN:
      result.x = headPosition.x + 1;
      result.y = headPosition.y;
  }
  return result;
}

function part1() {
  const lines = readFl('input_test.txt', '\r\n');
  // let initialState: string[][] = [[]];
  // initialState[4][0] = 'H'
  // const initialHeadPosition: { x: number, y: number } = { x: 4, y: 0 }
  processLines(lines).forEach(x => {
    console.log(x);
  })
  //console.log(processLines(lines).values.length);
}

part1()