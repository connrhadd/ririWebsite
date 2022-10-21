const portfolioItems = document.querySelectorAll(".portfolio-item-wrapper");

portfolioItems.forEach((portfolioItem) => {
  portfolioItem.addEventListener("mouseover", () => {
    portfolioItem.childNodes[1].classList.add("image-darken");
  });

  portfolioItem.addEventListener("mouseout", () => {
    portfolioItem.childNodes[1].classList.remove("image-darken");
  });
});

let btn = document.querySelector(".moon");
let sBtn = document.querySelector(".sun");
btn.addEventListener("click", function () {
  document.body.style.backgroundColor = "rgb(44, 39, 39)";
  text.style.color = "white";
  btn.style.backgroundColor = "black";
  btn.style.color = "whitesmoke";
  bBtn.style.background = "whitesmoke";
  bBtn.style.color = "black";
});

sBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "whitesmoke";
  text.style.color = "black";
  bBtn.style.backgroundColor = "whitesmoke";
  bBtn.style.color = "black";
  navLink.style.color = "whitesmoke";
});

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// first set the variables
// #f15025
const color = document.querySelector("#about-btn");

color.addEventListener("click", function () {
  //2nd set a variable before making the loop
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    //process in each iteration of the variable from the array
    hexColor += hex[getRandomNumber()]; //5th lastly is invoke the function
  }
  //3rd target the textContent and the body
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
//4th make a function for random numbers
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
