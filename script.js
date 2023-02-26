"use strict";

const btnRead = document.querySelector(".btn--read");
const notifCountBox = document.querySelector(".main__notif-number");
const mainContentBox = document.querySelector(".main__main-content");
const unreadNotifBoxAll = document.querySelectorAll(
  ".main__notifs-box--unread"
);
const redDotNotifAll = document.querySelectorAll(".main__notifs-unread-dot");

let notifCount = 3;

const removeHightlightAndDot = function (e) {
  if (
    e.target.classList.contains("main__notifs-box--unread" && notifCount > 0)
  ) {
    e.target.querySelector(".main__notifs-unread-dot").remove();
    e.target.classList.remove("main__notifs-box--unread");

    notifCount--;
    notifCountBox.textContent = notifCount;
  } else if (
    !e.target.classList.contains("main__notifs-box--unread" && notifCount > 0)
  ) {
    e.target
      .closest(".main__notifs-box--unread")
      .querySelector(".main__notifs-unread-dot")
      .remove();
    e.target
      .closest(".main__notifs-box--unread")
      .classList.remove("main__notifs-box--unread");

    notifCount--;
    notifCountBox.textContent = notifCount;
  }
};

btnRead.addEventListener("click", function () {
  unreadNotifBoxAll.forEach(function (box) {
    box.classList.remove("main__notifs-box--unread");
  });

  redDotNotifAll.forEach(function (dot) {
    dot.remove();
  });

  notifCountBox.textContent = 0;

  mainContentBox.removeEventListener("click", removeHightlightAndDot);
});

mainContentBox.addEventListener("click", removeHightlightAndDot);
