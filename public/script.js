var slideImg = document.getElementById("slideImg");
let hamber = document.querySelector(".hamber");
let menulist = document.getElementsByClassName("menu-list");
let navbarmenu = document.getElementsByClassName("navbar-menu");
let ham1 = document.getElementsByClassName("hamber");
let close = document.querySelector(".hembarger");

hamber.addEventListener("click", (e) => {
  
    menulist[0].classList.remove("display");
    menulist[0].classList.remove("close_animate");

});

var images = new Array(
  "images/cover660_012319124503.jpg",
  "images/gettyimages-1012190542-640x640.jpg",
  "images/gyan-shahane-eSoyrx3YIwk-unsplash.jpg",
  "images/indian-farmer-with-agronomist-cotton-field-showing-some-information-tab_54391-2370.jpg",
  "images/istockphoto-1284379612-170667a.jpg"
);

var mobileimages = new Array(
  "images/mobile1.jpg",
  "images/mobile2.jpeg",
  "images/mobile3.jpeg"
);

var len = images.length;
var lenmobile = mobileimages.length;
var i = 0,
  j = 0;
function slider() {
  if (i > len - 1) {
    i = 0;
  }
  slideImg.src = images[i];
  i++;
  if (window.outerWidth < 900) {
    return;
  }

  setTimeout("slider()", 6000);
}
let initialload = false;
if (initialload == false) {
  slider();
  initialload = true;
}
console.log(window);

if (window.outerWidth > 900) {
  slider();
  ham1[0].classList.add("display");
}
if (window.outerWidth <= 900) {
  navbarmenu[0].classList.add("display");
  sliderphone();
}

function sliderphone() {
  if (j > lenmobile - 1) {
    j = 0;
  }
  slideImg.src = mobileimages[j];
  j++;
  if (window.outerWidth > 900) {
    return;
  }

  setTimeout("sliderphone()", 3000);
}

close.addEventListener("click", (e) => {
  menulist[0].classList.add("close_animate");
  setTimeout(()=>{
    menulist[0].classList.add("display");
  },700);
});
