import { buildHeader } from "./component/header.js";
import { buildFooter } from "./component/footer.js";
import { createProducts } from "./component/products.js";
const heroButton = document.querySelector(".homepage-hero .primary-button");

buildHeader();
buildFooter();
createProducts();

heroButton?.addEventListener("click", () => {
  window.location.href = "/donate.html";
});
