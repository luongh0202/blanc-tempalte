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
      $('#header_home').addClass('nav-container-fixed animated fadeInDown');
    } else {
      $('#header_home').removeClass('nav-container-fixed animated fadeInDown');
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

var swiper = new Swiper(".list_tab_product", {
  slidesPerView: 1,
  spaceBetween: 15,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop:true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    991: {
      slidesPerView: 3,
       spaceBetween: 70,
    },
  },
});
var swiper = new Swiper(".slider_img_product", {
    effect: "fade",
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });
var swiper = new Swiper(".slider_review", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop:true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
       spaceBetween: 16,
    },
    1200: {
      slidesPerView: 4,
       spaceBetween: 16,
    },
  },
});
var swiper = new Swiper(".slider_moment", {
  slidesPerView: 5,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 9,
    },
    991: {
      slidesPerView: 5,
       spaceBetween: 10,
    },
  },
});
$(".right_tfpp button").click(function(){
  $(".page_left_category").slideToggle();
  $(".right_tfpp").toggleClass("active");
});
$(".sort_product button").click(function(){
  $(".list_sort_product").slideToggle();
});
// nav product js
$(document).ready(function ($) {
    $('.btn_drop_filter button').click(function() {
        $(".left_wp_main_category").addClass('active');
        $(".menu_toggle").addClass('active');
        $(".body").addClass('hidden_over');
    });
    $('.btn_close_nav_mobie button').click(function() {
        $(".left_wp_main_category").removeClass('active');
        $(".menu_toggle").removeClass('active');
        $(".body").removeClass('hidden_over');
    });
    $('.menu_toggle').click(function() {
        $(".left_wp_main_category").removeClass('active');
        $(".menu_toggle").removeClass('active');
        $(".body").removeClass('hidden_over');
    });
});
$(document).ready(function(){
    var swiper = new Swiper(".pro_small", {
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        loop: true,
      });
      var swiper2 = new Swiper(".pro_big", {
        spaceBetween: 13,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
          },
        thumbs: {
          swiper: swiper,
        },
    });
});
$(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });
var swiper = new Swiper(".slider_products_related", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop:true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 4,
       spaceBetween: 54,
    },
  },
});
var swiper = new Swiper(".list_img_des", {
  slidesPerView: 1,
  spaceBetween: 16,
  loop:true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    991: {
      slidesPerView: 3,
       spaceBetween: 16,
    },
  },
});
var swiper = new Swiper(".slider_img_store", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    991: {
      slidesPerView: 1,
       spaceBetween: 16,
    },
  },
});
$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
// end
$(function(){
  function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
  
  $(document).on('click', '#register_but', function () {
            var password = $('#password_reg').val();
            var password_rep = $('#password_dup_reg').val();
        
            if(password != password_rep){
                $('.hidden-error-block').html('The entered passwords do not match').css('color', 'red');
                return false;
            }
            else if(password.length < 8){
                $('.hidden-error-block').html('Password does not match the requirements').css('color', 'red');
                return false;
            }

            else if( (password == password_rep) && (password.length > 6) && (password.match(/\d/)) && (password.match(/[A-Z]/)) && (password.match(/[A-z]/)) ){
                 $('.hidden-error-block').html('Good').css('color', 'green');
            }else{
                $('.hidden-error-block').html('Password does not match the requirements').css('color', 'red');
            }
        });
  
  $('#password_dup_reg').keyup(function () {
        var pas = $('#password_reg').val();
        var con_pas = $(this).val();
        if(pas === con_pas){
            $('.register_inp').css('border-color', 'seagreen');
        }else{
            $('.register_inp').css('border-color', 'red');
        }
    });
    $('#password_reg').keyup(function () {
        var pswd = $('#password_reg').val();
        if ( pswd.length < 6 ) {
            $('#length').removeClass('valid').addClass('invalid');
        } else {
            $('#length').removeClass('invalid').addClass('valid');
        }
        //validate letter
        if ( pswd.match(/[A-z]/) ) {
            $('#letter').removeClass('invalid').addClass('valid');
        } else {
            $('#letter').removeClass('valid').addClass('invalid');
        }
    }).focus(function() {
        $('#pswd_info').show(500);
    }).blur(function() {
        $('#pswd_info').hide(500);
    });
});

// end
$(".forgot_box_login a").click(function(){
  $(".wp_box_login").hide();
});
$(".forgot_box_login a").click(function(){
  $(".wp_forgot_pass").show();
});
$(".back_forgot").click(function(){
  $(".wp_forgot_pass").hide();
});
$(".back_forgot").click(function(){
  $(".wp_box_login").show();
});
$(".chuacotk-forgot a").click(function(){
  $(".wp_forgot_pass").hide();
});
$(".chuacotk-forgot a").click(function(){
  $(".wp_box_login").show();
});
