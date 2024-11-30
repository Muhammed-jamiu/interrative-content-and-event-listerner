const userInput = document.querySelector("#userinput");
function saveInfo() {
  toString(userInput.value);
  if (isNaN(userInput.value) || userInput.value === "") {
    //   console.log("Sorry! it's not a number");
    //   console.log("Input says:" + " " + userInput.value);
  } else {
    console.log("Yes it's a number");
    console.log("Input says:" + " " + userInput.value);
  }
}
//
function numCheck() {
  message(!isNaN(event.key));
  // console.log(event.key);

  return !isNaN(event.key);
}
function numCheck2() {
  message(isNaN(event.key));
  // console.log(event.key);

  return isNaN(event.key);
}
function message(m) {
  document.getElementById("wrapper").innerHTML = m;
}

function fun() {
  console.log(event);
}
