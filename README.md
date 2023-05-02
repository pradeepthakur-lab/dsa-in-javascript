## Data structures and algorithms
# Data structures   (10)
Array
String
Linked List
Tree
Matrix/Grid
Queue
Stack
Hash
Heap
Graph

# Algorithms        (10)
Searching
Sorting
Pattern Searching
Recursion
Divide & Conquer
Bitwise
Greedy
Backtracking
Mathematical
Dynamic Programming


## Complexities
# Time Complexity: 
Time complexity is used to measure the amount of time required to execute the code.

# Space Complexity: 
Space complexity means the amount of space required to execute successfully the functionalities of the code. 

"Big-O Guide: (Time complexity)
Calculation not dependent on input size- O(1)
one loop- O(n)
two nested loop- O(n^2)
Input size reduce by half- O(logn)"

# O(1) - Constant Time:
Basic operations like accessing a variable, assigning a value to a variable, or performing basic arithmetic operations.
```js
let x = 5; console.log(x);
```

# O(log n) - Logarithmic Time:
Operations that divide the problem space in half each iteration, like binary search.
```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr, 6)); // Output: 5

```

# O(n) - Linear Time:
Operations that take a time proportional to the input size, like iterating over an array or performing a linear search.
```js
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

```
```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const arr = [1, 3, 5, 7, 9];
console.log(linearSearch(arr, 5)); // Output: 2

```

# O(n log n) - Linearithmic Time:
Operations that combine linear and logarithmic time complexity, like sorting algorithms such as merge sort and quicksort.
```js
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

const arr = [5, 4, 3, 2, 1];
console.log(mergeSort(arr)); // Output: [1, 2, 3, 4, 5]

```

# O(n^2) - Quadratic Time:  ( 0 n Sqr) 
Operations that scale proportionally to the square of the input size, like nested loops or some sorting algorithms such as bubble sort.
```js
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

```

# O(n^c) - Polynomial Time:
Operations that scale proportionally to a polynomial function of the input size, like matrix multiplication.
```js
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    console.log(arr[i], arr[j]);
  }
}

```

# O(2^n) - Exponential Time:
Operations that double in time complexity for every additional input element, like the recursive Fibonacci sequence calculation.
```js
function generateSubsets(set) {
  const result = [];
  function backtrack(subset, start) {
    result.push(subset);
    for (let i = start; i < set.length; i++) {
      backtrack(subset.concat(set[i]), i + 1);
    }
  }
  backtrack([], 0);
  return result;
}

const set = [1, 2, 3];
console.log(generateSubsets(set)); // Output: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]

```

# O(n!) - Factorial Time:
Operations that scale proportionally to the factorial of the input size, like generating all permutations of a set.
```js
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120

```