let dayBox = document.getElementById("day-box");
let hourBox = document.getElementById("hour-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");

// Format: targetDate = new Date("YYYY-MM-DDTHH:MM:SS"); // Replace with your target date and time
let targetDate = new Date(2025, 4, 28, 0, 0);

let targetTime = targetDate.getTime();

function countdown() {
  let currentDate = new Date();

  let currentTime = currentDate.getTime();

  let remainingTime = (targetTime - currentTime) / 1000; // output was in milliseconds
  //   1 sec = 1000 milliseconds
  //   1 min = 60 seconds

  let oneSec = 1;
  let oneMin = 60 * oneSec;
  //   1 hour = 60 minutes
  let oneHour = 60 * oneMin;
  //   1 day = 24 hours
  let oneDay = 24 * oneHour;

  //   If endDate is before the current(today) date
  if (targetTime < currentTime) {
    clearInterval(i);
    document.querySelector(".countdown").innerHTML =
      "<h1>Countdown has expired!</h1>";
  }
  //   If endDate is not before the current(today) date
  else {
    // Calculate remining days, hours, minutes, seconds.
    // let daysLeft = Math.floor(remainingTime / oneDay);
    let daysLeft = Math.floor(remainingTime / (24 * 60 * 60));
    // let hoursLeft = Math.floor((remainingTime % oneDay) / oneHour);
    let hoursLeft = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
    // let minsLeft = Math.floor((remainingTime % oneHour) / oneMin);
    let minsLeft = Math.floor((remainingTime % (60 * 60)) / 60);
    // let secsLeft = Math.floor(remainingTime % oneMin);
    let secsLeft = Math.floor(remainingTime % 60);
    console.log(daysLeft, hoursLeft, minsLeft, secsLeft);

    // Adding zero
    daysLeft = daysLeft < 10 ? "0" + daysLeft : daysLeft;
    hoursLeft = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
    minsLeft = minsLeft < 10 ? "0" + minsLeft : minsLeft;
    secsLeft = secsLeft < 10 ? "0" + secsLeft : secsLeft;

    // Displaying values
    dayBox.textContent = daysLeft;
    hourBox.textContent = hoursLeft;
    minBox.textContent = minsLeft;
    secBox.textContent = secsLeft;
  }
}

let i = setInterval(countdown, 1000);
countdown();
