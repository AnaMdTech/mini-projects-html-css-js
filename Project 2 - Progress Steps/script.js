const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");

let currentSlide = 1;

btnNext.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide > circles.length) {
    currentSlide = circles.length;
  }
  update();
});

btnPrev.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 1) {
    currentSlide = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentSlide) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentSlide === 1) {
    btnPrev.disabled = true;
  } else if (currentSlide === circles.length) {
    btnNext.disabled = true;
  } else {
    btnPrev.disabled = false;
    btnNext.disabled = false;
  }
}
