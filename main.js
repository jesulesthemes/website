window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "25px";
     document.getElementById("logo").style.transform = "skew(30deg)";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "35px";
     document.getElementById("logo").style.transform = "skew(30deg)";
  }
}
function gotoRules(){
   $("#home").fadeOut();
   $("#photos").fadeOut();
   $("#rules").fadeIn();
}
function gotoPhotos(){
   $("#home").fadeOut();
   $("#photos").fadeIn();
   $("#rules").fadeout();
}
function gotoHome(){
   $("#home").fadeIn();
   $("#photos").fadeOut();
   $("#rules").fadeOut();
}
function Home(){
 window.location.href ="javascript:gotoHome()";  
}
$(document).ready(function() {
    $("#photos").fadeOut();
    $("#rules").fadeOut();
});
$(window).load(function(){

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

})
