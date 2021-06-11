function getFirstNElements(arr, n = 1) {
  if (n < 0) {
    return [];
  }
  return arr.slice(0, n);
}

a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(getFirstNElements(["a", "b", "c"]));
