var btn = document.getElementById("btn");
var menu = document.getElementById("menu");
btn.addEventListener("click", function () {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

var modal = document.getElementById("Modal-bg");
const toggleModal = () => {
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
  }
};

var sortlist = document.getElementById("sortlist");
const sortToggle = () => {
  if (sortlist.classList.contains("hidden")) {
    sortlist.classList.remove("hidden");
  } else {
    sortlist.classList.add("hidden");
  }
};
