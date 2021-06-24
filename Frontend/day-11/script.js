questions = document.querySelector(".questions");
const ques = [
  {
    q:
      "Internet Explorer (IE) is the flagship browser of which technology company?",
    op1: "Google",
    op2: "Microsoft",
    op3: "Mozilla",
    op4: "Adobe",
    ans: "op2",
  },
];

function createOptions(q) {
  options = document.createElement("div");
  options.classList.add("options");
  let cnt = 4;
  while (cnt--) {
    option = document.createElement("div");
    option.classList.add("option");
    op = cnt + 1;
    console.log("op" + `${op}`);
    option.innerText = ques[q]["op" + `${op}`];
    options.append(option);
  }
  return options;
}
function makeQuestions(q) {
  question = document.createElement("div");
  question.classList.add("question");
  question.innerText = ques[q].q;
  questions.append(question);
  questions.append(createOptions(q));
}
makeQuestions(0);
