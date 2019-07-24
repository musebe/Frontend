// text javascript
$(function() {
  $(document).scroll(function() {
    var $nav = $('.navbar-fixed-top');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// add navbar background on scroll
$(window).scroll(function() {
  if ($(window).scrollTop() >= 2) {
    $('.navbar').css('background', '#f1f1f1');
  } else {
    $('.navbar').css('background', 'transparent');
  }
});

$(window).addEventListener('resize', function() {
  if (window.innerWidth > 767) {
    // change navbar left text color on scroll
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 2) {
        $('.navbar-left').css('color', '#064167');
      } else {
        $('.navbar-left').css('color', '#FBFBFB');
      }
    });
  }
});

// change navbar logo on scroll
var initialSrc = './assets/img/saada-logo-white.png';
var scrollSrc = './assets/img/saada-logo.png';

$(window).scroll(function() {
  var value = $(this).scrollTop();
  if (value > 2) {
    $('.mylogo').attr('src', scrollSrc);
  } else {
    $('.mylogo').attr('src', initialSrc);
  }
});

// change usecase tab backgroung image on click
$(document).ready(function() {
  $('#events-tab').on('click', function() {
    $('.usecaseBg').css({
      background: "url('../img/pictures/concert-01.jpg')",
      'background-size': 'cover',
      'background-position': ' center center'
    });
  });
  $('#entertainment-tab').on('click', function() {
    $('#usecase').css({
      background: "url('../img/pictures/cinema-01.jpg')",
      'background-size': 'cover',
      'background-position': ' center center'
    });
  });
  $('#travel-tab').on('click', function() {
    $('#usecase').css({
      background: "url('../img/pictures/travel-01.jpg')",
      'background-size': 'cover',
      'background-position': ' center center'
    });
  });
});