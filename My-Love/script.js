document.addEventListener("DOMContentLoaded", () => {
  // --------- TABS --------- //
  const tabs = {
    $buttons: document.querySelectorAll(".tab-menu__button"),
    $panels: document.querySelectorAll(".tab-panel"),

    init() {
      for (let i = 0; i < this.$buttons.length; i++) {
        const button = this.$buttons[i];
        const panel = this.$panels[i];

        button.addEventListener("click", () => {
          const activeButton = document.querySelector(".tab-menu__button.is-active");
          const activePanel = document.querySelector(".tab-panel.is-active");

          if (activeButton) activeButton.classList.remove("is-active");
          if (activePanel) activePanel.classList.remove("is-active");

          button.classList.add("is-active");
          panel.classList.add("is-active");
        });
      }
    }
  };

  tabs.init();

  // --------- MODAL --------- //
  const modalClose = document.querySelector(".modal-close-button");
  const mainContent = document.getElementById("main-content");
  const startButton = document.getElementById("start-button");

  if (modalClose && mainContent && startButton) {
    modalClose.addEventListener("click", () => {
      mainContent.classList.remove("hidden");
      startButton.classList.add("hidden");
    });
  }

  // --------- TIMER --------- //
  let timerInterval;
  let timeLeft = 5 * 60; // 5 minutes in seconds

  function updateTimerDisplay() {
    const timer = document.getElementById("timer");
    if (!timer) return;

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.textContent =
      `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  window.startTimer = function () {
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
      const timer = document.getElementById("timer");
      if (!timer) return;

      if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        timer.textContent = "Break over 💪";
      }
    }, 1000);
  };

  window.resetTimer = function () {
    clearInterval(timerInterval);
    timeLeft = 5 * 60;
    updateTimerDisplay();
  };

  updateTimerDisplay();

  // --------- COUNTER --------- //
  function updateDayCounter() {
    const counter = document.getElementById("day-counter");
    if (!counter) return;

    const startDate = new Date(2024, 0, 1, 0, 0, 0);
    const now = new Date();

    let diff = now - startDate;

    const msInSecond = 1000;
    const msInMinute = msInSecond * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;

    const days = Math.floor(diff / msInDay);
    diff %= msInDay;

    const hours = Math.floor(diff / msInHour);
    diff %= msInHour;

    const minutes = Math.floor(diff / msInMinute);
    diff %= msInMinute;

    const seconds = Math.floor(diff / msInSecond);

    counter.textContent =
      `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  }

  setInterval(updateDayCounter, 1000);
  updateDayCounter();

  // --------- LETTER NAVIGATION --------- //
  function createNavigator(containerSelector, navSelector, perPage = 5) {
    const items = document.querySelectorAll(`${containerSelector} .letter`);
    const nav = document.querySelector(navSelector);

    if (!items.length || !nav) return;

    let currentIndex = 0;
    let currentPage = 0;

    function showItem(index) {
      items.forEach((item) => item.classList.remove("is-active"));

      currentIndex = index;
      items[currentIndex].classList.add("is-active");

      currentPage = Math.floor(currentIndex / perPage);
      renderButtons();
    }

    function renderButtons() {
      nav.innerHTML = "";

      const start = currentPage * perPage;
      const end = Math.min(start + perPage, items.length);

      if (currentPage > 0) {
        const prevBtn = document.createElement("button");
        prevBtn.textContent = "«";
        prevBtn.classList.add("letter-btn");

        prevBtn.addEventListener("click", () => {
          currentPage--;
          renderButtons();
        });

        nav.appendChild(prevBtn);
      }

      for (let i = start; i < end; i++) {
        const btn = document.createElement("button");
        btn.textContent = i + 1;
        btn.classList.add("letter-btn");

        if (i === currentIndex) {
          btn.classList.add("is-active");
        }

        btn.addEventListener("click", () => {
          showItem(i);
        });

        nav.appendChild(btn);
      }

      if (end < items.length) {
        const nextBtn = document.createElement("button");
        nextBtn.textContent = "»";
        nextBtn.classList.add("letter-btn");

        nextBtn.addEventListener("click", () => {
          currentPage++;
          renderButtons();
        });

        nav.appendChild(nextBtn);
      }
    }

    showItem(0);
  }

  createNavigator(".cartas", ".cartas-nav");
  createNavigator(".leias", ".leias-nav");
});
