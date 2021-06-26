var quote;
const quoteText = document.querySelector(".quotes");
const generatebtn = document.querySelector(".generate-btn");

const showquotes = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quote = data.content;
      quoteText.innerText = quote;
      console.log(quote);
    });
};
console.log(quote);

generatebtn.addEventListener("click", showquotes);
