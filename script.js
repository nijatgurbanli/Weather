const cityCordinate = {
  baku: {
    a: 40.38,
    b: 49.89,
  },
  dubai: {
    a: 25.08,
    b: 55.31,
  },
};
const btn = document.getElementById("add");
const en = Object.entries(cityCordinate);
const inputval = document.getElementById("cityinput");

btn.addEventListener("click", async (e) => {
  for (const [key, { a, b }] of en) {
    if (key === inputval.value) {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${a}&longitude=${b}&hourly=temperature_2m&current_weather=true`
      );
      const data = await response.json();
      const { latitude, longitude, current_weather } = data;
      const { time, temperature } = current_weather;
      console.log(time, temperature);
      document.getElementById("lat").textContent = latitude;
      document.getElementById("lon").textContent = longitude;
      document.getElementById("temp").textContent = temperature;
      document.getElementById("time").textContent = time;
      break;
    }
  }
});
 