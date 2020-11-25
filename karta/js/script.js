let width = document.body.clientWidth,
    newWidt = (800 - width);

if((width < 800) && (width > 546)){
        let newTop =  parseInt($('.karta__active').eq(2).css('top'))-(newWidt*0.16);
        let newLeft =  parseInt($('.karta__active').eq(2).css('left'))-(newWidt*0.30);
        $('.karta__active').eq(2).css({
            top: newTop,
            left: newLeft
        })
         newTop =  parseInt($('.karta__active').eq(0).css('top'))-(newWidt*0.07);
         newLeft =  parseInt($('.karta__active').eq(0).css('left'))-(newWidt*0.02);
        $('.karta__active').eq(0).css({
            top: newTop,
            left: newLeft
        })
        newTop =  parseInt($('.karta__active').eq(1).css('top'))-(newWidt*0.11);
         newLeft =  parseInt($('.karta__active').eq(1).css('left'))-(newWidt*0.22);
        $('.karta__active').eq(1).css({
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

}