//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
    return string.split(" ");
}

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
    return dna.replace(/T/g, "U");
}

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    return toReturn === "value"
    ? Math.min(...arr)
    : arr.indexOf(Math.min(...arr));
}

//Поглиблені задачі :
//https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
function maps(x) {
    return x.map((n) => n * 2);
}

https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
    queue.reverse();
    const wolfIndex = queue.indexOf('wolf');
    if (wolfIndex === 0) {
      return 'Pls go away and stop eating my sheep';
    } else {
      return `Oi! Sheep number ${wolfIndex}! You are about to be eaten by a wolf!`;
    }
  }

https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] !== 1 && arr[i] - arr[i - 1] !== -1) {
        return arr[i];
      }
    }
    return null;
  }