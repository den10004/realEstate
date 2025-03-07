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

function getUrlParameter(name) {
  name = name.replace(/[$$$$]/g, "\\$&");
  let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  let results = regex.exec(window.location.href);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Получаем UTM-параметры из URL
let utm_source = getUrlParameter("utm_source");
let utm_medium = getUrlParameter("utm_medium");
let utm_campaign = getUrlParameter("utm_campaign");
let utm_term = getUrlParameter("utm_term");
let utm_content = getUrlParameter("utm_content");
let utm_campaign_name = getUrlParameter("utm_campaign_name");
let utm_placement = getUrlParameter("utm_placement");
let utm_device = getUrlParameter("utm_device");
let utm_region_name = getUrlParameter("utm_region_name");
let utm_position = getUrlParameter("utm_position");
let utm_position_type = getUrlParameter("utm_position_type");
let utm_source_type = getUrlParameter("utm_source_type");
let yclid = getUrlParameter("yclid");

// Устанавливаем куки с UTM-метками
if (utm_source !== null && utm_source !== "") {
  document.cookie = `utm_source=${encodeURIComponent(
    utm_source
  )}; path=/; max-age=2592000`;
}

if (utm_medium !== null && utm_medium !== "") {
  document.cookie = `utm_medium=${encodeURIComponent(
    utm_medium
  )}; path=/; max-age=2592000`;
}

if (utm_campaign !== null && utm_campaign !== "") {
  document.cookie = `utm_campaign=${encodeURIComponent(
    utm_campaign
  )}; path=/; max-age=2592000`;
}

if (utm_term !== null && utm_term !== "") {
  document.cookie = `utm_term=${encodeURIComponent(
    utm_term
  )}; path=/; max-age=2592000`;
}

if (utm_content !== null && utm_content !== "") {
  document.cookie = `utm_content=${encodeURIComponent(
    utm_content
  )}; path=/; max-age=2592000`;
}

if (utm_campaign_name !== null && utm_campaign_name !== "") {
  document.cookie = `utm_campaign_name=${encodeURIComponent(
    utm_campaign_name
  )}; path=/; max-age=2592000`;
}

if (utm_placement !== null && utm_placement !== "") {
  document.cookie = `utm_placement=${encodeURIComponent(
    utm_placement
  )}; path=/; max-age=2592000`;
}

if (utm_device !== null && utm_device !== "") {
  document.cookie = `utm_device=${encodeURIComponent(
    utm_device
  )}; path=/; max-age=2592000`;
}

if (utm_region_name !== null && utm_region_name !== "") {
  document.cookie = `utm_region_name=${encodeURIComponent(
    utm_region_name
  )}; path=/; max-age=2592000`;
}

if (utm_position !== null && utm_position !== "") {
  document.cookie = `utm_position=${encodeURIComponent(
    utm_position
  )}; path=/; max-age=2592000`;
}

if (utm_position_type !== null && utm_position_type !== "") {
  document.cookie = `utm_position_type=${encodeURIComponent(
    utm_position_type
  )}; path=/; max-age=2592000`;
}

if (utm_source_type !== null && utm_source_type !== "") {
  document.cookie = `utm_source_type=${encodeURIComponent(
    utm_source_type
  )}; path=/; max-age=2592000`;
}

if (yclid !== null && yclid !== "") {
  document.cookie = `yclid=${encodeURIComponent(
    yclid
  )}; path=/; max-age=2592000`;
}

function getCookie(name) {
  let names = name + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(names) == 0) {
      return c.substring(names.length, c.length);
    }
  }
  return "";
}

function fd(formData) {
  formData.append("utm_source", getCookie("utm_source") || "");
  formData.append("utm_medium", getCookie("utm_medium") || "");
  formData.append("utm_campaign", getCookie("utm_campaign") || "");
  formData.append("utm_campaign_name", getCookie("utm_campaign_name") || "");
  formData.append("utm_content", getCookie("utm_content") || "");
  formData.append("utm_term", getCookie("utm_term") || "");
  formData.append("utm_placement", getCookie("utm_placement") || "");
  formData.append("utm_device", getCookie("utm_device") || "");
  formData.append("utm_region_name", getCookie("utm_region_name") || "");
  formData.append("utm_position", getCookie("utm_position") || "");
  formData.append("utm_position_type", getCookie("utm_position_type") || "");
  formData.append("utm_source_type", getCookie("utm_source_type") || "");
  formData.append("yclid", getCookie("yclid") || "");
  formData.append("subject", "Заявка с сайта сабвуферы MK Sound");
}

function sendForm(form) {
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const btn = event.srcElement.querySelector(".red-btn");
    btn.disabled = true;
    btn.textContent = "Отправка...";
    try {
      const formData = new FormData(form);
      let object = {};

      fd(formData);
      const response = await fetch("https://audiics.ru/sendforms.php", {
        method: "POST",
        body: formData,
      });
      formData.forEach((value, key) => (object[key] = value));
      localStorage.setItem("name", object.name);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      closeAllModals();
      btn.disabled = false;
      window.location.href = "/thanks.html";
    } catch (error) {
      console.error("Произошла ошибка при отправке формы.", error);
      alert("Произошла ошибка при отправке формы.", error);
    }
  });
}

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
