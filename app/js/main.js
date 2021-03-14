
var currentSlide = 0;

function testimonialSlider(e) {
    var i = $("#testimonials-slider .slider-item");
    i[currentSlide].classList.remove("active-slide");
        i[e].classList.add("active-slide");
        currentSlide = e ;
    if(currentSlide == i.length-1) {
        $("#next").addClass("btn-disactive")
    } else if(0 == currentSlide) {
        $("#previous").addClass("btn-disactive")
    } else {
       $("#next").removeClass("btn-disactive")
       $("#previous").removeClass("btn-disactive") 
    }
}

function showNextSlide() {
    currentSlide < 2 && testimonialSlider(currentSlide + 1);
}

function showPreviousSlide() {
    0 < currentSlide && testimonialSlider(currentSlide - 1);
}

testimonialSlider(0);
$("#testimonials-slider #next").click(showNextSlide);
$("#testimonials-slider #previous").click(showPreviousSlide);


// RESPONSIVE NAVIGATION

function responsiveNav() {
  var mainMenu = document.querySelector('.main-menu'); 
  if( $(window).width() < 768) {
      document.querySelector('.hidden-nav-container').appendChild(mainMenu); 
   }

   $(".menu-icon").click(function () {
       $(this).toggleClass("menu-active");
       $('body').toggleClass('no-scroll');
       $('.circle-animation').toggleClass("reveal");
       $('.hidden-nav-container').toggleClass("reveal");
   });
}

responsiveNav();