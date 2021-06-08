let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");
let res = document.querySelector("#res");

let calc = document.querySelector(".btn-group");

function show_result(ans) {
  res.innerText = `Calculation gives result: ${ans}`;
}

const calculate = (e) => {
  let a = parseInt(inp1.value);
  let b = parseInt(inp2.value);
  console.log(e.target.id);
  switch (e.target.id) {
    case "add":
      show_result(a + b);
      break;
    case "sub":
      show_result(a - b);
      break;
    case "mul":
      show_result(a * b);
      break;
    case "divi":
      show_result(a / b);
      break;
    default:
      show_result("Wrong Operation");
      break;
  }
};

calc.addEventListener("click", calculate);
