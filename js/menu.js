const menu = document.getElementById('menu');
const rightheader = document.getElementById('right-header');
const topbar = document.getElementById('top-bar');
const menulabel = document.getElementById('menu-label');


(function() {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  function displayWindowSize() {
    let width = window.innerWidth;
    let checkBox = document.getElementById("checkbox");
    checkBox.checked = false;
    menulabel.style.backgroundImage = "url(/assets/menu.svg)"

    if (width > 900) {
      rightheader.style.display = 'block';
      menu.style.display = 'none';
    }
    else {
      rightheader.style.display = 'none';
      menu.style.display = 'block';
    }
  };
})();

function myFunction() {
  let checkBox = document.getElementById("checkbox");

  if (checkBox.checked == true){
    rightheader.style.display = "grid";
    menulabel.style.backgroundImage = "url(/assets/close.svg)"
  } else {
    rightheader.style.display = "none";
    menulabel.style.backgroundImage = "url(/assets/menu.svg)"
  }
}