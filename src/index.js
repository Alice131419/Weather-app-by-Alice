function searchCity(city) {
  let apiKey = "3be4c0t6ebabc0db7oebb0b39afcd366";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}
