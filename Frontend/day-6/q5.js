var cnt = 0;
var ans = "";
function checkfreq(val, index, arr) {
  let res = arr.reduce((acc, currval) => {
    if (currval == val) {
      acc = acc + 1;
    }
    return acc;
  }, 0);
  if (cnt < res) {
    cnt = res;
    ans = val;
  }
}
var arr1 = [3, "a", "a", "a", 3, 3, "a", 3, "a", 2, 3, 9, 3];

arr1.forEach(checkfreq);

console.log(ans, `( ${cnt} times)`);
