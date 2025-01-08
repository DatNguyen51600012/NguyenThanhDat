// Formula Approach
// Time Complexity: O(1).
// Space Complexity: O(1).
function sum_formula(n) {
    return (n * (n + 1)) / 2;
}
  
// Divide and Conquer Approach
// Time Complexity: O(log n).
// Space Complexity: O(log n).
function sum_divide_and_conquer(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  const mid = Math.floor(n / 2);
  return sum_divide_and_conquer(mid) + sum_divide_and_conquer(n - mid) + mid * (n - mid);
}

// Binary Search Approach
// Time Complexity: O(log n).
// Space Complexity: O(1).
function sum_binary_search(n) {
  if (n <= 0) return 0;

  let left = 1,
    right = n;
  let sum = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const partialSum = (mid * (mid + 1)) / 2 - ((left - 1) * left) / 2;
    sum += partialSum;

    left = mid + 1;
  }

  return sum;
}

console.log(sum_formula(5));
console.log(sum_divide_and_conquer(5));
console.log(sum_binary_search(5));
  