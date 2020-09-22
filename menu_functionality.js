$(document).ready(function(){
  $(".menu_button_container").click(function(){
    $(".menu").toggle();
    $(".menu_button_container").toggleClass("change");
  });
});
