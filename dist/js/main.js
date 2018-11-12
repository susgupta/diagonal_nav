//get DOM elements
var nav = document.getElementById("menu-navigation");
var menu = document.getElementById("nav-bar-link");
var main = document.getElementById("main-content");

var openMenu = false;
var hover = false;

//add event listner
menu.addEventListener("click", function() {
  console.log("Menu clicked");

  openMenu = !openMenu ? true : false;

  nav.classList.add("menu-active");
  main.classList.add("menu-active");
  nav.classList.remove("menu-hover");
  main.classList.remove("menu-hover");

  //call toggling
  actionOnOpenMenu();
});

// common method for open menu toggle click
function actionOnOpenMenu() {
  if (!openMenu) {
    nav.classList.add("menu-hover");
    main.classList.add("menu-hover");
  } else {
    nav.classList.remove("menu-hover");
    main.classList.remove("menu-hover");
  }
}
