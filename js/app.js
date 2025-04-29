document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-button");
  const searchInput = document.getElementById("search-input");

  // Функция для переключения вкладок
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      const tabId = this.getAttribute("data-tab");

      document.querySelectorAll(".tab").forEach((view) => {
        view.classList.remove("show");
      });

      document.getElementById(tabId).classList.add("show");
    });
  });

  // Функция для поиска
  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase().trim();

    if (searchTerm === "") {
      // Если поисковая строка пуста, показываем все карточки
      document.querySelectorAll(".card").forEach((card) => {
        card.classList.remove("hidden");
      });
      return;
    }

    // Ищем совпадения во всех карточках
    document.querySelectorAll(".card").forEach((card) => {
      const name = card.querySelector(".name").textContent.toLowerCase();
      if (name.includes(searchTerm)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

function goToCardT34() {
  window.location.href = "tanks/card_t34.html";
}

function goToCardIS2() {
  window.location.href = "tanks/card_is2.html";
}

function goToCardKV1() {
  window.location.href = "tanks/card_kv1.html";
}

function goToCardBA64() {
  window.location.href = "tanks/card_ba64.html";
}

function goToCardSU100() {
  window.location.href = "tanks/card_su100.html";
}

function goToCardSU76() {
  window.location.href = "tanks/card_su76.html";
}

function goToCardLA57() {
  window.location.href = "aviation/card_LA5-7.html";
}

function goToCardIL2() {
  window.location.href = "aviation/card_LA5-7.html";
}

function goToCardKatusha() {
  window.location.href = "artillery/card_katuysha.html";
}

function goToCardM30() {
  window.location.href = "artillery/card_M30.html";
}

<<<<<<< HEAD
function goToCardGASM1() {
  window.location.href =
    "automobiles-and-engineering-technology/card_GAS-M1.html";
}

function goToCardGAS46() {
  window.location.href =
    "automobiles-and-engineering-technology/card_GAS-46.html";
}

function goToCardPantera() {
  window.location.href =
    "cars-and-engineering-technic-German-machinery-(trophies)/card_PANTERA.html";
}

function goToCardTiger() {
  window.location.href =
    "cars-and-engineering-technic-German-machinery-(trophies)/card_TIGER.html";
=======
function goToCardGASM1(){
  window.location.href='automobiles-and-engineering-technology/card_GAS-M1.html'
}

function goToCardGAS46(){
  window.location.href='automobiles-and-engineering technology/card_GAS-46.html'
}

function goToCardPantera(){
  window.location.href='cars-and-engineering-technic-German-machinery-(trophies)/card_PANTERA.html'
}

function goToCardTiger(){
  window.location.href='cars-and-engineering-technic-German-machinery-(trophies)/card_TIGER.html'
>>>>>>> bf8c066230413f74037c635cff19aa6283a594ba
}

function goToCardPPSH41() {
  window.location.href = "infantry/card_PPSH-41.html";
}

function goToCardDP27() {
  window.location.href = "infantry/card_DP-27.html";
}

<<<<<<< HEAD
function goToCardG5() {
  window.location.href = "the-fleet/card_G-5.html";
}

function goToCardMO() {
  window.location.href = "the-fleet/card_MO.html";
}
=======
function goToCardG5(){
  window.location.href='the-fleet/card_G-5.html'
}

function goToCardMO(){
  window.location.href='the-fleet/card_MO.html'
}
>>>>>>> bf8c066230413f74037c635cff19aa6283a594ba
