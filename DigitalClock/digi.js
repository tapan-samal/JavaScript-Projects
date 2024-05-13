const upadteClock = () => {
  const hour = document.getElementById("hr");
  const minute = document.getElementById("min");
  const second = document.getElementById("sec");

  const time = new Date();
  hour.innerHTML =
    time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  minute.innerHTML =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  second.innerHTML =
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
};

setInterval(() => {
  upadteClock();
}, 1000);
