// text javascript
$(function() {
  $(document).scroll(function() {
    var $nav = $('.navbar-fixed-top');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// add navbar background on scroll
$(window).scroll(function () {
  if ($(window).scrollTop() >= 2) {
    $('.navbar').css('background','#f1f1f1');
  } else {
    $('.navbar').css('background','transparent');
  }
});

// change navbar left text color on scroll
$(window).scroll(function () {
  if ($(window).scrollTop() >= 2) {
    $('.navbar-left').css('color','#064167');
  } else {
    $('.navbar-left').css('color','#FBFBFB');
  }
});

// change navbar logo on scroll
var initialSrc = "assets/img/saada-logo-white.png";
var scrollSrc = "assets/img/saada-logo.png";

$(window).scroll(function() {
   var value = $(this).scrollTop();
   if (value > 2)
      $(".logo").attr("src", scrollSrc);
   else
      $(".logo").attr("src", initialSrc);
});

// change usecase tab backgroung image on click
$(document).ready(function (){
  $("#events-tab").on("click",function() {
    $("#usecase").css({"background-image":"url('/dist/assets/img/pictures/concert-01.jpg')"});
  });
  $("#entertainment-tab").on("click",function() {
    $("#usecase").css({"background-image":"url('/dist/assets/img/pictures/cinema-01.jpg')"});
  });
  $("#travel-tab").on("click",function() {
    $("#usecase").css({"background-image":"url('/dist/assets/img/pictures/travel-01.jpg')"});
  });
});