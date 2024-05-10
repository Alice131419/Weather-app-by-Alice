function refreshWeather(response) {
  cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "3be4c0t6ebabc0db7oebb0b39afcd366";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  let day = days[date.getDay()];
  if (minutes < 0) minutes = `0${minutes}`;
}
return `${day} ${hours} &{minutes}`;

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
}
searchCity(searchInput.value);

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("London");
