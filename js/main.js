const popup = document.querySelectorAll(".popup");
const closeAllModal = document.querySelectorAll(".closeAllModal");
const openCompilationModal = document.querySelectorAll(".cosulationOpenModal");
const popupConsultation = document.querySelector(".popup-consultation");

document.body.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    closeAllModals();
  }
});

function closeAllModals() {
  popup.forEach((el) => (el.style.display = "none"));
  document.body.style.overflow = "";
}

closeAllModal.forEach((el) =>
  el.addEventListener("click", function (e) {
    closeAllModals();
  })
);

function openModalFunc(title, btn, sub) {
  popupConsultation.style.display = "block";
  const modalTitle = document.querySelector(".modal-title");
  const hiddenInputMail = document.getElementById("titleHiddenMail");
  const hiddenInputMail2 = document.getElementById("titleHiddenMail2");
  const btnMark = document.querySelector(".btn-mark");
  hiddenInputMail.value = sub;

  if (hiddenInputMail2) {
    hiddenInputMail2.value = sub;
  }
  modalTitle.textContent = `${title}`;
  btnMark.textContent = btn;
  const form = document.getElementById("consultForm");
}

openCompilationModal.forEach((el) =>
  el.addEventListener("click", function (e) {
    const title = e.target.dataset.title || "и получите консультацию";
    const sub = e.target.dataset.sub || "Получить консультацию";
    const btn = e.target.dataset.btn || "Получить консультацию";
    openModalFunc(title, btn, sub);
  })
);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("consultFormMain");
});

/*
const cardsData = [
  {
    title: "Карточка 1",
    description: "Описание первой карточки",
    img: [
      "/images/RivetaSantaMonica/Riviera Santa Monica1.webp",
      "./images/RivetaSantaMonica/Riviera Santa Monica2.webp",
      "/images/RivetaSantaMonica/Riviera Santa Monica3.webp",
      "./images/RivetaSantaMonica/Riviera Santa Monica4.webp",
      "/images/RivetaSantaMonica/Riviera Santa Monica5.webp",
    ],
  },
  {
    title: "Карточка 2",
    description: "Описание второй карточки",
    img: [
      "/images/RivetaSantaMonica/Riviera Santa Monica1.webp",
      "./images/RivetaSantaMonica/Riviera Santa Monica2.webp",
      "/images/RivetaSantaMonica/Riviera Santa Monica3.webp",
      "./images/RivetaSantaMonica/Riviera Santa Monica4.webp",
      "/images/RivetaSantaMonica/Riviera Santa Monica5.webp",
    ],
  },
];

function createCard(card) {
  console.log(card.img);
  const x = card.img;
  return `
    <div class="card">
          <div class="div1">
            <h3>${card.title}</h3>
            <div class="swiper realState">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img
                    src="./images/RivetaSantaMonica/Riviera Santa Monica2.webp"
                    alt="Santa Monica"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    src="./images/RivetaSantaMonica/Riviera Santa Monica3.webp"
                    alt="Santa Monica"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    src="./images/RivetaSantaMonica/Riviera Santa Monica4.webp"
                    alt="Santa Monica"
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    src="./images/RivetaSantaMonica/Riviera Santa Monica5.webp"
                    alt="Santa Monica"
                  />
                </div>
              </div>
              <div class="realStatePagination">
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
          <div class="div2 font-p">
            <p>Локация: <span>Таиланд, Паттайя, Джомтьен</span></p>
            <p>Площадь: <span>29 м²-325 м²</span></p>
            <p>Цена: <span>62 861 $</span></p>
            <p>Срок сдачи: <span>2025-2028</span></p>
            <p>До моря: <span>1 км</span></p>
            <p>Застройщик: <span>The Riviera Group Thailand</span></p>
          </div>
          <div class="div3">
            <div class="font-p" id="block1">
              The Riviera Santa Monica – это современный кондоминиум, где
              комфорт сочетается с приватностью и удобством. Комплекс расположен
              так, чтобы создать тихую атмосферу вдали от городской суеты, а из
              окон открываются виды на море, которые приятно радуют глаз.
              Удобное расположение: всего в нескольких минутах езды до пляжа,
              ключевых объектов инфраструктуры и рядом с основными дорожными
              развязками. Комплекс идеально подходит как для комфортной жизни,
              так и для инвестиций — сдачи в аренду или перепродажи
            </div>
            <!--
            <button onclick="toggleBlock('block1')" class="font-p">
              Подробнее
            </button>-->
          </div>
          <div class="div4">
            <div class="card__bottom font-p">
              <div>Варианты оплаты: <br /><span>рассрочка</span></div>
              <div>Выгода от перепродажи:<br /><span>24%</span></div>
              <div>Доходность в год:<br /><span>от 5 440 $</span></div>
            </div>

            <button
              class="blue-btn cosulationOpenModal"
              data-title="Заполните форму и отправьте заявку на The Riviera Santa Monica"
              data-btn="Получить презентацию"
              data-sub="Получить презентацию на The Riviera Santa Monica"
            >
              Получить презентацию
            </button>
          </div>
        </div>`;
}
document.getElementById("cards-container").innerHTML = cardsData
  .map(createCard)
  .join("");
*/
