const daysHere = document.querySelector(".days");
const hoursHere = document.querySelector(".hours");
const minutesHere = document.querySelector(".minutes");
const secondsHere = document.querySelector(".seconds");
const countDownElement = document.querySelector(".countdown");

function updateCountDown() {
  const now = new Date().getTime();
  const countDownDate = new Date("February 24, 2024").getTime();
  const distance = countDownDate - now;

  if (distance <= 0) {
    countDownElement.innerHTML = "Expired";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysHere.innerHTML = days + "<span> Days </span>";
  hoursHere.innerHTML = hours + "<span> Hours </span>";
  minutesHere.innerHTML = minutes + "<span> Minutes </span>";
  secondsHere.innerHTML = seconds + "<span> Seconds </span>";
}

setInterval(updateCountDown, 1000);
