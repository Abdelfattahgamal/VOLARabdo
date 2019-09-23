particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
// var count_particles, stats, update;
//  stats = new Stats;
//   stats.setMode(0);
//    stats.domElement.style.position = 'absolute';
//     stats.domElement.style.left = '0px';
//      stats.domElement.style.top = '0px';
//       document.body.appendChild(stats.domElement);
//        count_particles = document.querySelector('.js-count-particles');
//         update = function() { stats.begin(); stats.end();
//              if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);
            

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 650 ) {
            $("nav").addClass("hamada")
        }
        else {
          $("nav").removeClass("hamada")
        }
    });

    $("ul li a").click( function(){
        $("html , body").animate({
            scrollTop:$( $(this).attr('href') ).offset().top
        } ,800)
    }); 
  $(window).scroll(function(){
    if($(this).scrollTop() > 300 ) {

        $("#scroll-top i").fadeIn();

           $('header').addClass('samll')

    } else {

        $("#scroll-top i").fadeOut()

        $("header").removeClass('samll')
    }
})
$("#scroll-top i").click(function(){
  $("html , body").animate({
      scrollTop:0
  } , 700)
})
});
$(function(){
    $("#clients-list").owlCarousel({
      items:6,
      autoPlay:false,
      smartSpeed:700,
      loop:true,
      autoPlayHoverPause:true,
      nav:false,
      dots:false,
      responsive:{
        0:{
          items:2
        },
        400:{
         items:3
       },
       768:{
         items:6
       }
      }
    });
   });
   var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });
  $("#news-slider").owlCarousel({
    items:3,
    itemsDesktop:[1199,9],
    itemsDesktopSmall:[1000,2],
    itemsMobile:[599,1],
    pagination:false,
    navigationText:false,
    autoPlay:true
 });
 $('.count').counterUp({
  delay: 10,
  time:4000
 });