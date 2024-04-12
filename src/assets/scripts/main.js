const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// const headroom = new Headroom(document.querySelector("#headroom"), {
//   tolerance: 5,
//   classes: {
//     initial: "navbar",
//     pinned: "navbar-pinned",
//     unpinned: "navbar-unpinned",
//   },
// });
// headroom.init();

const time = document.querySelector("#time");
time.textContent = getCurrentTime();

function getCurrentTime(date = new Date()) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

// const apiKey = "YOUR_API_KEY";
// const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";

// // Fetching temperature data
// fetch(`${apiEndpoint}?appid=${apiKey}&q=${encodeURIComponent('YOUR_CITY')}&units=metric`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(`The temperature in ${data.name} is ${data.main.temp}°C`);
//   })
//   .catch(error => console.error(error))
