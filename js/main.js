// Cart menu

$(window).ready(function(){
    $('.cart').click(function(){
      $('.blockcart').addClass('open');
      $(".cart-overlay").addClass("open");
    })
    $('.close').click(function(){
      $('.blockcart').removeClass('open');
      $(".cart-overlay").removeClass("open");
    })
    $('.floating-cart').click(function(){
      $('.blockcart').addClass('open');
      $(".cart-overlay").addClass("open");
    })
    $('.cart-overlay').click(function(){
      $(this).removeClass("open");
      $('.blockcart').removeClass('open');
    })
  });

//   Products color change
$('.colors div').hover(function () {
    $('.colors div').removeClass('borderd');
    var target = $(this).index();
    $(this).parents('.figure-logo').find('.figure img.image-hover').attr('src', 'img/' + target + '.webp');
    $(this).parents('.figure-logo').find('.figure img.image-hover').attr('srcset', 'img/' + target + '.webp');
    $(this).addClass('borderd')
});

// Wishlist fill
$('a.wishlist').click(function(e){
    $(this).toggleClass('fill')
    e.preventDefault();
})


// Mobile bottom menu
$('.mobile-bottom-menu li').click(function(e){
    $(this).toggleClass('fill-icon');
    e.preventDefault();
})

// Menu list view
$('.js-btn-view').click(function(){
  $(this).toggleClass('active')
})

