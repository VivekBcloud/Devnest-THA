function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

let numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  9,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  9,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
];
function fillTheBox(a) {
  let cardContainer = document.createElement("div");
  let fs = document.createElement("div");
  let bs = document.createElement("div");
  bs.innerText = "" + a;
  cardContainer.classList.add("card");
  fs.classList.add("front-card");
  bs.classList.add("back-card");
  cardContainer.appendChild(fs);
  cardContainer.appendChild(bs);
  return cardContainer;
}

cardBox = document.querySelector(".cards");

shuffle(numbers);
let cnt = 0;
while (cnt < 36) {
  cardBox.appendChild(fillTheBox(numbers[cnt]));
  cnt++;
}
let clickCount = 0;
var first;
var second;
let score = 0;
const flipclick = document.querySelectorAll(".card");
flipclick.forEach((c) => {
  c.addEventListener("click", () => {
    c.classList.toggle("flip");
    clickCount++;
    console.log(clickCount);
    if (clickCount == 1) first = c;
    if (clickCount == 2) {
      second = c;
      console.log("c", c.innerText);
      console.log("first ", first.innerText);
      if (first.innerText == c.innerText) {
        first.style.display = "hidden !important";
      }
      clickCount = 0;
      setTimeout(() => {
        let f = first;
        let s = second;
        f.classList.toggle("flip");
        s.classList.toggle("flip");
      }, 2000);
    }
  });
});
