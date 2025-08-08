//"df553529c83fac8bef8afa263a42ef21";

const apiKey = "df553529c83fac8bef8afa263a42ef21";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const icon = document.getElementById("icon");
const comment = document.getElementById("comment");
const weatherCard = document.getElementById("weatherCard");
const body = document.body;

const emojiMap = {
  Clear: "☀️",
  Clouds: "☁️",
  Rain: "🌧️",
  Thunderstorm: "⛈️",
  Drizzle: "🌦️",
  Snow: "❄️",
  Mist: "🌫️",
  Default: "🌤️"
};

const commentMap = {
  Clear: "A bright and shiny day!",
  Clouds: "A calm, overcast mood.",
  Rain: "Time for a warm cup of tea.",
  Thunderstorm: "Stay safe indoors!",
  Drizzle: "Light rain — umbrella time.",
  Snow: "It's snowing. Magic in the air!",
  Mist: "A misty, mysterious vibe.",
  Default: "Let's see what the sky brings."
};

const bgClassMap = {
  Clear: "sunny",
  Clouds: "cloudy",
  Rain: "rainy",
  Thunderstorm: "rainy",
  Drizzle: "rainy",
  Snow: "snowy",
  Mist: "cloudy",
  Default: "default"
};

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

async function fetchWeather(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!res.ok) throw new Error("City not found");

    const data = await res.json();
    updateUI(data);
  } catch (err) {
    alert(err.message);
  }
}

function updateUI(data) {
  const mainWeather = data.weather[0].main;
  const emoji = emojiMap[mainWeather] || emojiMap.Default;
  const commentText = commentMap[mainWeather] || commentMap.Default;
  const bgClass = bgClassMap[mainWeather] || bgClassMap.Default;

  cityName.textContent = data.name;
  temperature.textContent = `${data.main.temp} °C`;
  description.textContent = data.weather[0].description;
  icon.textContent = emoji;
  comment.textContent = commentText;

  weatherCard.classList.remove("hidden");

  body.className = ""; 
  body.classList.add(bgClass);
}
