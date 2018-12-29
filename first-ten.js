// 1. If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function gatherArray() {
  let array = [];
  for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      array.push(i);
    }
  }
  return array;
}

function sumArray(array) {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum;
}

function sumMultiples() {
  let multipleArray = this.gatherArray();
  let sum = sumArray(multipleArray);
  return sum;
}

sumMultiples();
