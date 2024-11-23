document.querySelector(".mobile-btn").addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("active");
});
const lessonContainer = document.querySelector('.lessons');
lessonContainer.innerHTML = fitnessClasses;
const hiddenMenu = document.querySelector('.desktop');
function openMenu() {
  hiddenMenu.classList.add('popup');
}
const lessonContainer = document.querySelector('.lessons');
lessonContainer.innerHTML = fitnessClasses;
const hiddenMenua = document.querySelector('.desktop');
function openMenu() {
  hiddenMenu.classList.add('popup');
}
const lessonContainer = document.querySelector('.lessons');
lessonContainer.innerHTML = fitnessClasses;
const hiddenMenus = document.querySelector('.desktop');
function openMenu() {
  hiddenMenu.classList.add('popup');
}
const lessonContainer = document.querySelector('.lessons');
lessonContainer.innerHTML = fitnessClasses;
const hiddenMenuss = document.querySelector('.desktop');
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
          $(".nav ul li a").removeClass("active")
          $(this).addClass("active")
     }
  })
})

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
          $(".nav ul li a").removeClass("active")
          $(this).addClass("active")
     }
  })
})

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
          $(".nav ul li a").removeClass("active")
          $(this).addClass("active")
     }
  })
})

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
          $(".nav ul li a").removeClass("active")
          $(this).addClass("active")
     }
  })
})

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
  $(".nav ul li a, .go-down").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html,body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
      $(".nav ul li a").removeClass("active")
      $(this).addClass("active")
    }
  });
})

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
  $(".nav ul li a, .go-down").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html,body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
      $(".nav ul li a").removeClass("active")
      $(this).addClass("active")
    }
  });
})

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
  $(".nav ul li a, .go-down").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html,body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
      $(".nav ul li a").removeClass("active")
      $(this).addClass("active")
    }
  });
})

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
  $(".nav ul li a, .go-down").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html,body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
      $(".nav ul li a").removeClass("active")
      $(this).addClass("active")
    }
  });
})

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
          $(".nav ul li a").removeClass("active")
          $(this).addClass("active")
     }
  })
})

// functions in javascript

function Sum(a, b) {
  return sum(a + b)
  
}
let a = 1;
let b = 2;

console.log("Done");
// strings

let k = `karan`; // this type of string is called template literal which is enclosed by backticks.
console.log(k);

// Map, Filter and reduce for arrays

//map
let array = [2, 3, 4]
console.log(array);

 let p = array.map((value) => {
   console.log(value)
   return value + 1
})
console.log(p);

//filter
let array2 = [10, 2, 6, 3, 5, 89]
 
let m = array2.filter((m) => {
  return m < 10;
})
console.log(m);
 
//reduce
let array3 = [10, 2, 6, 3, 5, 89]
 
let n = array2.reduce((n1, n2) => {
  return n1 + n2;
})
console.log(n);
 

























































































































































