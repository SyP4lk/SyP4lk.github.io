
$( document ).ready(function(){
    $(".mob__dropmenu").css ("box-shadow","0 6px 4px -4px rgb(0, 0, 0 , 0.2)");
    function drop (val1,val2,val3,val4){
        $(val1).mousemove(()=>{
            $(val2).css("display","block");
            $(val3).css("transform","scale(1, -1)");
        })
        $(val2).mousemove(()=>{
            $(val2).css("display","block");
            $(val3).css("transform","scale(1, -1)");
        })
        $(val2).mouseout(()=>{
            $(val2).css("display","none");
            $(val3).css("transform","");
        })
        $(val1).mouseout(()=>{
            $(val2).css("display","none");
            $(val3).css("transform","");
        })
    }
    drop("#js-dropdown1",".js-dm1","#arrow1")
    drop("#js-dropdown2",".js-dm2","#arrow2")
    drop("#js-dropdown3",".js-dm3","#arrow3")
    drop("#js-dropdown4",".js-dm4","#arrow4")
    drop("#js-sidelki",".js-dr1")
    drop("#js-reab",".js-dr2")

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $(".header__first").css("display","none");
          $(".header").css("position","fixed");
          $(".mob__first").css("display","none");
          $(".mob__descr").css("display","none");
          $(".mobile-header").css("position","fixed");
        } else {
            $(".header__first").css("display","flex");
            $(".header").css("position","");
            $(".mob__first").css("display","flex");
            $(".mob__descr").css("display","block");
            $(".mobile-header").css("position","");
        }
      });
    $('.buterbroad').on('click', function() {
        if (!$(this).hasClass('clicked')) { // если класса нет
          $(this).addClass('clicked'); // добавляем класс
          $(".mob__dropmenu").css("display","block");
          // код для первого клика
        } else { // если есть
          $(this).removeClass('clicked'); // убираем класс
          $(".mob__dropmenu").css("display","none"); // код для второго клика
        }
      });
    $("#sid").on('click', function() {
        if (!$(this).hasClass('clicked')) { // если класса нет
          $(this).addClass('clicked'); // добавляем класс
          $("#sidelka").css("display","block");
          // код для первого клика
        } else { // если есть
          $(this).removeClass('clicked'); // убираем класс
          $("#sidelka").css("display","none"); // код для второго клика
        }
      });
      $("#rb").on('click', function() {
        if (!$(this).hasClass('clicked')) { // если класса нет
          $(this).addClass('clicked'); // добавляем класс
          $("#reabil").css("display","block");
          // код для первого клика
        } else { // если есть
          $(this).removeClass('clicked'); // убираем класс
          $("#reabil").css("display","none"); // код для второго клика
        }
      });
      new ResizeSensor(jQuery('.accordion'), function() {
        let mobDropMenuHeight = $('.accordion').height();
        $(".mob__dropmenu").css("height", mobDropMenuHeight );
    });
  });