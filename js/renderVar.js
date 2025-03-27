import { year, tel, tel2 } from "./variables.js";
//год
let yearEl = document.getElementById("year");
yearEl.innerHTML = year;

//телефон
const markup = `<a href="${tel2}">${tel}</a>`;
const containers = document.querySelectorAll(".teladd");

containers.forEach((container) => {
  container.insertAdjacentHTML("beforeend", markup);
});
