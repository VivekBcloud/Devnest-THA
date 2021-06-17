const colorGrid = document.querySelector(".color-grid");
const bookedSeatText = document.getElementById("bs");
const availSeatText = document.getElementById("avs");
var bookedSeats = 0;
var remSeats = 36;
// console.log(colorGrid);
function fillTheBox() {
  let div = document.createElement("div");
  div.style.height = "5vh";
  div.style.width = "auto";
  div.style.backgroundColor = "#FE5F55 ";
  div.style.border = "2px solid #D33E43";
  div.classList.add("pixi");
  return div;
}
const showChanges = () => {
  bookedSeatText.innerText = `Booked:${bookedSeats}`;
  availSeatText.innerText = `Available Seats:${remSeats}`;
};

let cnt = 36;
while (cnt) {
  colorGrid.appendChild(fillTheBox());
  cnt--;
}
var pressed = false;
colorGrid.addEventListener("mousedown", (e) => {
  //   console.log(e);
  pressed = true;
  if (e.target.classList.contains("changeColor")) {
    e.target.classList.remove("changeColor");
    bookedSeats--;
    remSeats++;
  } else {
    e.target.classList.add("changeColor");
    bookedSeats++;
    remSeats--;
  }
  colorGrid.addEventListener("mouseup", (ev) => {
    pressed = false;
  });
  showChanges();
  colorGrid.addEventListener("mouseover", (m) => {
    if (pressed) {
      m.target.classList.toggle("changeColor");
      if (m.target.classList.contains("changeColor")) {
        bookedSeats++;
        remSeats--;
      } else {
        bookedSeats--;
        remSeats++;
      }
      showChanges();
    }
  });
});
