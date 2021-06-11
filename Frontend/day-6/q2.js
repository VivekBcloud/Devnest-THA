function cloneArray(arr) {
  return arr.slice(0);
}

a = [1, 2, 3];
b = cloneArray(a);
// modifying array-a
a[1] = 20;
console.log("Array a:", a);
console.log("Array b:", b);
