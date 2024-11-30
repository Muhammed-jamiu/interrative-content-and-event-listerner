function isFocus() {
  const name = document.querySelector("#name");
  console.log(name.value);
}
function logEvent() {
  const p = event.target;
  if (p.name == "firstname") {
    message(`First Name: Change to ${p.value}`);
    console.log(p.name.value);
  } else {
    message(`Last Name Change to ${p.value}`);
  }
}

function sendInfo() {
  const p = event.target.parentElement;

  message(`Welcome ${p.firstname.value} ${p.lastname.value}`);
}
function message(m) {
  const msg = document.querySelector("#welcome");
  msg.innerHTML = m;
}
