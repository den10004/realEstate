const popup = document.querySelectorAll(".popup");
const closeAllModal = document.querySelectorAll(".closeAllModal");
const openCompilationModal = document.querySelectorAll(".cosulationOpenModal");
const popupConsultation = document.querySelector(".popup-consultation");
const popupConsultation2 = document.querySelector(".popup-consultation2");
const popupAlert = document.querySelector(".popup-alert");
const menuItems = document.getElementsByClassName("list__block");
const emailBlock = document.getElementById("email-block");

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

function openModalFunc(title, btn, sub, type) {
  const modalTitle = document.querySelector(".modal-title");
  const modalTitle2 = document.querySelector(".modal-title2");
  const hiddenInputMail = document.getElementById("titleHiddenMail");
  const hiddenInputMail2 = document.getElementById("titleHiddenMail2");
  const btnMark = document.querySelector(".btn-mark");
  const btnMark2 = document.querySelector(".btn-mark2");
  if (type == "present") {
    popupConsultation2.style.display = "block";
    modalTitle2.textContent = `${title}`;
    btnMark2.textContent = btn;
    hiddenInputMail2.value = sub;
  }
  if (type == "obg") {
    popupConsultation.style.display = "block";
    modalTitle.textContent = `${title}`;
    btnMark.textContent = btn;
    hiddenInputMail.value = sub;
  }
}

openCompilationModal.forEach((el) =>
  el.addEventListener("click", function (e) {
    console.log(el);
    const type = e.target.dataset.type;
    const title = e.target.dataset.title || "и получите консультацию";
    const sub = e.target.dataset.sub || "Получить консультацию";
    const btn = e.target.dataset.btn || "Получить консультацию";
    openModalFunc(title, btn, sub, type);
  })
);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("consultForm");
  const thanks = "route";
  const btnText = "Разместить объект";
  sendForm(form, thanks, btnText);
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("consultForm2");
  const thanks = "alert";
  const btnText = "Получить презентацию";
  sendForm(form, thanks, btnText);
});

function getUrlParameter(name) {
  name = name.replace(/[$$$$]/g, "\\$&");
  let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  let results = regex.exec(window.location.href);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Получение UTM-параметров из URL
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

// Устанавка куки с UTM-метками
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
  formData.append("subject", "Письмо с сайта proinvestresort.ru");
}

function sendForm(form, thanks, btnText) {
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const btn = event.srcElement.querySelector("#send-btn");
    btn.disabled = true;
    btn.textContent = "Отправка...";
    try {
      const formData = new FormData(form);
      let object = {};
      /*
      for (var pair of formData.entries()) {
        console.log(pair[0]);
      }*/

      fd(formData);
      const response = await fetch("https://proinvestresort.ru/sendforms.php", {
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
      btn.textContent = btnText;
      if (thanks === "route") {
        ym(100282784, "reachGoal", "goalLeadsClient");
        window.location.href = "/thanks.html";
      } else {
        ym(100282784, "reachGoal", "goalLeads");
        const outputElement = document.getElementById("output-main");
        outputElement.innerHTML = `${localStorage.getItem("name")}`;
        popupAlert.style.display = "block";
      }
    } catch (error) {
      console.error("Произошла ошибка при отправке формы.", error);
      alert("Произошла ошибка при отправке формы.", error);
    }
  });
}

if (emailBlock) {
  emailBlock.style.display = "none";
}

let onClick = function (event) {
  event.preventDefault();

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("block-active");
  }
  event.currentTarget.classList.add("block-active");
  if (event.currentTarget.classList.contains("E-mail")) {
    emailBlock.style.display = "flex";
  }
  if (!event.currentTarget.classList.contains("E-mail")) {
    emailBlock.style.display = "none";
  }
};

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", onClick, false);
}
