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

  $(".gallery").waypoint(function(){
    $(this).removeClass('fade-it');
  },{offset: '70%'});

  $("[data-toggle='tooltip']").tooltip();
});


$(window).scroll(function(){
  $(".gallery").waypoint(function(){
    $(this).removeClass('fade-it');
  },{offset: '70%'});
});