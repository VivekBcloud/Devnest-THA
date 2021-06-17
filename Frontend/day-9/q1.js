obj1 = {
  name: "First",
  getName: function (...arr) {
    console.log(this.name);
    let sum = arr.reduce((acc, val) => acc + val, 0);
    console.log(sum);
  },
};

obj2 = {
  name: "Secomd",
};

obj1.getName.call(obj2, 1, 2); // call

obj1.getName.apply(obj1, [1, 2, 4, 5, 8, 4, 10, 15]); // apply

const getName2 = obj1.getName.bind(obj2, 3, 4, 6, 7); // bind

console.log(getName2);
getName2();
