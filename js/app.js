document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-button");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      const tabId = this.getAttribute("data-tab");
      console.log(tabId);

      document.querySelectorAll(".tab").forEach((view) => {
        view.classList.remove("show");
      });

      document.getElementById(tabId).classList.add("show");
    });
  });
});
