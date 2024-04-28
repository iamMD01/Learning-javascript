const button = document.getElementById("Click");
const username = document.getElementById("localinput");
const username1 = document.getElementById("usern");
const channam = document.getElementById("username");

button.addEventListener("click", () => {
  const value = username.value;
  localStorage.setItem("name", value);
  channam.innerText = value;
});
window.addEventListener("load", () => {
  const value = localStorage.getItem("name");
  username1.innerText = value;
});
