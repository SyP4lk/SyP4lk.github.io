$.fakeLoader({timeToHide:1200, // Время в миллисекундах для исчезновения прелоадера
  zIndex:"999",// Z-Index по умолчанию
  spinner:"spinner1",// Опциии: 'счетчик 1', 'счетчик 2', 'счетчик 3', 'счетчик 4', 'счетчик 5', 'счетчик 6', 'счетчик 7'
  bgColor:"#ffff", //Hex, RGB или RGBA цвета
});
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="slide/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="slide/right.png"></button>',
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
                breakpoint: 891,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
                }
              },
            {
              breakpoint: 889,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
//табы
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      
//переключает контент в окошках
      function toggleSlide(item){
        $(item).each(function(i){
          $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          });
        });
      }

      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');

      //modal

      $('.modal__close').on('click', function(){
        $('.overlay,#consultation,#order,#thanks').fadeOut();
      });

      
      $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation,.modal__close').fadeIn();
      });

      $('.button_mini').each(function(i){
        $(this).on('click',function(){
          $('#order .modal_descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order,.modal__close').fadeIn();
        });
      });

      //валидация форм
      function validateForms(form){
        $(form).validate({
          rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
          },
          messages: {
            name: "Обязательное поле для ввода",
            phone: "Обязательное поле для ввода",
            email: {
              required: "Обязательное поле для ввода",
              email: "Введите корректный email"
            }
          }
        });
      }

      validateForms('#consultation form');
      validateForms('#consultation-form');
      validateForms('#order form');
//маска ввода для телефона
      $('input[name=phone]').mask("+7 (999) 999-99-99");

      $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $("#consultation, #order").fadeOut();
            $(".overlay, #thanks").fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });


    $(window).scroll(function(){
      if($(this).scrollTop() > 1600){
        $('.pageup').fadeIn();
      }else{
        $('.pageup').fadeOut();
      }
    });

    $("a[href^='#up']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

    $("a[href^='#catalog']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

    new WOW().init();
});