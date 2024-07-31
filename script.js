// Đặt ngày và giờ kết thúc
let countdownDate = new Date("June 27, 2025 00:00:00").getTime();

// Cập nhật đếm ngược mỗi giây
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countdownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Nếu thời gian đã hết
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Time's up!";
  }
}, 1000);
