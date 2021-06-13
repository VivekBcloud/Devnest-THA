var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

const listPropertiesOf = (obj) => Object.keys(obj).join(",");

console.log(listPropertiesOf(student));
