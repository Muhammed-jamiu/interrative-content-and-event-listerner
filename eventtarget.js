/// Event Target Section
const messageMsg = document.querySelector("#message");

function sendInfo() {
  const p = event.target.parentElement;
  message(`Welcome: ${p.firstname.value} : ${p.lastname.value}`);
}

function message(msg) {
  var p = event.target.parentElement;
  if (p.firstname.value === "" || p.lastname.value === "") {
    messageMsg.textContent =
      "Sorry! Fill the space provided before submiting...";
    messageMsg.style.color = "red";
    messageMsg.style.visibility = "visible";
    p.firstname.value = "";
    p.lastname.value = "";
  } else {
    messageMsg.innerHTML = msg;
    messageMsg.style.color = "green";
    messageMsg.style.visibility = "visible";

    p.firstname.value = "";
    p.lastname.value = "";
  }
}
//   Mouse event section
const output = document.querySelector(".output");
//   output.textContent = "Hello! World!";
//   //   console.log(output.textContent);
//   output.style.height = "300px";
//   output.style.width = "300px";
//   output.style.backgroundColor = "red";
//   output.style.borderRadius = "20px";

function colorChange(color, event) {
  // console.log(color);
  // console.log(event.type);
  // console.log(event.target);
}
output.addEventListener("mousedown", (el) => {
  colorChange("green", event);
});
output.addEventListener("mouseover", (el) => {
  colorChange("blue", event);
});
output.addEventListener("mouseout", (el) => {
  colorChange("gray", event);
});
output.addEventListener("mouseup", (el) => {
  colorChange("purple", event);
});
//   document.addEventListener("DOMContentLoaded", event);
//   window.ondblclick = function () {
//     message("READY", event);
//   };
//   function message(string, event) {
//     console.log(string);
//     console.log(event.type);
//   }
