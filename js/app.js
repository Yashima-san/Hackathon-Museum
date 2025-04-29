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

function goToCardT34(){
  window.location.href = 'tanks/card_t34.html'
};

function goToCardIS2(){
  window.location.href = 'tanks/card_is2.html'
};

function goToCardKV1(){
  window.location.href = 'tanks/card_kv1.html'
};

function goToCardBA64(){
  window.location.href = 'tanks/card_ba64.html'
};

function goToCardSU100(){
  window.location.href = 'tanks/card_su100.html'
};

function goToCardSU76(){
  window.location.href = 'tanks/card_su76.html'
};