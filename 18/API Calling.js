const button = document.getElementById("search-button");
const input = document.getElementById("Location");

const countryname = document.getElementById("country-name");
const cityname = document.getElementById("city-name");
const citytemp = document.getElementById("city-temp");
const time = document.getElementById("time");

async function getdata(cityname) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=5defd86368aa4cf28f472227242804&q=${cityname}&aqi=yes`
  );
  return await promise.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getdata(value);
  countryname.innerText = `${result.location.country}`;
  cityname.innerText = `${result.location.name},${result.location.region}`;
  citytemp.innerText = `${result.current.temp_c}`;
  time.innerText = `${result.location.localtime}`;
});
