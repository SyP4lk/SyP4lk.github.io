let width = document.body.clientWidth,
    newWidt = (800 - width);

function newPos (top,left, id){
    let newTop =  parseInt($(id).css('top'))-(newWidt*top);
    let newLeft =  parseInt($(id).css('left'))-(newWidt*left);
    $(id).css({
        top: newTop,
        left: newLeft
    })
}

if((width < 800) && (width > 546)){
        newPos(0.12, 0.19, '#newKub');
        newPos(0.1 , 0.22, '#samara');
        newPos(0.14,0.3,'#chelyabinsk');
        newPos(0.13,0.06,'#newRos');
        newPos(0.18,0.08,'#gelendgik')
        newPos(0.17,0.08,'#krasnodar');
        newPos(0.1,0.4,'#tumen');
        newPos(0.18,0.63,'#ulan');
        newPos(0.07,-0.01,'#tolyati')
        newPos(0.07,0.16,'#moscow')
        newPos(0.09,0.3,"#ekaterenburg");
        newPos(0.09,0.06,'#sevastopol');
        newTop =  parseInt($('.karta__not-active').eq(4).css('top'))-(newWidt*0.05);
         newLeft =  parseInt($('.karta__not-active').eq(4).css('left'))-(newWidt*0.3);
        $('.karta__not-active').eq(4).css({
            top: newTop,
            left: newLeft
        })
        newTop =  parseInt($('.karta__not-active').eq(5).css('top'))-(newWidt*0.05);
         newLeft =  parseInt($('.karta__not-active').eq(5).css('left'))-(newWidt*0.4);
        $('.karta__not-active').eq(5).css({
            top: newTop,
            left: newLeft
        })
        newTop =  parseInt($('.karta__not-active').eq(6).css('top'))-(newWidt*0.1);
         newLeft =  parseInt($('.karta__not-active').eq(6).css('left'))-(newWidt*0.5);
        $('.karta__not-active').eq(6).css({
            top: newTop,
            left: newLeft
        })
        newTop =  parseInt($('.karta__not-active').eq(7).css('top'))-(newWidt*0.2);
         newLeft =  parseInt($('.karta__not-active').eq(7).css('left'))-(newWidt*0.54);
        $('.karta__not-active').eq(7).css({
            top: newTop,
            left: newLeft
        })
        newTop =  parseInt($('.karta__not-active').eq(8).css('top'))-(newWidt*0.2);
         newLeft =  parseInt($('.karta__not-active').eq(8).css('left'))-(newWidt*0.1);
        $('.karta__not-active').eq(8).css({
            top: newTop,
            left: newLeft
        })
    
}

