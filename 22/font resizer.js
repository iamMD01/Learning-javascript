const myname = document.getElementById("my-name");
const btn = document.getElementById("button1");

function textresizer(size) {
  function changesize() {
    myname.style.fontSize = `${size}px`;
  }
  return changesize;
}
const size12 = textresizer(12);
const size100 = textresizer(100);
const size30 = textresizer(30);
const size405 = textresizer(405);

btn.addEventListener("click", size100);
