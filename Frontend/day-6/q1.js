function checkforArray(val) {
  return Array.isArray(val);
}

a = "abc";
b = ["a", "b", "c"];

console.log(checkforArray(a));
console.log(checkforArray(b));