if(width < 546){
    let newTop =  parseInt($('.karta__active').eq(2).css('top'))-(newWidt*0.14);
    let newLeft =  parseInt($('.karta__active').eq(2).css('left'))-(newWidt*0.30);
    $('.karta__active').eq(2).css({
        top: newTop,
        left: newLeft
    })
     newTop =  parseInt($('.karta__active').eq(0).css('top'))-(newWidt*0.06);
     newLeft =  parseInt($('.karta__active').eq(0).css('left'))-(newWidt*0.0);
    $('.karta__active').eq(0).css({
        top: newTop,
        left: newLeft
    })
    newTop =  parseInt($('.karta__active').eq(1).css('top'))-(newWidt*0.102);
     newLeft =  parseInt($('.karta__active').eq(1).css('left'))-(newWidt*0.22);
    $('.karta__active').eq(1).css({
        top: newTop,
        left: newLeft
    })
    newTop =  parseInt($('.karta__active').eq(3).css('top'))-(newWidt*0.12);
         newLeft =  parseInt($('.karta__active').eq(3).css('left'))-(newWidt*0.19);
        $('.karta__active').eq(3).css({
            top: newTop,
            left: newLeft
        })
        newTop =  parseInt($('.karta__active').eq(4).css('top'))-(newWidt*0.14);
        newLeft =  parseInt($('.karta__active').eq(4).css('left'))-(newWidt*0.07);
       $('.karta__active').eq(4).css({
           top: newTop,
           left: newLeft
       })
       newTop =  parseInt($('.karta__active').eq(5).css('top'))-(newWidt*0.17);
         newLeft =  parseInt($('.karta__active').eq(5).css('left'))-(newWidt*0.08);
        $('.karta__active').eq(5).css({
            top: newTop,
            left: newLeft
        })
        newTop =  parseInt($('.karta__active').eq(6).css('top'))-(newWidt*0.17);
         newLeft =  parseInt($('.karta__active').eq(6).css('left'))-(newWidt*0.08);
        $('.karta__active').eq(6).css({
            top: newTop,
            left: newLeft
        })
        newTop =  parseInt($('.karta__active').eq(7).css('top'))-(newWidt*0.11);
         newLeft =  parseInt($('.karta__active').eq(7).css('left'))-(newWidt*0.36);
        $('.karta__active').eq(7).css({
            top: newTop,
            left: newLeft
        })
        newTop =  parseInt($('.karta__active').eq(8).css('top'))-(newWidt*0.2);
         newLeft =  parseInt($('.karta__active').eq(8).css('left'))-(newWidt*0.63);
        $('.karta__active').eq(8).css({
            top: newTop,
            left: newLeft
        })
        newTop =  parseInt($('.karta__not-active').eq(0).css('top'))-(newWidt*0.05);
         newLeft =  parseInt($('.karta__not-active').eq(0).css('left'))-(newWidt*0.15);
        $('.karta__not-active').eq(0).css({
            top: newTop,
            left: newLeft
        })
        newTop =  parseInt($('.karta__not-active').eq(1).css('top'))-(newWidt*0.09);
         newLeft =  parseInt($('.karta__not-active').eq(1).css('left'))-(newWidt*0.3);
        $('.karta__not-active').eq(1).css({
            top: newTop,
            left: newLeft
        })
        newTop =  parseInt($('.karta__not-active').eq(2).css('top'))-(newWidt*0.1);
         newLeft =  parseInt($('.karta__not-active').eq(2).css('left'))-(newWidt*0.03);
        $('.karta__not-active').eq(2).css({
            top: newTop,
            left: newLeft
        })
        newTop =  parseInt($('.karta__not-active').eq(3).css('top'))-(newWidt*0.001);
         newLeft =  parseInt($('.karta__not-active').eq(3).css('left'))-(newWidt*0.19);
        $('.karta__not-active').eq(3).css({
            top: newTop,
            left: newLeft
        })
        newTop =  parseInt($('.karta__not-active').eq(4).css('top'))-(newWidt*0.03);
         newLeft =  parseInt($('.karta__not-active').eq(4).css('left'))-(newWidt*0.3);
        $('.karta__not-active').eq(4).css({
            top: newTop,
            left: newLeft
        })
        newTop =  parseInt($('.karta__not-active').eq(5).css('top'))-(newWidt*0.05);
         newLeft =  parseInt($('.karta__not-active').eq(5).css('left'))-(newWidt*0.38);
        $('.karta__not-active').eq(5).css({
            top: newTop,
            left: newLeft
        })
        newTop =  parseInt($('.karta__not-active').eq(6).css('top'))-(newWidt*0.11);
         newLeft =  parseInt($('.karta__not-active').eq(6).css('left'))-(newWidt*0.54);
        $('.karta__not-active').eq(6).css({
            top: newTop,
            left: newLeft
        })
        newTop =  parseInt($('.karta__not-active').eq(7).css('top'))-(newWidt*0.2);
         newLeft =  parseInt($('.karta__not-active').eq(7).css('left'))-(newWidt*0.54);
        $('.karta__not-active').eq(7).css({
            top: newTop,
            left: newLeft
        })
        newTop =  parseInt($('.karta__not-active').eq(8).css('top'))-(newWidt*0.19);
         newLeft =  parseInt($('.karta__not-active').eq(8).css('left'))-(newWidt*0.12);
        $('.karta__not-active').eq(8).css({
            top: newTop,
            left: newLeft
        })

}