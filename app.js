(function(){

  var nav = document.querySelector("nav"),
      navButton = document.getElementById("nav-button");

  navButton.addEventListener("click", function(e){

    if (nav.classList.value.indexOf("nav--open") > -1) {
      nav.classList.remove("nav--open");
    } else {
      nav.classList.add("nav--open")
    }
  })

}());


