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

if(width > 800){
    anime({
        targets: '#pulse0',
        translateX: 60,
        translateY: 28,
        easing: 'linear',
        duration: 2000,
        loop: true
      });
      anime({
          targets: '#pulse1',
          translateX: 115,
          translateY: 5,
          easing: 'linear',
          duration: 2000,
          loop: true
        });
        anime({
          targets: '#pulse2',
          translateX: 315,
          translateY: 75,
          easing: 'linear',
          duration: 2000,
          loop: true
        });
        anime({
          targets: '#pulse3',
          translateX: -12,
          translateY: 15,
          easing: 'linear',
          duration: 2000,
          loop: true
        });
        anime({
          targets: '#pulse4',
          translateX: -120,
          translateY: 32,
          easing: 'linear',
          duration: 2000,
          loop: true
        });
        anime({
          targets: '#pulse5',
          translateX: -118,
          translateY: 45,
          easing: 'linear',
          duration: 2000,
          loop: true
        });
        anime({
          targets: '#pulse6',
          translateX: -98,
          translateY: 45,
          easing: 'linear',
          duration: 2000,
          loop: true
        });
}


if((width < 800) && (width > 546)){
        newPos(0.13, 0.2, '#newKub');
        newPos(0.107 , 0.225, '#samara');
        newPos(0.14,0.3,'#chelyabinsk');
        newPos(0.14,0.07,'#newRos');
        newPos(0.17,0.08,'#gelendgik')
        newPos(0.16,0.1,'#krasnodar');
        newPos(0.11,0.37,'#tumen');
        newPos(0.2,0.62,'#ulan');
        newPos(0.08,0.01,'#tolyati')
        newPos(0.06,0.16,'#moscow')
        newPos(0.1,0.313,"#ekaterenburg");
        newPos(0.11,0.04,'#sevastopol');
        newPos(0.01,0.165,'#yaroslavl');
        newPos(0.05,0.2,'#kazan');
        newPos(0.05,0.26,'#ufa');
        newPos(0.11,0.57,'#krasnoyarsk')
        newPos(0.17,0.61,'#irkutsk');
        newPos(0.17,0.275,'#grosniy');
        newPos(-0.05,0.2,'#peterburg')
}
if(width < 546){
        newPos(0.125, 0.203, '#newKub');
        newPos(0.105 , 0.219, '#samara');
        newPos(0.138,0.295,'#chelyabinsk');
        newPos(0.142,0.071,'#newRos');
        newPos(0.16,0.07,'#gelendgik')
        newPos(0.16,0.093,'#krasnodar');
        newPos(0.11,0.368,'#tumen');
        newPos(0.195,0.615,'#ulan');
        newPos(0.08,-0.0,'#tolyati')
        newPos(0.05,0.16,'#moscow')
        newPos(0.1,0.31,"#ekaterenburg");
        newPos(0.109,0.04,'#sevastopol');
        newPos(0.015,0.165,'#yaroslavl');
        newPos(0.045,0.19,'#kazan');
        newPos(0.04,0.25,'#ufa');
        newPos(0.112,0.56,'#krasnoyarsk')
        newPos(0.17,0.605,'#irkutsk');
        newPos(0.17,0.268,'#grosniy');
        newPos(-0.05,0.19,'#peterburg')
}