function loadWeather () {
  const request = new XMLHttpRequest();
  request.open("get", "http://api.openweathermap.org/data/2.5/weather?q=Bergen,NO&units=metric&appid=cef1f33fc64fabaa1e075d55de1a736e");

  request.onload = () => {
    try {
      const json == JSON.parse(request.responseText);
      populateTable(json);
    }catch (e) {
      console.warn("Could not load")
    }
  }; 



}
