//import { cards } from "./cardArr";

export const cards = [
  {
    title: "Жилой комплекс Riviera Santa Monica",
    class: "Премиум",
    location: "Таиланд, Паттайя, Джомтьен",
    area: "29 - 325 м²",
    price: "62 000 $",
    about: "34 этажа, 446 квартиры",
    plan: "1, 2, 3 - комнатные, пентхаусы",
    deadline: "2025-2028",
    sea: "1 км",
    developer: "The Riviera Group Thailand",
    description:
      "Комплекс расположен в престижном районе с развитой и близостью к пляжу, а из окон открываются виды на море. Удобное расположение: всего в нескольких минутах езды до пляжа, ключевых объектов инфраструктуры и рядом с основными дорожными развязками. Комплекс идеально подходит как для комфортного отдыха, так и для инвестиций - сдачи в аренду или перепрода",
    id: "block1",
    pay: "рассрочка",
    benefit: "24%",
    income: "5 400 $",
    btntitle: "Куда вам отправить презентацию The Riviera Santa Monica?",
    btnsub: "Презентация The Riviera Santa Monica",
    images: [
      "./../images/RivetaSantaMonica/Riviera Santa Monica1.webp",
      "./../images/RivetaSantaMonica/Riviera Santa Monica3.webp",
      "./../images/RivetaSantaMonica/Riviera Santa Monica4.webp",
      "./../images/RivetaSantaMonica/Riviera Santa Monica5.webp",
    ],
  },
  {
    title: "Гостиничный комплекс Нескучный сад",
    class: "Премиум",
    location: "Россия, Краснодарский край, г. Сочи",
    area: "22 м² - 136 м²",
    price: "26 200 000 ₽",
    about: "5 корпусов, 407 номеров",
    plan: "студии, 1, 2, 3, 4 - комнатные",
    deadline: "2025",
    sea: "500 м",
    developer: "ООО СЗ ЗЕЛЕНАЯ ГОРКА",
    description:
      "ГК премиум-класса создан специально для тех, кто ценит уединение и высокий уровень комфорта. Инфраструктура комплекса удивляет: зона  проживания и перспективный инвестиционный актив.",
    declaration: "https://наш.дом.рф/",
    id: "block2",
    pay: "ипотека, рассрочка",
    benefit: "55%",
    income: "180 000 ₽",
    btntitle:
      "Куда вам отправить презентацию гостиничного комплекса Нескучный сад?",
    btnsub: "Презентация гостиничного комплекса Нескучный сад",

    images: [
      "./../images/neskuchny garden/1.webp",
      "./../images/neskuchny garden/2.webp",
      "./../images/neskuchny garden/3.webp",
      "./../images/neskuchny garden/4.webp",
      "./../images/neskuchny garden/5.webp",
      "./../images/neskuchny garden/6.webp",
      "./../images/neskuchny garden/7.webp",
    ],
  },
];

function renderCards(cards) {
  const container = document.getElementById("cards-container"); // Контейнер для карточек

  container.innerHTML = "";

  cards.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

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

    p.innerHTML += `Класс недвижимости: <span>${card.class}</span>`;
    p2.innerHTML += `Локация: <span>${card.location}</span>`;
    p3.innerHTML += `Площадь: <span>от ${card.area}</span>`;
    p4.innerHTML += `Цена: <span>от ${card.price}</span>`;
    p5.innerHTML += `О проекте: <span>${card.about}</span>`;
    p6.innerHTML += `Планировки: <span>${card.plan}</span>`;
    p7.innerHTML += `Срок сдачи: <span>${card.deadline} год</span>`;
    p8.innerHTML += `До моря: <span>${card.sea}</span>`;
    p9.innerHTML += `Застройщик: <span>${card.developer}</span>`;
    p10.innerHTML += `Проектная декларация: <span><a target="_blank" href="${card.declaration}"
    >наш.дом.рф</a
  ></span>`;

    div2.appendChild(p);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div2.appendChild(p4);
    div2.appendChild(p5);
    div2.appendChild(p6);
    div2.appendChild(p7);
    div2.appendChild(p8);
    div2.appendChild(p9);
    if (card.declaration) {
      div2.appendChild(p10);
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
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708z"
    ></path>
  </svg>`;
    triggermin.appendChild(iconmin);
    div3.id = card.id;
    const buttonmin = document.createElement("button");
    buttonmin.innerHTML = `<div class="icon-pdf">Получить презентацию<img src="./images/pdf.png" /></div>`;
    buttonmin.classList.add("blue-btn");
    buttonmin.classList.add("cosulationOpenModal");
    buttonmin.setAttribute("data-title", `${card.btntitle}`);
    buttonmin.setAttribute("data-btn", "Получить презентацию");
    buttonmin.setAttribute("data-type", `${card.btnsub}`);
    buttonmin.setAttribute("data-type", "present");
    buttonmin.setAttribute("data-sub", "sd");
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
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708z"
    ></path>
  </svg>`;
    trigger.appendChild(icon);

    const button = document.createElement("button");
    button.classList.add("blue-btn");
    button.classList.add("divmin");
    button.classList.add("cosulationOpenModal");
    button.setAttribute("data-title", `${card.btntitle}`);
    button.setAttribute("data-btn", "Получить презентацию");
    button.setAttribute("data-type", `${card.btnsub}`);
    button.setAttribute("data-type", "present");
    button.setAttribute("data-sub", "sd");
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
    container.appendChild(cardElement);

    new Swiper(swiperContainer, {
      slidesPerView: 1,
      breakpoints: {},
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });
}
renderCards(cards);
