//get DOM elements
var nav = document.getElementById("menu-navigation");
var menu = document.getElementById("nav-bar-link");
var main = document.getElementById("main-content");

var openMenu = false;
var hover = false;

//add event listner
menu.addEventListener("click", function() {
  //set toggle
  openMenu = !openMenu ? true : false;

  nav.classList.add("menu-active");
  main.classList.add("menu-active");

  //remove the class if toggle off
  if (!openMenu) {
    nav.classList.remove("menu-active");
    main.classList.remove("menu-active");
  }
});
