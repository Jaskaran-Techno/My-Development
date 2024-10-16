document.querySelector(".mobile-btn").addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("active");
});
const lessonContainer = document.querySelector('.lessons');
lessonContainer.innerHTML = fitnessClasses;
const hiddenMenu = document.querySelector('.desktop');
function openMenu() {
  hiddenMenu.classList.add('popup');
}
function closeMenu() {
  hiddenMenu.classList.remove('popup');
}
const menuButton = document.querySelector('.menu');
menuButton.addEventListener('click', openMenu);
const close = document.querySelector('.close');
close.addEventListener('click', closeMenu);

$(document).ready(function(){
    $(".ham-burger, .nav ul li a").click(function(){
     
      $(".nav").toggleClass("open")
      $(".ham-burger").toggleClass("active");
    })      
    $(".accordian-container").click(function(){
        $(".accordian-container").children(".body").slideUp();
        $(".accordian-container").removeClass("active")
        $(".accordian-container").children(".head").children("span").removeClass("fa-angle-down").addClass("fa-angle-up")
        $(this).children(".body").slideDown();
        $(this).addClass("active")
        $(this).children(".head").children("span").removeClass("fa-angle-up").addClass("fa-angle-down")
    })
     $(".nav ul li a, .go-down").click(function(event){
       if(this.hash !== ""){
            event.preventDefault();
            var hash=this.hash; 
            $('html,body').animate({
              scrollTop:$(hash).offset().top
            },800 , function(){
               window.location.hash=hash;
            });
            // add active class in navigation
            $(".nav ul li a").removeClass("active")
            $(this).addClass("active")
       }
    })
})

function Sum(a, b) {
  return sum(a + b)
  console.log("Done");
}
let a = 1;
let b = 2;


































































































































































