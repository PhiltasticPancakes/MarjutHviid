
function menu_toggle(x) {
  x.classList.toggle("change")
  var vis =document.getElementById("menu").style.visibility
  if (vis=="visible"){
    document.getElementById("menu").style.visibility="hidden"
  }
  else {
    document.getElementById("menu").style.visibility="visible"
  }
}


var images= [
  {
    name: "project 1",
    pic: "url('image1.jpg')",
    link: "#",
    type: "project"
  },
  {
    name: "project 2",
    pic: "url('image2.jpg')",
    link: "#",
    type: "project"
  },
  {
    name: "Item 1",
    pic: "url('image3.jpg')",
    link: "#",
    type: "item"
  },
  {
    name: "Item 2",
    pic: "url('image4.jpg')",
    link: "#",
    type: "item"
  }

]

var i = 1
var btn="cb1"
function changeSlide(x) {
  document.getElementById(btn).style.backgroundColor="";
  i = Math.abs(x-1%4);
  btn="cb"+(i+1);
  document.getElementById("slideshow").style.backgroundImage=images[i].pic;
  document.getElementById("product_title").innerHTML=images[i].name;
  document.getElementById("product_link").innerHTML="go to " + images[i].type;
  document.getElementById("product_link").href=images[i].link;
  document.getElementById(btn).style.backgroundColor="white";
}
