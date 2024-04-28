const button = document.getElementById("get");
const city = document.getElementById("cloc");
const temperature = document.getElementById("temp")

async function getdata(lat, longi) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=5defd86368aa4cf28f472227242804&q=${lat},${longi}&aqi=yes`
  );
  return await promise.json();
}

async function gotlocation(position) {
  const result = await getdata(
    position.coords.latitude,
    position.coords.longitude
  );
  console.log(result);
  city.innerText = `${result.location.name}, ${result.location.region}`;
  temperature.innerText = `${result.current.temp_c}`

}

function failedtoget() {
  console.log("Failed to get the location, please refresh");
}

button.addEventListener("click", async () => {
  const result = navigator.geolocation.getCurrentPosition(
    gotlocation,
    failedtoget
  );
});
