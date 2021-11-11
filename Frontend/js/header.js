function openCart() {
  document.querySelector(".cart-pop-up").classList.toggle("active");
}

function setDomProduct() {
  document.querySelector(".cart-pop-up-desc").classList.add("show");
  document.querySelector(".cart-pop-up").classList.toggle("active");
  document.querySelector(".empty-cart").classList.add("close-empyt");
}

function setDomQytCart(id) {
  let qytProducts = document.querySelector(".active-products");
  qytProducts.classList.add("qty-to-cart");
  qytProducts.textContent = id;
}

function destroy() {
  document.querySelector(".cart-pop-up-desc").classList.remove("show");
  let qytProducts = document.querySelector(".active-products");
  qytProducts.classList.remove("qty-to-cart");
  document.querySelector(".empty-cart").classList.remove("close-empyt");
}
