var images= [
  {
    name: "JR House",
    pic: "url('image1.jpg')",
    link: "#",
    type: "Project"
  },
  {
    name: "Dahua",
    pic: "url('image2.jpg')",
    link: "#",
    type: "Project"
  },
  {
    name: "Geneve",
    pic: "url('image3.jpg')",
    link: "#",
    type: "Project"
  },
  {
    name: "Project",
    pic: "url('image4.jpg')",
    link: "#",
    type: "Project"
  }

]


$(document).ready(function(){
  $(".menu_button_container").click(function(){
    $(".menu").toggle();
  });

  $(".circle_button").click(function(){
    var btn = $(this).attr('id').slice(-1);
    var b = btn % 4;
    $(".circle_button").removeClass("active_button").addClass("inactive_button");
    $("#cb" + b).removeClass("inactive_button").addClass("active_button");
    $('.slide:visible').fadeOut(500);
    $(".slide_" + (b)).fadeIn(500);
    $("#product_title").html(images[b]["name"]);
    $("#product_link").attr("href", images[b]["link"]);
    $("#product_link").html("Go to " + images[b]["type"]);
  });
});
