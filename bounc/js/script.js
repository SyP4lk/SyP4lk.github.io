$(window).ready(function(){
    new WOW().init();


    $(window).scroll(function(){
        if($(this).scrollTop()>50){
            $('.header__hiden').css({
                display: 'flex',
                position: 'fixed'
            });
        }else{
            $('.header__hiden').css({
                display: 'none'
            });
        }
    })

    $(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
    });

    $('#da-slider').cslider({

        current		: 0, 	
        // index of current slide
        
        bgincrement	: 50,	
        // increment the background position 
        // (parallax effect) when sliding
        
        autoplay	: true,
        // slideshow on / off
        
        interval	: 4000  
        // time between transitions
        
    });

    function burgerClickOn() {
        let burgers = document.querySelectorAll('.burger'),
            menuHiden = document.querySelector('.menuHiden');
        $('.burger').on('click', () => {
            if(!$(this).hasClass("not_clicked")){
                $(burgers).toggleClass("clicked not_clicked")
                $(menuHiden).toggleClass("menuActive menuNotActive");
                
            }
            if($(this).hasClass("not_clicked")){
                $(burgers).toggleClass("not_clicked clicked");
                $(menuHiden).toggleClass("menuNotActive menuActive");
            }
        })
        
    }


    burgerClickOn();

    $(window).scroll(function(){
        if(($(this).scrollTop()>430) && ($(this).scrollTop()<1200)){
            document.querySelectorAll('.wpb_column ')[1].style.cssText = 'position: fixed;z-index: 20;max-width: 570px;top: 0; left: 50vw;right: 0;'
        }else if($(this).scrollTop()>1200){
            document.querySelectorAll('.wpb_column ')[1].style.cssText = 'position: absolute;z-index: 20;max-width: 570px;top: 1000px; left: 50vw;right: 0;'
        }
    })
    

    if(window.pageYOffset >= 545.6){
        document.querySelectorAll('.wpb_column ')[1].style.cssText = 'position: fixed;'
    }
})