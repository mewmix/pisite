const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

let toggle = true;

const buildCross = () => {
  let spans = Array.from(menuToggle.children);
  if (toggle) {
    spans[0].className = 'hamburger cross cross-left';
    spans[1].className = 'hamburger cross cross-right';

    menuToggle.classList.add('cross--toggle');
  } else {
    spans[0].className = spans[1].className = 'hamburger';

    menuToggle.classList.remove('cross--toggle');
  }
};

menuToggle.addEventListener("click", event => {
  menu.classList.toggle('menu--show');

  if (toggle) {
    buildCross();
    toggle = false;
  } else {

    buildCross();
    toggle = true;
  }
});