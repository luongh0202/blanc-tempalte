// Call loader  
window.onload = function() {

 $('.loader').addClass('removing');
    setTimeout(function(){
        $('.loader').remove();
    }, 2000)
};
/*js menu mobile*/
$(document).ready(function ($) {
    $('#trigger-mobile').click(function() {
        $(".mobile-main-menu").addClass('active');
        $(".menu_toggle").addClass('active');
        $(".body").addClass('hidden_over');
    });
    $('.btn_close').click(function() {
        $(".mobile-main-menu").removeClass('active');
        $(".menu_toggle").removeClass('active');
        $(".body").removeClass('hidden_over');
    });
    $('.menu_toggle').click(function() {
        $(".mobile-main-menu").removeClass('active');
        $(".menu_toggle").removeClass('active');
        $(".body").removeClass('hidden_over');
    });
    $(window).resize( function(){
        if ($(window).width() > 1023) {
            $(".mobile-main-menu").removeClass('active');
            $(".menu_toggle").removeClass('active');
            $(".body").removeClass('hidden_over');
        }
    });
    $('.ng-has-child1 a .fa1').on('click', function(e){
        e.preventDefault();
        var $this = $(this);
        $this.parents('.ng-has-child1').find('.ul-has-child1').stop().slideToggle();
        $(this).toggleClass('active')
        return false;
    });
    $('.ng-has-child1 .ul-has-child1 .ng-has-child2 a .fa2').on('click', function(e){
        e.preventDefault();
        var $this = $(this);
        $this.parents('.ng-has-child1 .ul-has-child1 .ng-has-child2').find('.ul-has-child2').stop().slideToggle();
        $(this).toggleClass('active')
        return false;
    });
});
// js scroll menu
$(window).scroll(function () {
  if ($(window).width() > 911) {
    if ($(this).scrollTop() > 80) {
      $('.header_page').addClass('nav-container-fixed animated fadeInDown');
    } else {
      $('.header_page').removeClass('nav-container-fixed animated fadeInDown');
    }
   }
   }); 
$(document).ready(function(){
    //scroll top
    $('.back-to-top a').click(function (n) {
        n.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 200)
    });
    $(window).scroll(function () {
        $(document).scrollTop() > 1e3 ? $('.back-to-top').addClass('display') : $('.back-to-top').removeClass('display')
    });
});
// --  js CheckOut Page*/
$('[name="payment_method"]').on('click', function () { 
    var $value = $(this).attr('value'); 
    $('.sub_show').slideUp();
    $('.payment_method_' + $value).slideToggle(); 
});
// -- js magiamgia 
$('.mgg-code').click(function () {
    $('.mgg-inputcode').slideToggle(500);
}); 
// --  js Giaohang Page*/
$('[name="gh_method"]').on('click', function () { 
    var $value = $(this).attr('value'); 
    $('.sub_show').slideUp();
    $('.gh_method_' + $value).slideToggle(); 
});    
// -- js xuathoad
$('#is_xhd').click(function () {
$('#xhd-group').slideToggle(600);
});

var swiper = new Swiper(".slider_bisd", {
    effect: "fade",
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //     delay: 8000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });

