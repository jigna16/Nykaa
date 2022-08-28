// colusal-manula+automatic
import navbar_imp from "../component/navbar_imp.js"
document.getElementById("navbar").innerHTML=navbar_imp()


var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
   

} 

var slidePosition = 0;
SlideShowe();

function SlideShowe() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (var j = 0; j < circles.length; j++) {
      circles[j].className = circles[j].className.replace("enable", "");
  }
  
  if (slidePosition > slides.length-1) 
  {
      slidePosition = 0;

}
slidePosition++;
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
setTimeout(SlideShowe, 5000);
   
} 

// coluser-end


// slider-end

// product-slider-trendingstories
let right=document.getElementById("left");
let left =document.getElementById("getto");
let sliderprod=document.getElementById("slider-prod")

right.onclick=function(){
   
    
       
        sliderprod.style.transform="translateX(-65%)";
       
    
  
   
}
left.onclick=function(){
    sliderprod.style.transform="translateX(0.4%)"
}


// productbar for editorial

let rightto=document.getElementById("left-2");
let leftto =document.getElementById("getto-2");
 let sliderprodto=document.getElementById("slider-prod-2")

rightto.onclick=function(){
   sliderprodto.style.transform="translateX(-50%)";
}
leftto.onclick=function(){
    sliderprodto.style.transform="translateX(0.4%)"
}
// product bar hidden gems
let rightone=document.getElementById("left-1");
let leftone =document.getElementById("getto-1");
let sliderprodone=document.getElementById("slider-prodone")

rightone.onclick=function(){

   sliderprodone.style.transform="translateX(-65%)";
}
leftone.onclick=function(){
    sliderprodone.style.transform="translateX(0.4%)"
}







import footer_imp from "../component/footer_imp.js";
document.getElementById("footer_imp").innerHTML=footer_imp()

document.getElementById('submitmail').addEventListener('click',function (){
  //  hello();
  myTimeout = setTimeout(function(){
    document.getElementById('emailSendbtnSP').style.visibility = 'hidden';
  }, 2000);
  event.preventDefault();
  
   document.getElementById('emailSendbtnSP').style.visibility = 'visible';
  }
  )






  // onchan func for hide chat option and explor chatbox
 HideChatBox___ = document.querySelector(".cl")
 ShowChatBox___ = document.querySelector(".chatbox")
ShowChatBox___.addEventListener("click" , exchat)
HideChatBox___.addEventListener("click" , clos)

function exchat()
{
   explorechat = document.getElementById("explr");
   chatbox = document.getElementById("cbt");
  explorechat.style.display ="block";
  chatbox.style.display = "none";

}

function clos()
{
   explorechat = document.getElementById("explr");
   chatbox = document.getElementById("cbt");
  explorechat.style.display ="none";
  chatbox.style.display = "block";



}


// // slider-arrow
window.addEventListener("scroll",()=>{

    move = document.getElementById("move");

     scrollbar = window.scrollY;
    
     if(scrollbar>=100)
     {
        move.style.display = "block";
     }
     else{
         move.style.display="none"
     }
})
 move = document.getElementById("move");
move.addEventListener("click",()=>{
    window.scrollTo({
    top:0,
       left :0,
       behavior:"smooth"
    })
})


function searchData() {
  let query = document.querySelector("#search").value;
  if (query === "face primer"){
    console.log("hi")
      window.location.href = "./face_primer.html";
  }
  else if (query === "concealer"){
    console.log("byi")

      window.location.href = "./concealer.html";
  }
}

let id;
function debounce (func,delay) {
  if (id) {
      clearTimeout(id);
  }
  id = setTimeout(function () {
      func();
  },delay)
}

// function cart(){
//   // Complete to show an alert with your product
//   alert("Add your product");
//   window.location.href="cart.html"
// }

searchData()
debounce()





// document.querySelector(".pcart").addEventListener("click",cart)
// function searchData() {
//     let query = document.querySelector("#search").value;
//     if (query === "face primer"){
//         window.location.href = "./face_primer.html";
//     }
//     else if (query === "concealer"){
//         window.location.href = "./concealer.html";
//     }
// }

// let id;
// function debounce (func,delay) {
//     if (id) {
//         clearTimeout(id);
//     }
//     id = setTimeout(function () {
//         func();
//     },delay)
// }