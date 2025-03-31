import cardsData from "./cardArr";
import { openModalFunc } from "./main";

import "swiper/css";
import "swiper/css/pagination";
import "./../styles/swiper.css";

import Swiper from "swiper";
import { Pagination } from "swiper/modules";

//const counties = [...new Set(cardsData.map((card) => card.category))];
//const noun = [...new Set(cardsData.map((card) => card.noun))];

const swipers = new Map();
document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.getElementById("cards-container");
  const filterButtons = document.querySelectorAll(".filter-btn");

  //добавление активности кнопки "все"

  const urlParams = new URLSearchParams(window.location.search);
  const currentUtmSource = urlParams.get("utm_campaign_name");

  renderCards(cardsData);
  const activeBtn = document.getElementById("filter-controls");

  filterButtons.forEach((button) => {
    if (currentUtmSource) {
      const buttonCampaign = button.getAttribute("data-campaign_name");

      if (buttonCampaign === currentUtmSource) {
        button.classList.add("active");
        const filterValue = button.dataset.filter;
        const output = document.getElementById("cat");
        /*
        for (let i = 0; i < counties.length; i++) {
          if (filterValue === counties[i]) {
            output.textContent = noun[i];
            break;
          } else if (filterValue === "Все") {
            output.textContent = "за рубежом";
          }
        }*/
        filterCards(filterValue);
      }
    } else {
      activeBtn.firstElementChild.classList.add("active");
    }
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const filterValue = button.dataset.filter;
      const output = document.getElementById("cat");
      /*
      for (let i = 0; i < counties.length; i++) {
        if (filterValue === counties[i]) {
          output.textContent = noun[i];
          break;
        } else if (filterValue === "Все") {
          output.textContent = "за рубежом";
        }
      }*/
      filterCards(filterValue);
    });
  });

  // Функция фильтрации карточек
  function filterCards(filter) {
    if (filter === "все") {
      renderCards(cardsData);
    } else {
      const matchedCards = cardsData.filter((card) => card.category === filter);
      const otherCards = cardsData.filter((card) => card.category !== filter);

      // Объединение массива, добавляя разделитель
      const cardsToRender = [...matchedCards];
      if (otherCards.length > 0) {
        cardsToRender.push({ isDivider: true });
        cardsToRender.push(...otherCards);
      }

      renderCards(cardsToRender);
    }
  }

  function renderCards(cards) {
    swipers.forEach((swiper) => swiper.destroy());
    swipers.clear();
    cardsContainer.innerHTML = "";

    let isOtherSection = false;

    cards.forEach((card, index) => {
      if (card.isDivider) {
        // Разделитель "Другие"
        const divider = document.createElement("div");
        divider.className = "other-divider";
        divider.textContent = "Другие страны";
        cardsContainer.appendChild(divider);
        isOtherSection = true;
      } else {
        const cardElement = document.createElement("div");
        cardElement.className = `card ${isOtherSection ? "other-card" : ""}`;

        cardElement.dataset.category = card.category;
        cardElement.classList.add("card");
        cardsContainer.dataset.category = card.category;
        const div1 = document.createElement("div");
        div1.classList.add("div1");
        cardElement.appendChild(div1);

        const titleElement = document.createElement("h3");
        titleElement.textContent = card.title;
        div1.appendChild(titleElement);

        const swiperContainer = document.createElement("div");
        swiperContainer.classList.add("swiper");
        swiperContainer.classList.add("realState");
        div1.appendChild(swiperContainer);

        const swiperWrapper = document.createElement("div");
        swiperWrapper.classList.add("swiper-wrapper");
        swiperContainer.appendChild(swiperWrapper);

        const pagination = document.createElement("div");
        pagination.classList.add("realStatePagination");
        swiperContainer.appendChild(pagination);

        const swiperPagination = document.createElement("div");
        swiperPagination.classList.add("swiper-pagination");
        pagination.appendChild(swiperPagination);

        const div2 = document.createElement("div");
        div2.classList.add("div2");
        div2.classList.add("font-p");
        cardElement.appendChild(div2);

        const p = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const p4 = document.createElement("p");
        const p5 = document.createElement("p");
        const p6 = document.createElement("p");
        const p7 = document.createElement("p");
        const p8 = document.createElement("p");
        const p9 = document.createElement("p");
        const p10 = document.createElement("p");
        const p11 = document.createElement("p");

        p.innerHTML += `Класс недвижимости: <span>${card.class}</span>`;
        p2.innerHTML += `Локация: <span>${card.location}</span>`;
        p3.innerHTML += `Площадь: <span>от ${card.area}</span>`;
        p4.innerHTML += `Цена: <span>от ${card.price}</span>`;
        p5.innerHTML += `О проекте: <span>${card.about}</span>`;
        p6.innerHTML += `Планировки: <span>${card.plan}</span>`;
        p7.innerHTML += `Срок сдачи: <span>${card.deadline}</span>`;
        p8.innerHTML += `До моря: <span>${card.sea}</span>`;
        p9.innerHTML += `Застройщик: <span>${card.developer}</span>`;
        p10.innerHTML += `Проектная декларация: <span><a target="_blank" href="${card.declaration}">наш.дом.рф</a></span>`;
        p11.innerHTML += `Виды: <span>${card.view}</span>`;

        if (card.class) {
          div2.appendChild(p);
        }

        if (card.location) {
          div2.appendChild(p2);
        }

        if (card.price) {
          div2.appendChild(p4);
        }

        if (card.about) {
          div2.appendChild(p5);
        }

        if (card.area) {
          div2.appendChild(p3);
        }

        if (card.plan) {
          div2.appendChild(p6);
        }

        if (card.deadline) {
          div2.appendChild(p7);
        }

        if (card.sea) {
          div2.appendChild(p8);
        }

        if (card.developer) {
          div2.appendChild(p9);
        }

        if (card.declaration) {
          div2.appendChild(p10);
        }

        if (card.view) {
          div2.appendChild(p11);
        }

        const div3 = document.createElement("div");
        const div3min = document.createElement("div");
        const triggermin = document.createElement("div");
        const textmin = document.createElement("div");
        div3.classList.add("div3");
        div3min.classList.add("div3min");
        triggermin.classList.add("trigger");
        textmin.classList.add("text");
        textmin.textContent =
          "Оставьте заявку и получите презентацию проекта, планировки и цены";
        triggermin.appendChild(textmin);
        div3.appendChild(div3min);
        div3min.appendChild(triggermin);
        const iconmin = document.createElement("div");
        iconmin.classList.add("icon");
        iconmin.innerHTML += `<svg
      style="transform: rotateZ(90deg)"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      class="bi bi-arrow-90deg-right"
      viewBox="0 0 16 16">
      <path
        fill-rule="evenodd"
        d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708z"></path></svg>`;
        triggermin.appendChild(iconmin);
        div3.id = card.id;
        const buttonmin = document.createElement("button");
        buttonmin.innerHTML = `<div class="icon-pdf">Получить презентацию<img src="./images/pdf.png" /></div>`;

        buttonmin.addEventListener("click", () => {
          openModalFunc(
            `${card.btntitle}`,
            "Получить презентацию",
            `${card.btnsub}`,
            "present"
          );
        });

        buttonmin.classList.add("blue-btn");
        buttonmin.classList.add("cosulationOpenModal");
        buttonmin.setAttribute("data-title", `${card.btntitle}`);
        buttonmin.setAttribute("data-btn", "Получить презентацию");
        buttonmin.setAttribute("data-type", "present");
        buttonmin.setAttribute("data-sub", `${card.btnsub}`);
        div3min.appendChild(buttonmin);
        const divp = document.createElement("div");
        div3.appendChild(divp);
        divp.classList.add("font-p");
        divp.textContent = card.description;
        cardElement.appendChild(div3);

        const div4 = document.createElement("div");
        div4.classList.add("div4");
        cardElement.appendChild(div4);

        const cardBottom = document.createElement("div");
        cardBottom.classList.add("card__bottom");
        cardBottom.classList.add("font-p");
        div4.appendChild(cardBottom);

        const divdiv4 = document.createElement("div");
        divdiv4.innerHTML += `Варианты оплаты: <br /><span>${card.pay}</span>`;
        cardBottom.appendChild(divdiv4);

        const div1div4 = document.createElement("div");
        div1div4.innerHTML += `Выгода от перепродажи: <br /><span>от ${card.benefit}</span>`;
        cardBottom.appendChild(div1div4);

        const div2div4 = document.createElement("div");
        div2div4.innerHTML += `Доходность от аренды в год: <br /><span>от ${card.income}</span>`;
        cardBottom.appendChild(div2div4);

        const trigger = document.createElement("div");
        trigger.classList.add("trigger");
        trigger.classList.add("divmin");
        div4.appendChild(trigger);

        const text = document.createElement("div");
        text.classList.add("text");
        text.textContent =
          "Оставьте заявку и получите презентацию проекта, планировки и цены";
        trigger.appendChild(text);

        const icon = document.createElement("div");
        icon.classList.add("icon");
        icon.innerHTML += `<svg
      style="transform: rotateZ(90deg)"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      class="bi bi-arrow-90deg-right"
      viewBox="0 0 16 16">
      <path
        fill-rule="evenodd"
        d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708z"></path></svg>`;
        trigger.appendChild(icon);

        const button = document.createElement("button");
        button.classList.add("blue-btn");
        button.classList.add("divmin");
        button.classList.add("cosulationOpenModal");
        button.setAttribute("data-title", `${card.btntitle}`);
        button.setAttribute("data-btn", "Получить презентацию");
        button.setAttribute("data-type", "present");
        button.setAttribute("data-sub", `${card.btnsub}`);
        div4.appendChild(button);

        button.innerHTML = `<div class="icon-pdf">Получить презентацию<img src="./images/pdf.png" /></div>`;
        card.images.forEach((imageSrc) => {
          const slide = document.createElement("div");
          slide.classList.add("swiper-slide");
          const imageElement = document.createElement("img");
          imageElement.src = imageSrc;
          imageElement.loading = "lazy";
          imageElement.alt = card.title;

          slide.appendChild(imageElement);
          swiperWrapper.appendChild(slide);
        });
        cardsContainer.appendChild(cardElement);

        button.addEventListener("click", () => {
          openModalFunc(
            `${card.btntitle}`,
            "Получить презентацию",
            `${card.btnsub}`,
            "present"
          );
        });

        const swiper = new Swiper(swiperContainer, {
          slidesPerView: 1,
          modules: [Pagination],
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });

        swipers.set(index, swiper);
      }
    });
  }
});
const filter = [...new Set(cardsData.map((card) => card.category))];
filter.unshift("все");

const valuesUTM = ["", "tailand", "turciya", "gruziya", "oae", "indoneziya"];
const productsHTML = filter
  .map(
    (product, index) =>
      `<button class="filter-btn blue-btn" data-campaign_name="${valuesUTM[index]}" data-filter="${product}">${product}</button>`
  )
  .join("");

document.getElementById("filter-controls").innerHTML = productsHTML;
