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

var n = -1;

var autoChange = setInterval(nextSlide,5000);

function changeSlide(){
  clearInterval(autoChange)
  if (n<0) {n=3}
  else if (n>3) {n=0};
  $(".circle_button").removeClass("active_button").addClass("inactive_button");
  $("#cb" + n).removeClass("inactive_button").addClass("active_button");
  $('.slide:visible').fadeOut(300);
  $(".slide_" + (n)).fadeIn(300);
  $("#product_title").html(images[n]["name"]);
  $("#product_link").attr("href", images[n]["link"]);
  $("#product_link").html("Go to " + images[n]["type"]);
  autoChange = setInterval(nextSlide,5000);


};

function nextSlide(){
  n++;
  changeSlide()
};


$(document).ready(function(){
  $(".circle_button").click(function(){
    n = $(this).attr('id').slice(-1);
    changeSlide();
  });

  $(".right_arrow").click(function() {
    nextSlide();
  });

  $(".left_arrow").click(function() {
    n--;
    changeSlide();
  });
});
