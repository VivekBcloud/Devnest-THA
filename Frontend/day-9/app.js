const colorGrid = document.querySelector(".color-grid");

// console.log(colorGrid);
function fillTheBox() {
  let div = document.createElement("div");
  div.style.height = "5vh";
  div.style.width = "auto";
  div.style.backgroundColor = "#FE5F55 ";
  div.style.border = "1px solid #D33E43";
  div.classList.add("pixi");
  return div;
}

let cnt = 36;
while (cnt) {
  colorGrid.appendChild(fillTheBox());
  cnt--;
}
colorGrid.addEventListener("click", (e) => {
  console.log(e);
  e.target.classList.toggle("changeColor");
});
