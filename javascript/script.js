document.addEventListener('DOMContentLoaded', function() {
window.onscroll = function() {myFunction()};
var navbar = document.querySelector("ul");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.scrollY >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
})

let button = document.querySelector('#top');
button.addEventListener("click", function(){
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo();
});