// Get clock element
var clockElement = document.getElementById("clock");
var timeElement = document.getElementById("time");

// Start/Stop buttons
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");

// Variables
var timer; // Timer variable
var isRunning = false; // Flag to track if clock is running

// Event listeners for Start/Stop buttons
startBtn.addEventListener("click", startClock);
stopBtn.addEventListener("click", stopClock);

// Start the clock
function startClock() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateClock, 1000); // Update clock every second
  }
}

// Stop the clock
function stopClock() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
}

// Update the clock
function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var month = currentTime.getMonth() + 1; // Months are zero-based
  var day = currentTime.getDate();
  var year = currentTime.getFullYear();

  // Add leading zeros if necessary
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  month = (month < 10 ? "0" : "") + month;
  day = (day < 10 ? "0" : "") + day;

  // Display the current date and time
  clockElement.innerHTML = hours + ":" + minutes + ":" + seconds;
  timeElement.innerHTML = day + "/" + month + "/" + year;
}

// Start the clock initially
startClock();
