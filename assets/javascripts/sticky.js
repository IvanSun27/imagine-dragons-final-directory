window.onscroll = function() {myFunction()};

var nav = document.getElementById("topnav");

var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    topnav.classList.add("sticky")
  } else {
    topnav.classList.remove("sticky");
  }
}
