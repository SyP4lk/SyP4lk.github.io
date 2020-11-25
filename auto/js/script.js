$(document).ready(function(){
  let width = $(window).width(),
    left = width - 301;

$(document).ready(function(){
  $('.header__fixed').css({
    display: 'none'
  })
  $('.menu__fixed').css({
    display: 'none'
  })
  $('.menu__drops_fixed').css({
    display: 'none'
  });
})


if($(this).width() > 1106){
  $('.menu_lis').hover(function(){
    $('.menu_lis').each(function(i,elem){
        $('.menu__drops_fixed').css({
          display: 'block'
        })
        $('.menu__drop_content').css({
          display: 'flex'
        })
    })
  })
  
  $('.menu__drops_fixed').hover(function(){
    $('.menu_li').each(function(i,elem){
        $('.menu__drops_fixed').css({
          display: 'block'
        })
        $('.menu__drop_content').css({
          display: 'flex'
        })
    })
  })
  
  $('.menu__drops_fixed').mouseleave(function(){
    $('.menu_lis').each(function(i,elem){
        $('.menu__drops_fixed').css({
          display: 'none'
        })
        $('.menu__drop_content').css({
          display: 'none'
        })
    })
  })
  
  $('.menu_lis').mouseleave(function(){
    $('.menu_lis').each(function(i,elem){
        $('.menu__drops_fixed').css({
          display: 'none'
        })
        $('.menu__drop_content').css({
          display: 'none'
        })
    })
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.header__fixed').css({
        display: 'flex'
      })
      $('.menu__fixed').fadeIn();
    } else {
      $('.header__fixed').css({
          display: 'none'
      })
      $('.menu__fixed').fadeOut();
    }
  });

} else{
  $('.menu__fixed').css({
    display: 'none'
  })
  $('.menu__drops_fixed').css({
    display: 'none'
  })
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.header__fixed').css({
        display: 'flex'
      })
      $('.menu__fixed').css({
        display: 'none'
      });
    } else {
      $('.header__fixed').css({
          display: 'none'
      })
      $('.menu__fixed').css({
          display: 'none'
      })  
    }
  })
}

$('.header__burger').click(function(){
    $('.headers__space_menu').css({
        width: '300px'
    })
    $('.black').fadeIn();
    $('.menus__catalog').css({
        display: 'flex'
    })
    $('.headers__burger').fadeIn();
    $('.header__burger').fadeOut();
    $("body").addClass("fixed");
    $('.headers__but').fadeIn();
})

$('.headers__burger').click(function(){
    $('.headers__space_menu').css({
        width: '0px'
    })
    $('.black').fadeOut();
    $('.menus__catalog').css({
        display: 'none'
    });
    $('.headers__burger').fadeOut();
    $('.header__burger').fadeIn();
    $("body").removeClass("fixed");
    $('.headers__but').fadeOut();
})

$('.menu_li').hover(function(){
    $('.menu_li').each(function(i,elem){
        if($(this).hasClass("active")){
            $(this).removeClass('active');
        }
        
    })
    if($(this).hasClass("active")){
        $(this).removeClass('active');
    }else{
        $(this).addClass('active');
    }
})

$('.menu_li').hover(function(){
  $('.menu_li').each(function(i,elem){
      $('.menu__drop').css({
        display: 'block'
      })
      $('.menu__drop_content').css({
        display: 'flex'
      })
  })
})

$('.menu__drop').hover(function(){
  $('.menu_li').each(function(i,elem){
      $('.menu__drop').css({
        display: 'block'
      })
      $('.menu__drop_content').css({
        display: 'flex'
      })
  })
})

$('.menu__drop').mouseleave(function(){
  $('.menu_li').each(function(i,elem){
      $('.menu__drop').css({
        display: 'none'
      })
      $('.menu__drop_content').css({
        display: 'none'
      })
  })
})

$('.menu_li').mouseleave(function(){
  $('.menu_li').each(function(i,elem){
      $('.menu__drop').css({
        display: 'none'
      })
      $('.menu__drop_content').css({
        display: 'none'
      })
  })
})




$('.menu_lis').hover(function(){
  $('.menu_lis').each(function(i,elem){
      if($(this).hasClass("active")){
          $(this).removeClass('active');
      }
      
  })
  if($(this).hasClass("active")){
      $(this).removeClass('active');
  }else{
      $(this).addClass('active');
  }
})


  
  
  


$(document).ready(function(){
  $('.caruos__carousel').slick({
      dots: true,
      arrows: false
  });
});


  $(document).ready(function(){
    $('.partners__slider').slick({
        arrows: true,
        slidesToShow: 5,
        prevArrow: '<button type = "button" class = "slick-prev"><img src="img/caruos/back.png" alt=""></button>',
        nextArrow: '<button type = "button" class = "slick-next"><img src="img/caruos/next.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3,
                  dots: true
                }
              },
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false,
                        dots: true,
                        infinite: true
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true,
                        slidesToScroll: 1
                      }
                    }
                  ]
            
    });
  });




  $('.form__img').css({
    left: left
  })


  $('.menus_li').click(function(){
    $('.menus_li').each(function(i,elem){
        if($(this).hasClass("active")){
            $(this).removeClass('active');
        }
        
    })
    if($(this).hasClass("active")){
        $(this).removeClass('active');
    }else{
        $(this).addClass('active');
    }
  })

  $('.menus_li').click(function(){
    $('.menus_li').each(function(i,elem){
        $('.menus__drops_fixed').css({
          display: 'flex'
        })
    })
  })



  $(document).ready(function(){
    if($(this).width > 1106){
      $('.menu__fixed').css({
        display: 'flex'
    })
    }else{
      $('.menu__fixed').css({
        display: 'none '
    })
    }
  })


  $('#seach').hover(function(){
    $('.menu__searsh_input').css({
      display: 'block'
    })
    $(this).css({
      display: 'none'
    })
  })

  $('.menu__searsh_input').mouseleave(function(){
    $('.menu__searsh_input').css({
      display: 'none'
    })
    $('#seach').css({
      display: 'block'
    })
  })

  if(document.getElementById('input') === document.activeElement){
    $('.menu__searsh_input').css({
      display: 'block'
    })
    $('#seach').css({
      display: 'none'
    })
  }

})