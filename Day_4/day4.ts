import { readFl } from "../utils/util_functions";


class Interval {

    start: number;
    end: number;

    constructor(start: number, end: number) {
        this.start = start;
        this.end = end;
    }
}

Interval.prototype.toString = function () {
    return 'The interval is [' + this.start + ', ' + this.end + ']';
}

// Function to check if any two intervals overlap source: https://www.geeksforgeeks.org/check-if-any-two-intervals-overlap-among-a-given-set-of-intervals/
function isIntersect(arr: Interval[], n: number): boolean {
    // Sort intervals in increasing order of start time
    arr.sort(function (i1, i2) {
        return i1.start - i2.start;
    });

    // In the sorted array, if start time of an interval
    // is less than end of previous interval, then there
    // is an overlap
    for (let i = 1; i < n; i++)
        if (arr[i - 1].end >= arr[i].start)
            return true;

    // If we reach here, then no overlap
    return false;
}

function createIntervals(lines: string[]): Interval[][] {
    let resultIntelvals: Interval[][] = new Array<Array<Interval>>;
    lines.forEach((line, i) => {
        const intervals = line.split(',');
        resultIntelvals.push(new Array<Interval>())
        intervals.forEach((interval) => {
            const intervalNumbers = interval.split('-')
            let tempInterval: Interval = new Interval(Number(intervalNumbers[0]), Number(intervalNumbers[1]));
            resultIntelvals[i].push(tempInterval);
        })
    })
    return resultIntelvals;
}

function fullyContains(first: Interval, second: Interval): boolean {
    if ((first.start <= second.start && first.end >= second.end) || (first.start >= second.start && first.end <= second.end)) return true;
    return false;
}

function part1() {
    const lines: string[] = readFl('input.txt', '\n');

    const intervals: Interval[][] = createIntervals(lines);

    const result: boolean[] = intervals.map((x, i) => {
        return fullyContains(x[0], x[1]);
    }
    )
    console.log(result.filter(value => value === true).length);
}

function part2() {
    const lines: string[] = readFl('input.txt', '\n');

    const intervals: Interval[][] = createIntervals(lines);

    const result: boolean[] = intervals.map((x, i) => {
        return isIntersect(x, 2);
    }
    )

    console.log(result.filter(value => value === true).length);
}


part2();
