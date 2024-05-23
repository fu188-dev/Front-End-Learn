const one = document.querySelector("#one");
const body = document.querySelector("body");

one.addEventListener("input", changeBc);
one.addEventListener("change", changeBc);

function changeBc(e) {
  // body.style.backgroundColor = one.value;
  console.log("color:", e);
  console.log("color:", e.target.value);
  body.style.backgroundColor = e.target.value;

}



let colorWell;
const defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
