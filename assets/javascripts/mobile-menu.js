function myFunction() {
$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});

$(windows).on("scroll", function() {
  if($(windows).scrollTop()) {
    $('nav').addClass('black');
  }
})
}
