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

//Додаткові задачки:
//Double Integer
//https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
const doubleInteger = (i) => 2 * i;

//Century From Year 
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
const century = (year) => Math.ceil(year / 100);

//Make negative
//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  return num === 0 ? 0 : -Math.abs(num);
}