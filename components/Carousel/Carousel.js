/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselEntry = document.querySelector(".carousel-container");
carouselEntry.appendChild(CarouselMaker());

function CarouselMaker(){
  const carousel = document.createElement("div"),
        leftButton = document.createElement("div"),
        firstImg = document.createElement("img"),
        secondImg = document.createElement("img"),
        thirdImg = document.createElement("img"),
        fourthImg = document.createElement("img"),
        rightButton = document.createElement("div");

  carousel.appendChild(leftButton);
  carousel.appendChild(firstImg);
  carousel.appendChild(secondImg);
  carousel.appendChild(thirdImg);
  carousel.appendChild(fourthImg);
  carousel.appendChild(rightButton);

  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  leftButton.textContent = "<";
  rightButton.textContent = ">";
  firstImg.src = "./assets/carousel/mountains.jpeg";
  secondImg.src = "./assets/carousel/computer.jpeg";
  thirdImg.src = "./assets/carousel/trees.jpeg";
  fourthImg.src = "./assets/carousel/turntable.jpeg";

  firstImg.style.display = "block";

  rightButton.addEventListener("click", () => {
    if (firstImg.style.display === "block") {
      firstImg.style.display = "none";
      secondImg.style.display = "block";
    } else if (secondImg.style.display === "block") {
      secondImg.style.display = "none";
      thirdImg.style.display = "block";
    } else if (thirdImg.style.display === "block") {
      thirdImg.style.display = "none";
      fourthImg.style.display = "block";
    } else {
      fourthImg.style.display = "none";
      firstImg.style.display = "block";
    };
  });

  leftButton.addEventListener("click", () => {
    if (fourthImg.style.display === "block") {
      fourthImg.style.display = "none";
      thirdImg.style.display = "block";
    } else if (thirdImg.style.display === "block") {
      thirdImg.style.display = "none";
      secondImg.style.display = "block";
    } else if (secondImg.style.display === "block") {
      secondImg.style.display = "none";
      firstImg.style.display = "block";
    } else {
      firstImg.style.display = "none";
      fourthImg.style.display = "block";
    };
  });

  return carousel;
};