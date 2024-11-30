const divs = document.querySelectorAll("div");
// const bg = document.querySelector("body");
divs.forEach((el) => {
  // console.log(divs);
  el.addEventListener("click", () => {
    document.body.style.backgroundColor = el.textContent;
  });
});
// const divs = document.querySelectorAll("div");
// divs.forEach((el) => {
//   el.addEventListener("click", () => {
//     document.body.style.backgroundColor = el.textContent;
//   });
// });
// document.addEventListener("DOMContentLoaded", (e) => {
//   console.log(e);
// });

window.onload = (event) => {
  message("Window is ready", event);
};
document.addEventListener(event, "DOMContentLoaded");
function message(string, event) {
  console.log(string);
  console.log(event.type);
}
