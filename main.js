const FIRST = "first";
const firstbox = document.querySelector(".box:first-child");
const lastbox = document.querySelector(".box:last-child");
const befourButton = document.getElementById("befourButton");
const nextButton = document.getElementById("nextButton");

function nextSlide(event) {
  event.preventDefault();
  const currentSlide = document.querySelector(`.${FIRST}`);
  if (currentSlide) {
    currentSlide.classList.remove(FIRST);
    const nextBox = currentSlide.nextElementSibling;
    if (nextBox) {
      nextBox.classList.add(FIRST);
    } else {
      firstbox.classList.add(FIRST);
    }
  } else {
    firstbox.classList.add(FIRST);
  }
}

function befourSlide(event) {
  event.preventDefault();
  const currentSlide = document.querySelector(`.${FIRST}`);
  if (currentSlide) {
    currentSlide.classList.remove(FIRST);
    const befourBox = currentSlide.previousElementSibling;
    if (befourBox) {
      befourBox.classList.add(FIRST);
    } else {
      lastbox.classList.add(FIRST);
    }
  } else {
    firstbox.classList.add(FIRST);
  }
}

befourButton.addEventListener("click", befourSlide);
nextButton.addEventListener("click", nextSlide);
