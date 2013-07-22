$(window).load(function() {
  $('.flexslider').flexslider(
    {
    animation: "slide",
    useCSS: true,
    easing: "swing",
    pauseOnHover: true,
    slideshow: false,
    prevText: "<",
    nextText: ">",  
    }
  );
  $("[data-toggle='tooltip']").tooltip();
});