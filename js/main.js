$(window).on("scroll", function() {
  if($(window).scrollTop()) {
        $('nav').addClass('nav__bg');
        this.console.log($('nav'))
        $("nav .nav-link").css({"color": "black",});
        $("nav .btn-post").css({"color": "#fb236a","background":"white"});
        $("nav .navbar-brand").css({"display":"none"});
        $("nav .navbar-brand2").css({"display":"block"});
        $("header .nav--btn a").css({"color":"black"});
  }
  else {
        $('nav').removeClass('nav__bg');
        $("nav .nav-link").css({"color": "white",});
        $("nav .btn-post").css({"color": "white","background":"#fb236a"});
        $("nav .navbar-brand").css({"display":"block"});
        $("nav .navbar-brand2").css({"display":"none"});
        $("header .nav--btn a").css({"color":"white"});
  
      }
})


$('.slickslider').slick({
    dots:true,
    arrows:false,
    slidesToShow:3,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        },
       
      ]
  })

   