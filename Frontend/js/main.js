function selectedImgOne() {
  document.querySelector(".replace").src =
    "/Frontend/images/image-product-1.jpg";
  document.querySelector("#one").classList.add("overlay");
  document.querySelector("#two").classList.remove("overlay");
  document.querySelector("#three").classList.remove("overlay");
  document.querySelector("#four").classList.remove("overlay");
}

function selectedImgTwo() {
  document.querySelector(".replace").src =
    "/Frontend/images/image-product-2.jpg";
  document.querySelector("#two").classList.add("overlay");
  document.querySelector("#one").classList.remove("overlay");
  document.querySelector("#three").classList.remove("overlay");
  document.querySelector("#four").classList.remove("overlay");
}

function selectedImgThree() {
  document.querySelector(".replace").src =
    "/Frontend/images/image-product-3.jpg";
  document.querySelector("#three").classList.add("overlay");
  document.querySelector("#one").classList.remove("overlay");
  document.querySelector("#two").classList.remove("overlay");
  document.querySelector("#four").classList.remove("overlay");
}

function selectedImgFour() {
  document.querySelector(".replace").src =
    "/Frontend/images/image-product-4.jpg";
  document.querySelector("#four").classList.add("overlay");
  document.querySelector("#one").classList.remove("overlay");
  document.querySelector("#two").classList.remove("overlay");
  document.querySelector("#three").classList.remove("overlay");
}

function openCarousel() {
  document.querySelector(".carousel-container").classList.toggle("active");
}

function closeCarousel() {
  document.querySelector(".carousel-container").classList.remove("active");
}

function openCart() {
  document.querySelector(".cart-pop-up").classList.toggle("active");
}
