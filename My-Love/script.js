document.addEventListener("DOMContentLoaded", () => {
  // --------- TABS --------- //
  const tabButtons = document.querySelectorAll(".tab-menu__button");
  const tabPanels = document.querySelectorAll("#main-content > .tab-panel");

  tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("is-active"));
      tabPanels.forEach((panel) => panel.classList.remove("is-active"));

      button.classList.add("is-active");

      if (tabPanels[index]) {
        tabPanels[index].classList.add("is-active");
      }
    });
  });

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
  let timeLeft = 5 * 60;

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

  // --------- LETTER NAVIGATION --------- //
  function setupLetterNavigation(containerSelector, navSelector) {
    const container = document.querySelector(containerSelector);
    const nav = document.querySelector(navSelector);

    if (!container || !nav) return;

    const letters = container.querySelectorAll(".letter");

    if (!letters.length) return;

    nav.innerHTML = "";

    letters.forEach((letter, index) => {
      const button = document.createElement("button");
      button.textContent = index + 1;
      button.classList.add("letter-btn");

      button.addEventListener("click", () => {
        letters.forEach((item) => item.classList.remove("is-active"));
        letters[index].classList.add("is-active");

        nav.querySelectorAll(".letter-btn").forEach((btn) => {
          btn.classList.remove("is-active");
        });

        button.classList.add("is-active");
      });

      nav.appendChild(button);
    });

    letters.forEach((letter) => letter.classList.remove("is-active"));
    letters[0].classList.add("is-active");

    const firstButton = nav.querySelector(".letter-btn");
    if (firstButton) {
      firstButton.classList.add("is-active");
    }
  }

  setupLetterNavigation(".poemes", ".poemes-nav");
  setupLetterNavigation(".leias", ".leias-nav");
  setupLetterNavigation(".contrat", ".contrat-nav");
});
