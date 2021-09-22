const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  hr.style.transform = `rotate(${
    ((hours % 12) / 12) * 360 + (minutes / 60 / 12) * 360
  }deg)`;
  min.style.transform = `rotate(${(minutes / 60) * 360}deg)`;
  sec.style.transform = `rotate(${(seconds / 60) * 360}deg)`;
}, 1000);
