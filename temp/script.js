const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);

let thumbnails = document.getElementsByClassName("thumbnail");

let activeImages = document.getElementsByClassName("active");

for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("mouseover", function () {
    console.log(activeImages);

    if (activeImages.length > 0) {
      activeImages[0].classList.remove("active");
    }

    this.classList.add("active");
    document.getElementById("featured").src = this.src;
  });
}

let buttonRight = document.getElementById("slideRight");
let buttonLeft = document.getElementById("slideLeft");

buttonLeft.addEventListener("click", function () {
  document.getElementById("slider").scrollLeft -= 180;
});

buttonRight.addEventListener("click", function () {
  document.getElementById("slider").scrollLeft += 180;
});
