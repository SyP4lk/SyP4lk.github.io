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
        newPos(0.02,0.16,'#yaroslavl');
        newPos(0.04,0.2,'#kazan');
        newPos(0.05,0.27,'#ufa');
        newPos(0.13,0.58,'#krasnoyarsk')
        newPos(0.17,0.62,'#irkutsk');
        newPos(0.17,0.28,'#grosniy');
        newPos(-0.05,0.2,'#peterburg')
    
}

if(width < 546){
    newPos(0.13, 0.2, '#newKub');
        newPos(0.105 , 0.215, '#samara');
        newPos(0.14,0.29,'#chelyabinsk');
        newPos(0.14,0.06,'#newRos');
        newPos(0.16,0.06,'#gelendgik')
        newPos(0.16,0.09,'#krasnodar');
        newPos(0.11,0.376,'#tumen');
        newPos(0.19,0.62,'#ulan');
        newPos(0.07,-0.01,'#tolyati')
        newPos(0.06,0.16,'#moscow')
        newPos(0.1,0.31,"#ekaterenburg");
        newPos(0.1,0.04,'#sevastopol');
        newPos(0.02,0.16,'#yaroslavl');
        newPos(0.04,0.2,'#kazan');
        newPos(0.04,0.25,'#ufa');
        newPos(0.115,0.57,'#krasnoyarsk')
        newPos(0.17,0.61,'#irkutsk');
        newPos(0.17,0.26,'#grosniy');
        newPos(-0.05,0.2,'#peterburg')
}