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
  div.style.border = "1px solid #D33E43";
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
colorGrid.addEventListener("click", (e) => {
  //   console.log(e);
  if (e.target.classList.contains("changeColor")) {
    e.target.classList.remove("changeColor");
    bookedSeats--;
    remSeats++;
  } else {
    e.target.classList.add("changeColor");
    bookedSeats++;
    remSeats--;
  }
  showChanges();
});
