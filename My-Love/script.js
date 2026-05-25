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
  function setupLetterNavigation(containerSelector, navSelector) {
    const container = document.querySelector(containerSelector);
    const nav = document.querySelector(navSelector);

    if (!container || !nav) {
      console.log("Missing:", containerSelector, navSelector);
      return;
    }

    const letters = container.querySelectorAll(".letter");

    if (!letters.length) {
      console.log("No letters found in:", containerSelector);
      return;
    }

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

  setupLetterNavigation(".leias", ".leias-nav");
  setupLetterNavigation(".cartas", ".cartas-nav");
});

.letters {
  min-height: 300px;
}

.letter {
  display: none;
  text-align: justify;
}

.letter.is-active {
  display: block;
}

.letter-nav {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 20;
}

.letter-btn {
  border: 1px solid black;
  background: white;
  color: black;
  font-family: "Open Sans", sans-serif;
  padding: 0.5rem 0.9rem;
  cursor: pointer;
  border-radius: 8px;
}

.letter-btn:hover {
  background: #EEE;
}

.letter-btn.is-active {
  background: black;
  color: white;
}
