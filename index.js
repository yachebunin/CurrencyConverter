window.onload = function () {
  document.getElementById("date").innerHTML =
    new Date().getDate() +
    "." +
    getMonth() +
    "." +
    getDate() +
    " (" +
    getHours() +
    ":" +
    getMinutes() +
    ":" +
    getSeconds() +
    ")";

  for (let list of document.querySelectorAll(".currency_list")) {
    for (let button of list.querySelectorAll("button")) {
      button.addEventListener("click", choose);
    }
  }

  function choose(event) {
    let isActiveButton = event.target;

    for (let button of isActiveButton.parentElement.querySelectorAll(
      "button"
    )) {
      button.classList.remove("isActive");
    }

    isActiveButton.classList.add("isActive");
  }
};
