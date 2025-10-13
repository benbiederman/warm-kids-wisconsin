import { buildHeader } from "./component/header.js";
import { buildFooter } from "./component/footer.js";
const heroButton = document.querySelector(".homepage-hero .primary-button");
buildHeader();
buildFooter();
heroButton?.addEventListener("click", () => {
  window.location.href = "/donate.html";
});
